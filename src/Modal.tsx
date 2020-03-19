import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View, ScrollView, Button } from '@tarojs/components'
import { AtModalProps } from 'taro-ui/types/modal'

import '../style/Modal.scss'

export interface ModalProps extends Omit<AtModalProps, 'title' | 'content'> {
    style?: React.CSSProperties
    title?: React.ReactNode
    content?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = props => {
    const {
        className,
        style = {},
        children,
        isOpened,
        title,
        content,
        cancelText,
        confirmText,
        closeOnClickOverlay = true,
    } = props

    const onClose = useCallback(
        e => {
            props.onClose?.(e)
        },
        [props.onClose]
    )

    const onCancel = useCallback(
        e => {
            props.onCancel?.(e)
            onClose(e)
        },
        [props.onCancel, onClose]
    )

    const onConfirm = useCallback(
        e => {
            props.onConfirm?.(e)
        },
        [props.onConfirm]
    )

    const onClickOverlay = useCallback(
        e => {
            if (closeOnClickOverlay) {
                onClose(e)
            }
        },
        [closeOnClickOverlay, onClose]
    )

    const rootClass = classNames('at-modal', { 'at-modal--active': isOpened }, className)

    if (title || content) {
        return (
            <View className={rootClass} style={style}>
                <View onClick={this.handleClickOverlay} className="at-modal__overlay" />
                <View className="at-modal__container">
                    {title && <View className="at-modal__header">{title}</View>}
                    {content && (
                        <ScrollView className="at-modal__content" scrollY>
                            <View className="content-simple">{content}</View>
                        </ScrollView>
                    )}
                    {(cancelText || confirmText) && (
                        <View className={classNames('at-modal__footer', 'at-modal__footer--simple')}>
                            <View className="at-modal__action">
                                {cancelText && <Button onClick={onCancel}>{cancelText}</Button>}
                                {confirmText && <Button onClick={onConfirm}>{confirmText}</Button>}
                            </View>
                        </View>
                    )}
                </View>
            </View>
        )
    }

    return (
        <View className={rootClass} style={style} onTouchMove={e => e.stopPropagation()}>
            <View className="at-modal__overlay" onClick={onClickOverlay} />
            <View className="at-modal__container">{children}</View>
        </View>
    )
}
