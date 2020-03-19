import React from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'

import '../style/Progress.scss'

export interface ProgressProps {
    className?: string
    style?: React.CSSProperties
    /** 进度 */
    percent?: number
    /** 状态 */
    status?: 'progress' | 'success' | 'error'
    /** 颜色 */
    color?: string
    /** 宽度 */
    strokeWidth?: number
    /** 是否隐藏文字 */
    isHidePercent?: boolean
    /** 过渡动画所需的时间. 默认: 0.3, 单位: 秒, 禁用可提高性能. */
    transitionDuration?: number
}

export const Progress: React.FC<ProgressProps> = props => {
    const {
        className,
        style = {},
        percent: initialPercent = 0,
        status,
        color,
        strokeWidth,
        isHidePercent,
        transitionDuration = 0.3,
    } = props
    const percent = Math.min(100, Math.max(0, initialPercent))

    const rootClass = classNames('at-progress', { [`at-progress--${status}`]: status }, className)
    const iconClass = classNames('at-icon', {
        'at-icon-close-circle': status === 'error',
        'at-icon-check-circle': status === 'success',
    })

    const progressStyle: React.CSSProperties = {
        width: percent && `${+percent}%`,
        height: strokeWidth && `${+strokeWidth}px`,
        backgroundColor: color,
    }
    progressStyle.transitionDuration = `${transitionDuration ?? 0}s`

    return (
        <View className={rootClass} style={style}>
            <View className="at-progress__outer">
                <View className="at-progress__outer-inner">
                    <View className="at-progress__outer-inner-background" style={progressStyle} />
                </View>
            </View>

            {!isHidePercent && (
                <View className="at-progress__content">
                    {!status || status === 'progress' ? `${percent}%` : <Text className={iconClass}></Text>}
                </View>
            )}
        </View>
    )
}
