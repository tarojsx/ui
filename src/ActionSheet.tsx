import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetProps } from 'taro-ui/types/action-sheet'

import '../style/ActionSheet.scss'

export interface ActionSheetProps extends Pick<AtActionSheetProps, 'onClose' | 'onCancel'> {
    className?: string
    style?: React.CSSProperties
    isOpened?: boolean
    title?: React.ReactNode
    cancelText?: React.ReactNode
}

export const ActionSheet: React.FC<ActionSheetProps> = props => {
    const { className, style = {}, isOpened, title, cancelText = '取消', children } = props

    const onClose = useCallback(
        e => {
            if (props.onClose) {
                props.onClose(e)
            }
        },
        [props.onClose]
    )

    const onCancel = useCallback(
        e => {
            if (props.onCancel) {
                props.onCancel(e)
            }
            onClose(e)
        },
        [onClose, props.onCancel]
    )

    const onTouchMove = useCallback(e => {
        e.stopPropagation()
        e.preventDefault()
    }, [])

    return (
        <View
            className={classNames('at-action-sheet', { 'at-action-sheet--active': isOpened }, className)}
            style={style}
            onTouchMove={onTouchMove}
        >
            <View onClick={onClose} className="at-action-sheet__overlay" />
            <View className="at-action-sheet__container">
                {title && <View className="at-action-sheet__header">{title}</View>}
                <View className="at-action-sheet__body">
                    {children}
                    {cancelText && (
                        <View className="at-action-sheet__footer" onClick={onCancel}>
                            {cancelText}
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
