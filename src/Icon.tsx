import React from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { Text, CommonEventFunction } from '@tarojs/components'
import { AtIconBaseProps } from 'taro-ui/types/base'

import '../style/Icon.scss'

export interface IconProps extends Omit<AtIconBaseProps, 'customStyle' | 'size'> {
    style?: React.CSSProperties
    size?: number | string
    onClick?: CommonEventFunction
}

export const Icon: React.FC<IconProps> = props => {
    const { className, style = {}, prefixClass = 'at-icon', value, color, size, ...rest } = props

    const iconName = value && `${prefixClass}-${value}`
    const iconStyle: React.CSSProperties = {
        color,
        ...style,
    }
    if (size) iconStyle.fontSize = Taro.pxTransform(Number(size) * 2)

    return <Text className={classNames(prefixClass, iconName, className)} style={iconStyle} {...rest} />
}
