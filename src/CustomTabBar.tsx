import React, { useMemo, useState, useCallback, useEffect } from 'react'
import Taro, { eventCenter, AppConfig } from '@tarojs/taro'
import { uuid } from './utils'

type TabBarConfig = AppConfig['tabBar']
type TabBarItemConfig = TabBarConfig['list'][number]
type CustomTabBarItem = TabBarItemConfig & { key: string; badge: string; redDot: boolean }
type CustomTabBarStyle = Pick<TabBarConfig, 'position' | 'color' | 'selectedColor' | 'borderStyle' | 'backgroundColor'>
export interface CustomTabBarProps {
    children?: (renderProps: {
        /** 是否隐藏. 当调用 `Taro.hideTabBar()` 后值为 true */
        hidden: boolean
        /** 当前选中项索引 */
        current: number
        /** TabBar 样式 */
        style: CustomTabBarStyle
        /** Tab 列表 */
        list: CustomTabBarItem[]
        /**
         * 切换选中项
         *
         * **注意**: 只有调用此接口才能更新选中项!
         */
        switchTabIndex(index: number): void
    }) => React.ReactElement
    /**
     * `app.config.js` 中的 `tabBar` 字段
     *
     * @example
     * ```tsx
     *  import appConfig from '../app.config'
     *  <CustomTabBar appTabBarConfig={appConfig.tabBar} />
     * ```
     */
    appTabBarConfig: TabBarConfig
}

let taroTabBarAPIPatched = false
/** 将 Taro TabBar 相关 API 替换为触发事件, 启用自定义 TabBar 以后原 API 会报错, 所以此处直接覆盖. */
const taroTabBarAPIPatcher = () => {
    if (taroTabBarAPIPatched) return
    for (const api of [
        'hideTabBar',
        'showTabBar',
        'setTabBarStyle',
        'setTabBarItem',
        'setTabBarBadge',
        'removeTabBarBadge',
        'showTabBarRedDot',
        'hideTabBarRedDot',
    ]) {
        Taro[api] = (params?: any) => eventCenter.trigger('atCustomTabBar', api, params)
    }
    taroTabBarAPIPatched = true
}

/**
 * 默认选中值
 *
 * 当无法从路由信息中获取值的时候, 以默认值为准, 默认值在切换 Tab 时进行修改, 以实现新初始化的 TabBar 显示正确的选中项.
 */
let defaultCurrentIndex = -1

/**
 * 自定义 TabBar Render Props 组件, 提供用于渲染自定义 TabBar 所需的属性.
 *
 * 支持 API:
 * * `Taro.hideTabBar()`
 * * `Taro.showTabBar()`
 *
 * @since 2.5.0 微信开发者工具调试基础库 >= 2.5.2
 */
export const CustomTabBar: React.FC<CustomTabBarProps> = props => {
    const { children, appTabBarConfig } = props

    const { custom, list, ...defaultTabBarStyle } = appTabBarConfig

    const [hidden, setHidden] = useState(false)

    /**
     * 根据路由推断 current index.
     * 当前版本 taro 3.0.0.alpha.9 在程序启动时返回 router, 之后总是返回 null.
     */
    const routerIndex = useMemo(
        () => list.findIndex(item => Taro['Current'].router?.path.startsWith(item.pagePath)),
        []
    )
    const [current, setCurrent] = useState(~routerIndex ? routerIndex : defaultCurrentIndex)

    const [tabBarStyle, setTabBarStyle] = useState(defaultTabBarStyle)
    const [tabBarList, setTabBarList] = useState(
        list.map<CustomTabBarItem>(item => ({
            ...item,
            key: uuid(),
            pagePath: '/' + item.pagePath,
            iconPath: '/' + item.iconPath,
            selectedIconPath: item.selectedIconPath ? '/' + item.selectedIconPath : undefined,
            badge: '',
            redDot: false,
        }))
    )
    const updateTabBarListAt = useCallback(
        (tabIndex: number, params: Partial<CustomTabBarItem>) => {
            setTabBarList(prev => prev.map((item, index) => (index === tabIndex ? { ...item, ...params } : item)))
        },
        [setTabBarList]
    )

    /**
     * 用户点击 Tab
     *
     * 1. 记录全局索引, 如果下一个 Tab 是初次访问, 并且没能从路由中推断出索引, 则使用全局索引.
     * 2. 触发事件, 通知所有已经初始化的自定义 TabBar 更新索引.
     * 3. 切换 Tab 页面.
     */
    const switchTabIndex = useCallback(
        (index: number) => {
            if (index >= 0 && index < tabBarList.length) {
                defaultCurrentIndex = index
                eventCenter.trigger('atCustomTabBar', 'switchTabIndex', { index })
                Taro.switchTab({ url: tabBarList[index].pagePath })
            }
        },
        [tabBarList]
    )

    useEffect(() => {
        // console.log('CustomTabBar mounted')

        taroTabBarAPIPatcher()

        /** 处理打过补丁后的 Taro API 传过来的事件. */
        const handler = (api: string, { index, ...params } = {} as any) => {
            switch (api) {
                case 'switchTabIndex':
                    setCurrent(index)
                    break

                case 'hideTabBar':
                    setHidden(true)
                    break
                case 'showTabBar':
                    setHidden(false)
                    break

                case 'setTabBarStyle':
                    setTabBarStyle(params)
                    break
                case 'setTabBarItem':
                    updateTabBarListAt(index, params)
                    break

                case 'setTabBarBadge':
                    updateTabBarListAt(index, { badge: params.text })
                    break
                case 'removeTabBarBadge':
                    updateTabBarListAt(index, { badge: '' })
                    break

                case 'showTabBarRedDot':
                    updateTabBarListAt(index, { redDot: true })
                    break
                case 'hideTabBarRedDot':
                    updateTabBarListAt(index, { redDot: false })
                    break

                default:
                    break
            }
        }
        eventCenter.on('atCustomTabBar', handler)

        return () => {
            // console.log('CustomTabBar unmounted')
            eventCenter.off('atCustomTabBar', handler)
        }
    }, [])

    return children ? children({ hidden, current, style: tabBarStyle, list: tabBarList, switchTabIndex }) : null
}
