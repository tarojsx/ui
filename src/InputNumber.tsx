import React, { useCallback } from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import _toString from 'lodash/toString'
import { View, Input, Text, CommonEvent, CommonEventFunction } from '@tarojs/components'
import { AtInputNumberProps } from 'taro-ui/types/input-number'

import '../style/InputNumber.scss'
import { InputProps } from '@tarojs/components/types/Input'

// 实现两数相加并保留小数点后最短尾数
function addNum(num1: number, num2: number): number {
    let sq1: number, sq2: number
    try {
        sq1 = _toString(num1).split('.')[1].length
    } catch (e) {
        sq1 = 0
    }
    try {
        sq2 = _toString(num2).split('.')[1].length
    } catch (e) {
        sq2 = 0
    }
    const m = Math.pow(10, Math.max(sq1, sq2))
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
    if (num === '') return '0'

    const numStr = _toString(num)
    if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
        // 处理01变成1,并且不处理1.
        return _toString(parseFloat(num))
    }
    return _toString(num)
}

export interface InputNumberProps
    extends Omit<Partial<AtInputNumberProps>, 'style' | 'customStyle' | 'onChange' | 'onErrorInput'> {
    style?: React.CSSProperties
    customStyle?: React.CSSProperties
    /**
     * 输入框值改变时触发的事件
     * @param {number} value 输入框当前值
     * @description 开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填
     */
    onChange?: CommonEventFunction<{ value: number; delta?: number }>
}

export const InputNumber: React.FC<InputNumberProps> = props => {
    const {
        className,
        style = {},
        customStyle = {},
        disabled = false,
        disabledInput = false,
        value = 0,
        type = 'number',
        width = 0,
        min = 0,
        max = 100,
        step = 1,
        size = 'normal',
        onChange = () => {},
        onBlur = () => {},
    } = props

    // TODO: Fix dirty hack
    const handleClick = useCallback<InputNumberProps['onChange']>(
        e => {
            e.preventDefault()
            e.stopPropagation()
            if (disabled) return

            const nextValue = addNum(Number(value), e.detail.delta)
            if (nextValue > max) {
                e.detail.value = max
                onChange(e)
                return
            }
            if (nextValue < min) {
                e.detail.value = min
                onChange(e)
                return
            }

            // if (disabled || nextValue > max || nextValue < min) return

            // const lowThanMin = clickType === 'minus' && value <= min!
            // const overThanMax = clickType === 'plus' && value >= max!
            // if (lowThanMin || overThanMax || disabled) {
            //     const deltaValue = clickType === 'minus' ? -step! : step
            //     const errorValue = addNum(Number(value), deltaValue!)
            //     if (disabled) {
            //         onErrorInput({
            //             type: 'DISABLED',
            //             errorValue,
            //         })
            //     } else {
            //         onErrorInput({
            //             type: lowThanMin ? 'LOW' : 'OVER',
            //             errorValue,
            //         })
            //     }
            //     return
            // }
            // const deltaValue = clickType === 'minus' ? -step! : step
            // let newValue = addNum(Number(value), deltaValue!)
            // newValue = Number(handleValue(newValue))
            e.detail.value = nextValue
            onChange(e)
        },
        [disabled, value, min, max, step]
    )

    // TODO: Fix dirty hack
    const handleValue = useCallback(
        (value: string | number): string => {
            let resultValue = value === '' ? min : value
            // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
            if (resultValue! > max!) {
                resultValue = max
                // onErrorInput({
                //     type: 'OVER',
                //     errorValue: resultValue!,
                // })
            }
            if (resultValue! < min!) {
                resultValue = min
                // onErrorInput({
                //     type: 'LOW',
                //     errorValue: resultValue!,
                // })
            }
            resultValue = parseValue(String(resultValue))
            return resultValue
        },
        [max, min]
    )

    const handleInput = useCallback<InputProps['onInput']>(
        e => {
            const { value } = e.detail
            if (disabled) return

            const newValue = handleValue(value)
            e.detail.value = Number(newValue) as any
            onChange(e as any)
        },
        [onChange, disabled]
    )

    const inputValue = Number(handleValue(value))

    return (
        <View
            className={classNames('at-input-number', { 'at-input-number--lg': size === 'large' }, className)}
            style={{ ...style, ...customStyle }}
        >
            <View
                className={classNames('at-input-number__btn', {
                    'at-input-number--disabled': inputValue <= min! || disabled,
                })}
                onClick={e => {
                    e.detail.delta = -step
                    handleClick(e)
                }}
            >
                <Text className="at-icon at-icon-subtract at-input-number__btn-subtract"></Text>
            </View>
            <Input
                className="at-input-number__input"
                style={width ? { width: Taro.pxTransform(width) } : {}}
                type={type}
                value={String(inputValue)}
                disabled={disabledInput || disabled}
                onInput={handleInput}
                onBlur={onBlur}
            />
            <View
                className={classNames('at-input-number__btn', {
                    'at-input-number--disabled': inputValue >= max! || disabled,
                })}
                onClick={e => {
                    e.detail.delta = step
                    handleClick(e)
                }}
            >
                <Text className="at-icon at-icon-add at-input-number__btn-add"></Text>
            </View>
        </View>
    )
}
