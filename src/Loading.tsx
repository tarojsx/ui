import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import '../style/Loading.scss'

export interface LoadingProps {
    size?: string | number
    color?: string | number
}

export const Loading: React.FC<LoadingProps> = props => {
    const { color, size = '' } = props

    const loadingSize = typeof size === 'string' ? size : String(size)
    const sizeStyle = {
        width: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
        height: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
    }
    const colorStyle = {
        border: color ? `1px solid ${color}` : '',
        borderColor: color ? `${color} transparent transparent transparent` : '',
    }
    const ringStyle = { ...colorStyle, ...sizeStyle }

    return (
        <View className="at-loading" style={sizeStyle}>
            <View className="at-loading__ring" style={ringStyle}></View>
            <View className="at-loading__ring" style={ringStyle}></View>
            <View className="at-loading__ring" style={ringStyle}></View>
        </View>
    )
}
