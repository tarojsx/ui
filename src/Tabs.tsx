import React, { useRef, useMemo, useState } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View, ScrollView } from '@tarojs/components';
import { AtTabsProps } from 'taro-ui/types/tabs';

import { uuid } from './utils';
import '../style/Tabs.scss';

export interface TabsProps extends AtTabsProps {
  style?: React.CSSProperties;
  fixed?: boolean;
}

const ENV = Taro.getEnv();
const MIN_DISTANCE = 100;
const MAX_INTERVAL = 10;

export const Tabs: React.FC<TabsProps> = (props) => {
  //   constructor () {
  //     super(...arguments)
  //     this.state = {
  //       _scrollLeft: '',
  //       _scrollTop: '',
  //       _scrollIntoView: ''
  //     }
  //     this._tabId = uuid()
  //     // 触摸时的原点
  //     this._touchDot = 0
  //     // 定时器
  //     this._timer = null
  //     // 滑动时间间隔
  //     this._interval = 0
  //     // 是否已经在滑动
  //     this._isMoving = false
  //   }

  //   updateState = idx => {
  //     if (this.props.scroll) {
  //       // 标签栏滚动
  //       switch (ENV) {
  //         case Taro.ENV_TYPE.WEAPP:
  //         case Taro.ENV_TYPE.ALIPAY:
  //         case Taro.ENV_TYPE.SWAN:
  //           const index = Math.max(idx - 1, 0)
  //           this.setState({
  //             _scrollIntoView: `tab${index}`
  //           })
  //           break

  //         case Taro.ENV_TYPE.WEB: {
  //           const index = Math.max(idx - 1, 0)
  //           const prevTabItem = this.tabHeaderRef.childNodes[index]
  //           prevTabItem && this.setState({
  //             _scrollTop: prevTabItem.offsetTop,
  //             _scrollLeft: prevTabItem.offsetLeft
  //           })
  //           break
  //         }

  //         default:
  //           console.warn('AtTab 组件在该环境还未适配')
  //           break
  //       }
  //     }
  //   }

  //   handleClick () {
  //     this.props.onClick(...arguments)
  //   }

  //   handleTouchStart (e) {
  //     const { swipeable, tabDirection } = this.props
  //     if (!swipeable || tabDirection === 'vertical') return
  //     // 获取触摸时的原点
  //     this._touchDot = e.touches[0].pageX
  //     // 使用js计时器记录时间
  //     this._timer = setInterval(() => {
  //       this._interval++
  //     }, 100)
  //   }

  //   handleTouchMove (e) {
  //     const {
  //       swipeable,
  //       tabDirection,
  //       current,
  //       tabList
  //     } = this.props
  //     if (!swipeable || tabDirection === 'vertical') return

  //     const touchMove = e.touches[0].pageX
  //     const moveDistance = touchMove - this._touchDot
  //     const maxIndex = tabList.length

  //     if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
  //       // 向左滑动
  //       if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
  //         this._isMoving = true
  //         this.handleClick(current + 1)

  //       // 向右滑动
  //       } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
  //         this._isMoving = true
  //         this.handleClick(current - 1)
  //       }
  //     }
  //   }

  //   handleTouchEnd () {
  //     const { swipeable, tabDirection } = this.props
  //     if (!swipeable || tabDirection === 'vertical') return

  //     clearInterval(this._timer)
  //     this._interval = 0
  //     this._isMoving = false
  //   }

  //   componentWillReceiveProps (nextProps) {
  //     if (nextProps.scroll !== this.props.scroll) {
  //       this.getTabHeaderRef()
  //     }
  //     if (nextProps.current !== this.props.current) {
  //       this.updateState(nextProps.current)
  //     }
  //   }

  //   getTabHeaderRef () {
  //     if (ENV === Taro.ENV_TYPE.WEB) {
  //       this.tabHeaderRef = document.getElementById(this._tabId)
  //     }
  //   }

  //   componentDidMount () {
  //     this.getTabHeaderRef()
  //     this.updateState(this.props.current)
  //   }

  //   componentWillUnmount () {
  //     this.tabHeaderRef = null
  //   }

  const {
    className,
    style = {},
    children,
    tabDirection = 'horizontal',
    height,
    current = 0,
    swipeable = true,
    scroll,
    animated = true,
    fixed,
    tabList = [],
    onClick = () => {},
  } = props;

  const _tabId = useMemo(() => uuid(), []);
  // // 触摸时的原点
  // const _touchDot = useRef(0)
  // // 定时器
  // const _timer = useRef(null)
  // // 滑动时间间隔
  // const _interval = useRef(0)
  // // 是否已经在滑动
  // const _isMoving = useRef(false)

  // const [{ _scrollLeft, _scrollTop, _scrollIntoView }, setState] = useState({
  //     _scrollLeft: 0,
  //     _scrollTop: 0,
  //     _scrollIntoView: '',
  // })

  // const underlineStyle = {
  //     height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
  //     width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX',
  // }

  const bodyStyle = useMemo(() => {
    const bodyStyle = {};
    let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`;
    if (tabDirection === 'horizontal') {
      transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`;
    }
    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle,
    });
    if (!animated) {
      bodyStyle['transition'] = 'unset';
    }
    return bodyStyle;
  }, [current]);

  const tabItems = tabList.map((item, idx) => {
    return (
      <View
        className={classNames('at-tabs__item', {
          'at-tabs__item--active': current === idx,
        })}
        id={`tab${idx}`}
        key={item.title}
        onClick={(e) => onClick(idx, e)}
      >
        {item.title}
        <View className="at-tabs__item-underline"></View>
      </View>
    );
  });

  return (
    <View
      className={classNames(
        'at-tabs',
        { 'at-tabs--scroll': scroll },
        `at-tabs--${tabDirection}`,
        `at-tabs--${ENV}`,
        className
      )}
      style={{ height, ...style }}
    >
      {scroll ? (
        <ScrollView
          id={_tabId}
          className={classNames('at-tabs__header', { 'at-tabs__header_fixed': fixed })}
          style={{ height }}
          scrollY={tabDirection === 'vertical'}
          scrollX={tabDirection === 'horizontal'}
          scrollWithAnimation
          // scrollLeft={_scrollLeft}
          // scrollTop={_scrollTop}
          // scrollIntoView={_scrollIntoView}
        >
          {tabItems}
        </ScrollView>
      ) : (
        <View className={classNames('at-tabs__header', { 'at-tabs__header_fixed': fixed })}>{tabItems}</View>
      )}
      <View
        className={classNames('at-tabs__body', { 'at-tabs__body_fixed': fixed })}
        // onTouchStart={this.handleTouchStart.bind(this)}
        // onTouchEnd={this.handleTouchEnd.bind(this)}
        // onTouchMove={this.handleTouchMove.bind(this)}
        style={{ ...bodyStyle, height }}
      >
        <View
          className="at-tabs__underline"
          style={{
            height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
            width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX',
          }}
        ></View>
        {children}
      </View>
    </View>
  );
};
