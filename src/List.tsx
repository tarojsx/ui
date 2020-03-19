import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtListProps } from 'taro-ui/types/list'

import '../style/List.scss'

export interface ListProps extends AtListProps {
    className?: string
}

export const List: React.FC<ListProps> = props => {
    const { className, hasBorder, children } = props

    return <View className={classNames('at-list', { 'at-list--no-border': !hasBorder }, className)}>{children}</View>
}
