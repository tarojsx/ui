import React from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { AtStepsProps } from 'taro-ui/types/steps'

import '../style/Steps.scss'

export interface StepsProps extends Omit<AtStepsProps, 'items'> {
    style?: React.CSSProperties
    items?: {
        title: React.ReactNode
        status?: 'success' | 'error' | string
        icon?: { value: string }
        desc?: React.ReactNode
    }[]
}

export const Steps: React.FC<StepsProps> = props => {
    const { className, style = {}, items, current = 0, onChange } = props

    return (
        <View className={classNames('at-steps', className)} style={style}>
            {items?.map((item, i) => (
                <View
                    key={`${item.title}${i}`}
                    className={classNames({
                        'at-steps__item': true,
                        'at-steps__item--active': i === current,
                        'at-steps__item--inactive': i !== current,
                    })}
                    onClick={e => onChange?.(i, e as any)}
                >
                    <View className="at-steps__circular-wrap">
                        {i !== 0 && <View className="at-steps__left-line"></View>}
                        {item.status ? (
                            <View
                                className={classNames('at-icon', 'at-steps__single-icon', {
                                    'at-icon-check-circle': item.status === 'success',
                                    'at-icon-close-circle': item.status === 'error',
                                    'at-steps__single-icon--success': item.status === 'success',
                                    'at-steps__single-icon--error': item.status === 'error',
                                })}
                            ></View>
                        ) : (
                            <View className="at-steps__circular">
                                {item.icon ? (
                                    <Text
                                        className={classNames('at-icon', 'at-steps__circle-icon', {
                                            [`at-icon-${item.icon.value}`]: item.icon.value,
                                        })}
                                    ></Text>
                                ) : (
                                    <Text className="at-steps__num">{i + 1}</Text>
                                )}
                            </View>
                        )}
                        {i !== items.length - 1 && <View className="at-steps__right-line" />}
                    </View>
                    <View className="at-steps__title">{item.title}</View>
                    <View className="at-steps__desc">{item.desc}</View>
                </View>
            ))}
        </View>
    )
}
