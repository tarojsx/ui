import React from 'react';
import classNames from 'classnames';
import { View, Text } from '@tarojs/components';

import '../style/Statistic.scss';

export interface StatisticProps {
  className?: string;
  title: React.ReactNode;
  value: string | number;
  valueStyle?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Statistic: React.FC<StatisticProps> = (props) => {
  const { className, title, value, valueStyle = {}, prefix, suffix } = props;

  return (
    <View className={classNames('at-statistic', className)}>
      <View className="at-statistic__title">{title}</View>
      <View className="at-statistic__content">
        {!!prefix && <View className="at-statistic__content__prefix">{prefix}</View>}
        <Text className="at-statistic__content__value" style={valueStyle}>
          {value}
        </Text>
        {!!suffix && <View className="at-statistic__content__suffix">{suffix}</View>}
      </View>
    </View>
  );
};
