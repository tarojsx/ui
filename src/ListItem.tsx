import React from 'react';
import { isElement } from 'react-is';
import classNames from 'classnames';
import { View, Image } from '@tarojs/components';
import { AtListItemProps } from 'taro-ui/types/list';

import { Icon, IconProps } from './Icon';
import '../style/ListItem.scss';

export interface ListItemProps extends Omit<AtListItemProps, 'title' | 'iconInfo' | 'thumb' | 'arrow'> {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  iconInfo?: IconProps;
  thumb?: React.ReactNode;
  thumbCircle?: boolean;
  extra?: React.ReactNode;
  arrow?: AtListItemProps['arrow'] | 'clear';
  footer?: React.ReactNode;
  ghost?: boolean;
  onClear?(): any;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    className,
    children,
    title,
    thumb,
    thumbCircle,
    iconInfo = { value: '' },
    extra,
    extraText,
    extraThumb,
    arrow,
    note,
    footer,
    disabled,
    hasBorder = true,
    ghost,
    onClick,
    onClear,
  } = props;

  const rootClass = classNames(
    'at-list__item',
    'at-list__item--multiple',
    {
      'at-list__item--thumb': thumb,
      'at-list__item--thumb-circle': thumbCircle,
      'at-list__item--disabled': disabled,
      'at-list__item--ghost': ghost,
      'at-list__item--no-border': !hasBorder,
    },
    className
  );

  return (
    <View className={rootClass} onClick={onClick}>
      <View className="at-list__item-container">
        {thumb && (
          <View className="at-list__item-thumb item-thumb">
            {isElement(thumb) ? thumb : <Image className="item-thumb__info" mode="scaleToFill" src={thumb as any} />}
          </View>
        )}
        {iconInfo.value && (
          <View className="at-list__item-icon item-icon">
            <Icon {...iconInfo} />
          </View>
        )}
        <View className="at-list__item-content item-content">
          <View className="item-content__info">
            <View className="item-content__info-title">{title}</View>
            <View className="item-content__info-note">{note}</View>
          </View>
        </View>
        <View className="at-list__item-extra item-extra">
          {typeof extra === 'string' ? <View className="item-extra__info">{extra}</View> : extra}
          {extraThumb && !extraText && (
            <View className="item-extra__image">
              <Image className="item-extra__image-info" mode="aspectFit" src={extraThumb} />
            </View>
          )}
          {!!arrow && (
            <View className={classNames('item-extra__icon', { 'item-extra__clear': arrow === 'clear' })}>
              <View
                className={classNames(
                  'at-icon',
                  'item-extra__icon-arrow',
                  'item-extra__icon-clear',
                  arrow === 'clear' ? 'at-icon-close' : `at-icon-chevron-${arrow}`
                )}
                onClick={(e) => {
                  if (arrow === 'clear') {
                    e.preventDefault();
                    e.stopPropagation();
                    onClear && onClear();
                  }
                }}
              />
            </View>
          )}
        </View>
      </View>
      {!!children && <View className="at-list__item-children">{children}</View>}
    </View>
  );
};
