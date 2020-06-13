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

export const Badge: React.FC<BadgeProps> = (props) => {
    const { className, style, children, dot, value, maxValue = 99 } = props

    const text = useMemo(() => {
        if (value === '' || value === null || typeof value === 'undefined') return ''
        const numValue = +value
        if (Number.isNaN(numValue)) {
            return value
        }
        return numValue > maxValue ? `${maxValue}+` : numValue
    }, [value, maxValue])

    return (
        <View className={classNames('at-badge', className)} style={style}>
            {children}
            {dot ? <View className="at-badge__dot" /> : text !== '' && <View className="at-badge__num">{text}</View>}
        </View>
    )
}
