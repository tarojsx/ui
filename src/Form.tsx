import React from 'react';
import { Form as _Form } from '@tarojs/components';
import { FormProps as _FormProps } from '@tarojs/components/types/Form';
import { useThrottleCallback } from '@tarojsx/hooks/dist/useThrottleCallback';

export interface FormProps extends Omit<_FormProps, 'onSubmit'> {
  /** OnSubmit 事件节流时间间隔, 单位: ms, 默认 500ms. */
  submitThrottle?: boolean | number;
  onSubmit?(e: React.BaseSyntheticEvent): void;
}

export const Form: React.FC<FormProps> = (props) => {
  const { submitThrottle, onSubmit, ...rest } = props;

  const handleSubmit = useThrottleCallback<_FormProps['onSubmit']>((e) => {
    if (!onSubmit) return;

    const event = e as unknown as React.BaseSyntheticEvent;
    if (!event.persist) event.persist = () => {};

    onSubmit(event);
  }, submitThrottle);

  return <_Form {...rest} onSubmit={handleSubmit} />;
};
