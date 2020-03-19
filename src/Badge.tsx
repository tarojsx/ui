import React, { useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import '../style/Badge.scss'

export interface BadgeProps {
    className?: string
    style?: React.CSSProperties
    dot?: boolean
    value?: number | string
    maxValue?: number
}

export const Badge: React.FC<BadgeProps> = props => {
    const { className, style, children, dot, value, maxValue = 99 } = props

    const text = useMemo(() => {
        const num = Number(value)

        return Number.isInteger(num) ? (num > maxValue ? `${maxValue}+` : value?.toString()) : ''
    }, [value, maxValue])

    return (
        <View className={classNames('at-badge', className)} style={style}>
            {children}
            {dot ? <View className="at-badge__dot" /> : text !== '' && <View className="at-badge__num">{text}</View>}
        </View>
    )
}
