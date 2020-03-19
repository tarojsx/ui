import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import { Icon, IconProps } from './Icon'
import '../style/ListHeader.scss'

interface ListHeaderProps {
    className?: string
    style?: React.CSSProperties
    title: React.ReactNode
    transparent?: boolean
    thumb?: string
    iconInfo?: IconProps
    iconType?: string
    iconPrefixClass?: string
    iconColor?: string
    iconSize?: number
    sticky?: boolean
    top?: number | string
}

export const ListHeader: React.FC<ListHeaderProps> = props => {
    const {
        className,
        style = {},
        children,
        title,
        transparent = false,
        thumb,
        iconInfo,
        sticky = false,
        top = 0,
    } = props

    return (
        <View
            className={classNames(
                'at-list-header',
                {
                    [`at-list-header--sticky`]: sticky,
                    [`at-list-header--icon`]: iconInfo,
                    [`at-list-header--transparent`]: transparent,
                    [`at-list-header--thumb`]: thumb,
                },
                className
            )}
            style={{ ...style, top }}
        >
            <View className="at-list-header__text">
                {iconInfo && <Icon className="at-list-header__icon" {...iconInfo} />}
                {title}
            </View>
            <View className="at-list-header__right">{children}</View>
        </View>
    )
}
