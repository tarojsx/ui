import React from 'react';
import classNames from 'classnames';
import { View, Image, Text, OpenData } from '@tarojs/components';
import { OpenDataProps } from '@tarojs/components/types/OpenData';

import '../style/Avatar.scss';

export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: 'tiny' | 'mini' | 'small' | 'large';
  circle?: boolean;
  text?: string;
  image?: string;
  openData?: { type: 'userAvatarUrl'; lang?: OpenDataProps['lang'] };
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, style = {}, size, circle, image, text, openData } = props;

  return (
    <View
      className={classNames(
        'at-avatar',
        {
          [`at-avatar--${size}`]: typeof size === 'string',
          'at-avatar--circle': circle,
        },
        className
      )}
      style={style}
    >
      {openData?.type === 'userAvatarUrl' && process.env.TARO_ENV === 'weapp' ? (
        <OpenData {...openData} />
      ) : image ? (
        <Image className="at-avatar__img" src={image} />
      ) : (
        <Text className="at-avatar__text">{text ? text[0] : ''}</Text>
      )}
    </View>
  );
};
