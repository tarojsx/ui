import React, { useRef, useCallback } from 'react';
import { Textarea } from '@tarojs/components';
import { TextareaProps } from '@tarojs/components/types/Textarea';

export interface TextareaEnhanceProps extends TextareaProps {
  /**
   * OnBlur/onConfirm 事件也会触发 onChange. 如果 value 与最后一次 onChange 事件相同则跳过.
   *
   * @default true
   */
  mergeChangeEvent?: boolean;
}

/**
 * Textarea 升级版.
 *
 * - MergeChangeEvent onBlur/onConfirm 事件也会触发 onChange.
 *
 * 某些输入法(不只是中文), 输入中的文字并没有真正进入 Textarea 中, 只是浮动在上面的输入法自带 UI 控件. 另一些中文输入法会在词语联想过程中提前把拼音输入进输入框内. 这两种情况都会造成 onInput
 * 事件不触发或传递错误的值. Textarea 组件的 onBlur/onConfirm 事件中汇报的值永远是正确的最终值.
 */
export const TextareaEnhance: React.FC<TextareaEnhanceProps> = (props) => {
  const { mergeChangeEvent = true, onInput, onBlur, onConfirm, ...rest } = props;

  /** 上一个输入值 */
  const previousInputValue = useRef<string>(props.value);

  const handleInput = useCallback<typeof onInput>(
    (e) => {
      // 记录新值
      previousInputValue.current = e.detail.value;
      onInput && onInput(e);
    },
    [onInput]
  );

  const handleBlur = useCallback<typeof onBlur>(
    (e) => {
      // 如果丢失焦点时的值与上一个值不同, 先触发 onInput
      if (onInput && mergeChangeEvent && e.detail.value !== previousInputValue.current) {
        onInput({ ...e, detail: { ...e.detail, keyCode: 0 } });
      }
      onBlur && onBlur(e);
    },
    [onInput, onBlur, mergeChangeEvent]
  );

  const handleConfirm = useCallback<typeof onConfirm>(
    (e) => {
      // 如果点击"完成"绿按钮时的值与上一个值不同, 先触发 onInput
      if (onInput && mergeChangeEvent && e.detail.value !== previousInputValue.current) {
        onInput({ ...e, detail: { ...e.detail, keyCode: 0, cursor: 0 } });
      }
      onConfirm && onConfirm(e);
    },
    [onInput, onConfirm, mergeChangeEvent]
  );

  return <Textarea onInput={handleInput} onBlur={handleBlur} onConfirm={handleConfirm} {...rest} />;
};
