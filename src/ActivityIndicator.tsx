import React from 'react'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { AtActivityIndicatorProps } from 'taro-ui/types/activity-indicator'

import { Loading } from './Loading'
import '../style/ActivityIndicator.scss'

export interface ActivityIndicatorProps extends AtActivityIndicatorProps {
    isOpened?: boolean
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = props => {
    const { className, color, size, mode, content, isOpened = true, children } = props

    const rootClass = classNames(
        'at-activity-indicator',
        {
            'at-activity-indicator--center': mode === 'center',
            'at-activity-indicator--isopened': isOpened,
        },
        className
    )

    return (
        <View className={rootClass}>
            <View className="at-activity-indicator__body">
                <Loading size={size} color={color} />
            </View>
            {content && <Text className="at-activity-indicator__content">{content}</Text>}
            {children}
        </View>
    )
}
