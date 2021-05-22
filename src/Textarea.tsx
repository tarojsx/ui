import React, { useMemo } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View, CommonEventFunction } from '@tarojs/components';
import { AtTextareaProps } from 'taro-ui/types/textarea';

import { TextareaEnhance, TextareaEnhanceProps } from './TextareaEnhance';
import '../style/Textarea.scss';

export interface TextareaProps
  extends Omit<TextareaEnhanceProps, 'className' | 'value' | 'focus' | 'onInput'>,
    Pick<AtTextareaProps, 'count' | 'height' | 'textOverflowForbidden'> {
  className?: string;
  style?: React.CSSProperties;
  textareaRef?: React.LegacyRef<any>;
  value?: string;
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxLength?: number;
  onChange?: CommonEventFunction;
}

const ENV = Taro.getEnv();

export const Textarea: React.FC<TextareaProps> = (props) => {
  const {
    className,
    style = {},
    textareaRef,
    value = '',
    cursorSpacing = 100,
    placeholderClass,
    count = true,
    autoFocus,
    textOverflowForbidden = true,
    height,
    onChange,
    ...rest
  } = props;
  const maxlength = props.maxlength ?? props.maxLength ?? 200;

  const actualMaxLength = useMemo(
    () => (textOverflowForbidden ? maxlength : maxlength + 500),
    [maxlength, textOverflowForbidden]
  );
  const textareaStyle = height ? { height: Taro.pxTransform(Number(height)) } : {};
  const rootCls = classNames(
    'at-textarea',
    `at-textarea--${ENV}`,
    {
      'at-textarea--error': maxlength < value.length,
    },
    className
  );
  const placeholderCls = classNames('placeholder', placeholderClass);

  return (
    <View className={rootCls} style={style}>
      <TextareaEnhance
        ref={textareaRef as any}
        className="at-textarea__textarea"
        style={textareaStyle}
        placeholderClass={placeholderCls}
        cursorSpacing={cursorSpacing}
        value={value}
        /* 兼容之前的版本 */
        maxlength={actualMaxLength}
        focus={autoFocus}
        onInput={onChange}
        {...rest}
      />
      {count && (
        <View className="at-textarea__counter">
          {value.length}/{maxlength}
        </View>
      )}
    </View>
  );
};
