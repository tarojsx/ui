import React, { useCallback } from 'react'
import { Form as _Form } from '@tarojs/components'
import { FormProps as _FormProps } from '@tarojs/components/types/Form'

export interface FormProps extends Omit<_FormProps, 'onSubmit'> {
    onSubmit?(e: React.BaseSyntheticEvent): void
}

export const Form: React.FC<FormProps> = props => {
    const { onSubmit, ...rest } = props

    const handleSubmit = useCallback<_FormProps['onSubmit']>(
        e => {
            if (!onSubmit) return

            const event = (e as unknown) as React.BaseSyntheticEvent
            event.persist = () => {}

            onSubmit(event)
        },
        [onSubmit]
    )

    return <_Form {...rest} onSubmit={handleSubmit} />
}
