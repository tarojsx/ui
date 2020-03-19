import React, { useRef, useState, useCallback, useEffect } from 'react'
import Taro, { useDidShow, useDidHide } from '@tarojs/taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import '../style/Message.scss'

export interface MessageProps {
    className?: string
    style?: React.CSSProperties
}

// 绑定函数
Taro.atMessage = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'atMessage')

export const Message: React.FC<MessageProps> = props => {
    const { className, style } = props

    const timerRef = useRef<any>()
    const [{ isOpened, type, message }, setState] = useState({
        isOpened: false,
        message: '',
        type: 'info',
        duration: 3000,
    })

    const atMessageHandler = (options = {} as Taro.AtMessageOptions) => {
        clearTimeout(timerRef.current)

        const { message, type, duration = 3000 } = options
        setState(prev => ({ ...prev, isOpened: true, message, type, duration }))

        timerRef.current = setTimeout(() => setState(prev => ({ ...prev, isOpened: false })), duration)
    }

    useEffect(() => {
        Taro.eventCenter.on('atMessage', atMessageHandler)

        return () => Taro.eventCenter.off('atMessage', atMessageHandler)
    }, [])

    useDidShow(() => {
        Taro.eventCenter.on('atMessage', atMessageHandler)
    })

    useDidHide(() => {
        Taro.eventCenter.off('atMessage', atMessageHandler)
    })

    return (
        <View
            className={classNames(
                'at-message',
                { 'at-message--show': isOpened, 'at-message--hidden': !isOpened },
                `at-message--${type}`,
                className
            )}
            style={style}
        >
            {message}
        </View>
    )
}
