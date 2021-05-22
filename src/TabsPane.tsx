import React from 'react';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { AtTabsPaneProps } from 'taro-ui/types/tabs-pane';

import '../style/TabsPane.scss';

export interface TabsPaneProps extends AtTabsPaneProps {
  style?: React.CSSProperties;
}

export const TabsPane: React.FC<TabsPaneProps> = (props) => {
  const { className, style = {}, children, tabDirection = 'horizontal', index = 0, current = 0 } = props;

  return (
    <View
      className={classNames(
        'at-tabs-pane',
        {
          'at-tabs-pane--vertical': tabDirection === 'vertical',
          'at-tabs-pane--active': index === current,
          'at-tabs-pane--inactive': index !== current,
        },
        className
      )}
      style={style}
    >
      {children}
    </View>
  );
};
