import React, { useMemo, useCallback } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View, Input, Text, CommonEventFunction } from '@tarojs/components';
import { InputProps } from '@tarojs/components/types/Input';
import { AtInputNumberProps } from 'taro-ui/types/input-number';

import { setEventDetail } from './utils';
import '../style/InputNumber.scss';

export interface InputNumberProps
  extends Omit<Partial<AtInputNumberProps>, 'style' | 'customStyle' | 'onChange' | 'onBlur' | 'onErrorInput'>,
    Omit<InputProps, 'value' | 'type' | 'password' | 'children'> {
  style?: React.CSSProperties;
  customStyle?: React.CSSProperties;
  /**
   * 输入框值改变时触发的事件
   *
   * 开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填
   *
   * @param {number} value 输入框当前值
   */
  onChange?: CommonEventFunction<{ value: number | string; delta?: number }>;
}

/** 获取数据小数点后面部分长度 */
const getPrecision = (num: number) => {
  return String(num).split('.')[1]?.length || 0;
};
/** 数字加法, 避免 float 数计算误差. */
const decimalAdd = (a: number, b: number) => {
  /** 两个数字转化为整数所需的乘法系数 */
  const ratio = Math.pow(10, Math.max(getPrecision(a), getPrecision(b)));
  return Math.round((a + b) * ratio) / ratio;
};

/**
 * 数字输入框
 *
 * - 按 "+" 和 "-" 按 step 加减数字.
 * - 手动输入数字时调起数字(number)或小数(digit)键盘, 默认距离键盘50px.
 * - 失去光标时强制格式化数字.
 */
export const InputNumber: React.FC<InputNumberProps> = (props) => {
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
    cursorSpacing = 50,
    onChange = () => {},
    onBlur = () => {},
    ...rest
  } = props;

  const inputValue = useMemo(() => parseFloat(String(value)) || 0, [value]);

  const clamp = useCallback((n) => Math.max(min, Math.min(max, n)), [min, max]);

  const handleClick = useCallback<InputNumberProps['onChange']>(
    (e) => {
      if (disabled) return;

      e.detail.value = clamp(decimalAdd(inputValue, e.detail.delta));
      onChange(e);
    },
    [disabled, inputValue, clamp, step]
  );

  const handleChange = useCallback<InputProps['onInput']>(
    (e) => {
      const { value } = e.detail;
      const num = parseFloat(value) || 0;
      if (num.toString() === value) {
        e.detail.value = num as any;
      }
      onChange(e);
    },
    [onChange]
  );

  const handleBlur = useCallback<InputProps['onBlur']>(
    (e) => {
      const num = parseFloat(e.detail.value);
      e.detail.value = isNaN(num) ? '' : (clamp(num) as any);
      onChange(e);
      onBlur(e);
    },
    [onBlur, onChange, clamp]
  );

  return (
    <View
      className={classNames('at-input-number', { 'at-input-number--lg': size === 'large' }, className)}
      style={{ ...style, ...customStyle }}
    >
      <View
        className={classNames('at-input-number__btn', {
          'at-input-number--disabled': inputValue <= min! || disabled,
        })}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick && handleClick(setEventDetail(e, { delta: -step }));
        }}
      >
        <Text className="at-icon at-icon-subtract at-input-number__btn-subtract"></Text>
      </View>
      <Input
        {...rest}
        cursor={String(value).length}
        cursorSpacing={cursorSpacing}
        className="at-input-number__input"
        style={width ? { width: Taro.pxTransform(width) } : {}}
        type={type}
        value={(value as any) ?? ''}
        disabled={disabledInput || disabled}
        onInput={handleChange}
        onBlur={handleBlur}
      />
      <View
        className={classNames('at-input-number__btn', {
          'at-input-number--disabled': inputValue >= max! || disabled,
        })}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick && handleClick(setEventDetail(e, { delta: step }));
        }}
      >
        <Text className="at-icon at-icon-add at-input-number__btn-add"></Text>
      </View>
    </View>
  );
};
