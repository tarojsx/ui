import React from 'react'
import classNames from 'classnames'
import _chunk from 'lodash/chunk'
import { Image, Text, View } from '@tarojs/components'
import { CommonEventFunction } from '@tarojs/components/types/common'
import { AtGridItem, AtGridProps } from 'taro-ui/types/grid'

import { IconProps } from './Icon'
import '../style/Grid.scss'

export interface GridItem extends Omit<AtGridItem, 'iconInfo'> {
    iconInfo?: IconProps
}
export interface GridProps extends Omit<AtGridProps, 'data' | 'onClick'> {
    data: GridItem[]
    onClick?: CommonEventFunction<{ value: GridItem; index: number }>
}

export const Grid: React.FC<GridProps> = (props) => {
    const { className, data = [], mode = 'square', columnNum = 3, hasBorder = true, onClick } = props

    if (!Array.isArray(data) || data.length === 0) {
        return null
    }

    const gridGroup = _chunk(data, columnNum)

    return (
        <View className={classNames('at-grid', className)}>
            {gridGroup.map((item, i) => (
                <View className="at-grid__flex" key={`at-grid-group-${i}`}>
                    {item.map((childItem, index) => (
                        <View
                            key={`at-grid-item-${index}`}
                            className={classNames('at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`, {
                                'at-grid-item--no-border': !hasBorder,
                                'at-grid-item--last': index === columnNum - 1,
                            })}
                            onClick={(e) => {
                                if (!onClick) return
                                e.detail = {
                                    value: childItem,
                                    index,
                                }
                                onClick(e)
                            }}
                            style={{ flex: `0 0 ${100 / columnNum}%` }}
                        >
                            <View className="at-grid-item__content">
                                <View className="at-grid-item__content-inner">
                                    <View className="content-inner__icon">
                                        {childItem.image && (
                                            <Image
                                                className="content-inner__img"
                                                src={childItem.image}
                                                mode="scaleToFill"
                                            />
                                        )}
                                        {childItem.iconInfo && !childItem.image && (
                                            <Text
                                                className={classNames(
                                                    childItem.iconInfo.prefixClass || 'at-icon',
                                                    {
                                                        [`${childItem.iconInfo.prefixClass || 'at-icon'}-${
                                                            childItem.iconInfo.value
                                                        }`]: childItem.iconInfo.value,
                                                    },
                                                    childItem.iconInfo.className
                                                )}
                                                style={{
                                                    color: childItem.iconInfo.color,
                                                    fontSize: `${childItem.iconInfo.size || 24}px`,
                                                    ...(childItem.iconInfo?.style || {}),
                                                }}
                                            />
                                        )}
                                    </View>
                                    <Text className="content-inner__text">{childItem.value}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    )
}
