import React, { useState, useCallback } from 'react'
import classNames from 'classnames'
import { Input, Text, View } from '@tarojs/components'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { AtSearchBarProps, AtSearchBarState } from 'taro-ui/types/search-bar'

import '../style/SearchBar.scss'

export interface SearchBarProps extends Omit<AtSearchBarProps, 'onChange' | 'customStyle'> {
    style?: React.CSSProperties
    /**
     * 输入框值改变时触发的事件
     * @description 必填，开发者需要通过 onChange 事件来更新 value 值变化
     */
    onChange: CommonEventFunction<{ value: string }>
    /**
     * 点击完成按钮时触发
     * @description H5 版中目前需借用 Form 组件的onSubmit事件来替代
     */
    onConfirm?: CommonEventFunction<{ value: string }>
    /**
     * 右侧按钮点击触发事件
     */
    onActionClick?: CommonEventFunction<{ value: string }>
}

export const SearchBar: React.FC<SearchBarProps> = props => {
    const {
        className,
        style,
        value = '',
        placeholder = '搜索',
        maxLength = 140,
        fixed = false,
        focus = false,
        disabled = false,
        showActionButton = false,
        actionName = '搜索',
        inputType = 'text',
        onChange = () => {},
        onFocus = () => {},
        onBlur = () => {},
        onConfirm = () => {},
        onClear = () => {},
        onActionClick = () => {},
    } = props

    const [isFocus, setIsFocus] = useState(focus)

    const handleFocus = useCallback<CommonEventFunction>(
        e => {
            setIsFocus(true)
            onFocus(e)
        },
        [onFocus]
    )

    const handleBlur = useCallback<CommonEventFunction>(
        e => {
            setIsFocus(false)
            onBlur(e)
        },
        [onBlur]
    )

    const handleClear = useCallback<CommonEventFunction>(
        e => {
            if (onClear) {
                onClear(e)
            } else {
                e.detail.value = ''
                onChange(e)
            }
        },
        [onClear, onChange]
    )

    const fontSize = 14
    const rootCls = classNames('at-search-bar', { 'at-search-bar--fixed': fixed }, className)
    const placeholderWrapStyle: React.CSSProperties = {}
    const actionStyle: React.CSSProperties = {}
    if (isFocus || (!isFocus && value)) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
        placeholderWrapStyle.flexGrow = 0
    } else if (!isFocus && !value) {
        placeholderWrapStyle.flexGrow = 1
        actionStyle.opacity = 0
        actionStyle.marginRight = `-${(actionName!.length + 1) * fontSize + fontSize / 2 + 10}px`
    }
    if (showActionButton) {
        actionStyle.opacity = 1
        actionStyle.marginRight = `0`
    }

    const clearIconStyle: React.CSSProperties = { display: 'flex' }
    const placeholderStyle: React.CSSProperties = { visibility: 'hidden' }
    if (!value.length) {
        clearIconStyle.display = 'none'
        placeholderStyle.visibility = 'visible'
    }

    return (
        <View className={rootCls} style={style}>
            <View className="at-search-bar__input-cnt">
                <View className="at-search-bar__placeholder-wrap" style={placeholderWrapStyle}>
                    <Text className="at-icon at-icon-search"></Text>
                    <Text className="at-search-bar__placeholder" style={placeholderStyle}>
                        {isFocus ? '' : placeholder}
                    </Text>
                </View>
                <Input
                    className="at-search-bar__input"
                    type={inputType}
                    confirmType="search"
                    value={value}
                    focus={isFocus}
                    disabled={disabled}
                    maxLength={maxLength}
                    onInput={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onConfirm={onConfirm}
                />
                <View className="at-search-bar__clear" style={clearIconStyle} onClick={handleClear}>
                    <Text className="at-icon at-icon-close-circle"></Text>
                </View>
            </View>
            <View
                className="at-search-bar__action"
                style={actionStyle}
                onClick={e => {
                    e.detail.value = value
                    onActionClick(e)
                }}
            >
                {actionName}
            </View>
        </View>
    )
}
