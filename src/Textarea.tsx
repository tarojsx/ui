import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View, Textarea as _Textarea, CommonEventFunction } from '@tarojs/components'
import { TextareaProps as _TextareaProps } from '@tarojs/components/types/Textarea'
import { AtTextareaProps } from 'taro-ui/types/textarea'

import '../style/Textarea.scss'

export interface TextareaProps
    extends Omit<_TextareaProps, 'className' | 'value' | 'maxlength' | 'focus' | 'onInput'>,
        Pick<AtTextareaProps, 'count' | 'height' | 'textOverflowForbidden'> {
    className?: string
    style?: React.CSSProperties
    value?: string
    maxLength?: number
    onChange?: CommonEventFunction
}

const ENV = Taro.getEnv()

export const Textarea: React.FC<TextareaProps> = props => {
    const {
        className,
        style = {},
        value = '',
        cursorSpacing = 100,
        placeholderClass,
        maxLength = 200,
        count = true,
        autoFocus,
        textOverflowForbidden = true,
        height,
        onChange,
        ...rest
    } = props

    const actualMaxLength = useMemo(() => (textOverflowForbidden ? maxLength : maxLength + 500), [
        maxLength,
        textOverflowForbidden,
    ])
    const textareaStyle = height ? { height: Taro.pxTransform(Number(height)) } : {}
    const rootCls = classNames(
        'at-textarea',
        `at-textarea--${ENV}`,
        {
            'at-textarea--error': maxLength < value.length,
        },
        className
    )
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
        <View className={rootCls} style={style}>
            <_Textarea
                className="at-textarea__textarea"
                style={textareaStyle}
                placeholderClass={placeholderCls}
                cursorSpacing={cursorSpacing}
                value={value}
                // confirmType="完成"
                /* 兼容之前的版本 */
                maxlength={actualMaxLength}
                // maxLength={actualMaxLength}
                focus={autoFocus}
                onInput={onChange}
                // showCount={false}
                {...rest}
            />
            {count && (
                <View className="at-textarea__counter">
                    {value.length}/{maxLength}
                </View>
            )}
        </View>
    )
}
