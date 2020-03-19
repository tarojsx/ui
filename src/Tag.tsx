import React from 'react'
import classNames from 'classnames'
import { View, CommonEventFunction } from '@tarojs/components'

import '../style/Tag.scss'

export interface TagProps {
    className?: string
    style?: React.CSSProperties
    type?: 'primary'
    size?: 'small'
    name?: string
    circle?: boolean
    active?: boolean
    disabled?: boolean
    onClick?: CommonEventFunction
}

export const Tag: React.FC<TagProps> = props => {
    const { className, style, children, type, size = 'normal', circle, disabled, active, onClick } = props

    return (
        <View
            className={classNames(
                'at-tag',
                {
                    [`at-tag--${size}`]: size,
                    [`at-tag--${type}`]: type,
                    'at-tag--disabled': disabled,
                    'at-tag--active': active,
                    'at-tag--circle': circle,
                },
                className
            )}
            style={style}
            onClick={onClick}
        >
            {children}
        </View>
    )
}
