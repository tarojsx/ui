import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View, Text, ScrollView } from '@tarojs/components'
import { ScrollViewProps } from '@tarojs/components/types/ScrollView'
import { AtFloatLayoutProps } from 'taro-ui/types/float-layout'

import '../style/FloatLayout.scss'

export interface FloatLayoutProps extends Pick<AtFloatLayoutProps, 'isOpened' | 'onClose'>, ScrollViewProps {
    style?: React.CSSProperties
    title?: React.ReactNode
}

export const FloatLayout: React.FC<FloatLayoutProps> = props => {
    const { className, style = {}, children, title, isOpened, scrollY = true, onClose = () => {}, ...rest } = props

    const handleClose = useCallback(
        e => {
            onClose(e)
        },
        [onClose]
    )

    const rootClass = classNames('at-float-layout', { 'at-float-layout--active': isOpened }, className)

    return (
        <View className={rootClass} onTouchMove={e => e.stopPropagation()}>
            <View onClick={handleClose} className="at-float-layout__overlay" />
            <View className="at-float-layout__container layout">
                {title ? (
                    <View className="layout-header">
                        <Text className="layout-header__title">{title}</Text>
                        <View className="layout-header__btn-close" onClick={handleClose} />
                    </View>
                ) : null}
                <View className="layout-body">
                    <ScrollView className="layout-body__content" scrollY={scrollY} {...rest}>
                        {children}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
