import React from 'react'
import classNames from 'classnames'
import { View, Text, Image, CommonEventFunction } from '@tarojs/components'

import { Badge } from './Badge'
import '../style/TabBar.scss'

export type TabBarListItem = {
    /** key */
    key?: string
    /** 标题 */
    title: string
    /** icon className 前缀，用于第三方字体图标库，比如想使用'fa fa-clock' 的图标，则 传入`iconPrefixClass='fa' iconType='clock'`，[拓展图标库详细](https://taro-ui.jd.com/#/docs/icon) */
    iconPrefixClass?: string
    /** 未选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](https://taro-ui.jd.com/#/docs/icon) */
    iconType?: string
    /** 选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](https://taro-ui.jd.com/#/docs/icon) */
    selectedIconType?: string
    /** 未选中时图片icon的链接 */
    image?: string
    /** 选中时图片icon的链接 */
    selectedImage?: string
    /** 右上角显示到文本，可以为数字或文字，如果有 dot，优先显示 dot */
    text?: string
    /** text 可显示的最大数字，超过则显示最大数字加'+'，如'99+' */
    max?: number
    /** 是否显示红点，优先级比 text 高 */
    dot?: boolean
}
export interface TabBarProps {
    className?: string
    style?: React.CSSProperties
    backgroundColor?: string
    color?: string
    selectedColor?: string
    iconSize?: number
    fontSize?: number
    current?: number
    fixed?: boolean
    scroll?: boolean
    tabList: TabBarListItem[]
    onClick?: CommonEventFunction<{ value: number }>
}

export const TabBar: React.FC<TabBarProps> = props => {
    const {
        className,
        style = {},
        fixed,
        backgroundColor,
        tabList,
        current,
        color,
        iconSize,
        fontSize,
        selectedColor,
        onClick,
    } = props

    if (!tabList) return null

    const rootStyle: React.CSSProperties = backgroundColor ? { backgroundColor } : {}
    const defaultStyle: React.CSSProperties = color ? { color } : {}
    const selectedStyle: React.CSSProperties = selectedColor ? { color: selectedColor } : {}
    const titleStyle: React.CSSProperties = fontSize ? { fontSize: `${fontSize}px` } : {}
    const imgStyle: React.CSSProperties = { width: `${iconSize}px`, height: `${iconSize}px` }

    return (
        <View
            className={classNames('at-tab-bar', { 'at-tab-bar--fixed': fixed }, className)}
            style={{ ...rootStyle, ...style }}
        >
            {tabList.map((item, index) => (
                <View
                    key={item.key || item.title || index}
                    className={classNames('at-tab-bar__item', { 'at-tab-bar__item--active': current === index })}
                    style={current === index ? selectedStyle : defaultStyle}
                    onClick={e => {
                        e.detail.value = index
                        onClick && onClick(e)
                    }}
                >
                    {item.iconType ? (
                        <Badge dot={!!item.dot} value={item.text} maxValue={item.max}>
                            <View className="at-tab-bar__icon">
                                <Text
                                    className={classNames(`${item.iconPrefixClass || 'at-icon'}`, {
                                        [`${item.iconPrefixClass || 'at-icon'}-${item.selectedIconType}`]:
                                            current === index && item.selectedIconType,
                                        [`${item.iconPrefixClass || 'at-icon'}-${item.iconType}`]: !(
                                            current === index && item.selectedIconType
                                        ),
                                    })}
                                    style={{
                                        color: current === index ? selectedColor : color,
                                        fontSize: iconSize ? `${iconSize}px` : '',
                                    }}
                                ></Text>
                            </View>
                        </Badge>
                    ) : null}

                    {item.image ? (
                        <Badge dot={!!item.dot} value={item.text} maxValue={item.max}>
                            <View className="at-tab-bar__icon">
                                <Image
                                    className={classNames('at-tab-bar__inner-img', {
                                        'at-tab-bar__inner-img--inactive': current !== index,
                                    })}
                                    mode="widthFix"
                                    src={item.selectedImage || item.image}
                                    style={imgStyle}
                                ></Image>
                                <Image
                                    className={classNames('at-tab-bar__inner-img', {
                                        'at-tab-bar__inner-img--inactive': current === index,
                                    })}
                                    mode="widthFix"
                                    src={item.image}
                                    style={imgStyle}
                                ></Image>
                            </View>
                        </Badge>
                    ) : null}

                    <View>
                        <Badge
                            dot={item.iconType || item.image ? false : !!item.dot}
                            value={item.iconType || item.image ? null : item.text}
                            maxValue={item.iconType || item.image ? null : item.max}
                        >
                            <View className="at-tab-bar__title" style={titleStyle}>
                                {item.title}
                            </View>
                        </Badge>
                    </View>
                </View>
            ))}
        </View>
    )
}
