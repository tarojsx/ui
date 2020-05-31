---
id: "_floatlayout_.floatlayoutprops"
title: "FloatLayoutProps"
sidebar_label: "FloatLayoutProps"
---

## Hierarchy

* object

* ScrollViewProps

  ↳ **FloatLayoutProps**

## Index

### Interfaces

* [onScrollDetail](_floatlayout_.floatlayoutprops.onscrolldetail.md)

### Properties

* [animation](_floatlayout_.floatlayoutprops.md#optional-animation)
* [className](_floatlayout_.floatlayoutprops.md#optional-classname)
* [enableBackToTop](_floatlayout_.floatlayoutprops.md#optional-enablebacktotop)
* [enableFlex](_floatlayout_.floatlayoutprops.md#optional-enableflex)
* [hidden](_floatlayout_.floatlayoutprops.md#optional-hidden)
* [id](_floatlayout_.floatlayoutprops.md#optional-id)
* [key](_floatlayout_.floatlayoutprops.md#optional-key)
* [lowerThreshold](_floatlayout_.floatlayoutprops.md#optional-lowerthreshold)
* [onAnimationEnd](_floatlayout_.floatlayoutprops.md#optional-onanimationend)
* [onAnimationIteration](_floatlayout_.floatlayoutprops.md#optional-onanimationiteration)
* [onAnimationStart](_floatlayout_.floatlayoutprops.md#optional-onanimationstart)
* [onClick](_floatlayout_.floatlayoutprops.md#optional-onclick)
* [onLongClick](_floatlayout_.floatlayoutprops.md#optional-onlongclick)
* [onLongPress](_floatlayout_.floatlayoutprops.md#optional-onlongpress)
* [onRefresherAbort](_floatlayout_.floatlayoutprops.md#optional-onrefresherabort)
* [onRefresherPulling](_floatlayout_.floatlayoutprops.md#optional-onrefresherpulling)
* [onRefresherRefresh](_floatlayout_.floatlayoutprops.md#optional-onrefresherrefresh)
* [onRefresherRestore](_floatlayout_.floatlayoutprops.md#optional-onrefresherrestore)
* [onScroll](_floatlayout_.floatlayoutprops.md#optional-onscroll)
* [onScrollToLower](_floatlayout_.floatlayoutprops.md#optional-onscrolltolower)
* [onScrollToUpper](_floatlayout_.floatlayoutprops.md#optional-onscrolltoupper)
* [onTouchCancel](_floatlayout_.floatlayoutprops.md#optional-ontouchcancel)
* [onTouchEnd](_floatlayout_.floatlayoutprops.md#optional-ontouchend)
* [onTouchForceChange](_floatlayout_.floatlayoutprops.md#optional-ontouchforcechange)
* [onTouchMove](_floatlayout_.floatlayoutprops.md#optional-ontouchmove)
* [onTouchStart](_floatlayout_.floatlayoutprops.md#optional-ontouchstart)
* [onTransitionEnd](_floatlayout_.floatlayoutprops.md#optional-ontransitionend)
* [ref](_floatlayout_.floatlayoutprops.md#optional-ref)
* [refresherBackground](_floatlayout_.floatlayoutprops.md#optional-refresherbackground)
* [refresherDefaultStyle](_floatlayout_.floatlayoutprops.md#optional-refresherdefaultstyle)
* [refresherEnabled](_floatlayout_.floatlayoutprops.md#optional-refresherenabled)
* [refresherThreshold](_floatlayout_.floatlayoutprops.md#optional-refresherthreshold)
* [refresherTriggered](_floatlayout_.floatlayoutprops.md#optional-refreshertriggered)
* [scrollAnchoring](_floatlayout_.floatlayoutprops.md#optional-scrollanchoring)
* [scrollIntoView](_floatlayout_.floatlayoutprops.md#optional-scrollintoview)
* [scrollLeft](_floatlayout_.floatlayoutprops.md#optional-scrollleft)
* [scrollTop](_floatlayout_.floatlayoutprops.md#optional-scrolltop)
* [scrollWithAnimation](_floatlayout_.floatlayoutprops.md#optional-scrollwithanimation)
* [scrollX](_floatlayout_.floatlayoutprops.md#optional-scrollx)
* [scrollY](_floatlayout_.floatlayoutprops.md#optional-scrolly)
* [style](_floatlayout_.floatlayoutprops.md#optional-style)
* [title](_floatlayout_.floatlayoutprops.md#optional-title)
* [upperThreshold](_floatlayout_.floatlayoutprops.md#optional-upperthreshold)

## Properties

### `Optional` animation

• **animation**? : *object*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[animation](_floatlayout_.floatlayoutprops.md#optional-animation)*

Defined in node_modules/@tarojs/components/types/common.d.ts:19

动画属性

#### Type declaration:

* **actions**: *object[]*

___

### `Optional` className

• **className**? : *string*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[className](_floatlayout_.floatlayoutprops.md#optional-classname)*

Defined in node_modules/@tarojs/components/types/common.d.ts:9

同 `class`，在 React/Nerv 里一般使用 `className` 作为 `class` 的代称

___

### `Optional` enableBackToTop

• **enableBackToTop**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[enableBackToTop](_floatlayout_.floatlayoutprops.md#optional-enablebacktotop)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:56

iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向

**`supported`** weapp, alipay, rn

**`default`** fasle

___

### `Optional` enableFlex

• **enableFlex**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[enableFlex](_floatlayout_.floatlayoutprops.md#optional-enableflex)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:62

启用 flexbox 布局。开启后，当前节点声明了 `display: flex` 就会成为 flex container，并作用于其孩子节点。

**`supported`** weapp

**`default`** fasle

___

### `Optional` hidden

• **hidden**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[hidden](_floatlayout_.floatlayoutprops.md#optional-hidden)*

Defined in node_modules/@tarojs/components/types/common.d.ts:17

组件是否显示, 所有组件默认显示

___

### `Optional` id

• **id**? : *string*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[id](_floatlayout_.floatlayoutprops.md#optional-id)*

Defined in node_modules/@tarojs/components/types/common.d.ts:7

组件的唯一标示, 保持整个页面唯一

___

### `Optional` key

• **key**? : *string | number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[key](_floatlayout_.floatlayoutprops.md#optional-key)*

Defined in node_modules/@tarojs/components/types/common.d.ts:15

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，
需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

___

### `Optional` lowerThreshold

• **lowerThreshold**? : *number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[lowerThreshold](_floatlayout_.floatlayoutprops.md#optional-lowerthreshold)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:29

距底部/右边多远时（单位px），触发 scrolltolower 事件

**`default`** 50

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` onAnimationEnd

• **onAnimationEnd**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onAnimationEnd](_floatlayout_.floatlayoutprops.md#optional-onanimationend)*

Defined in node_modules/@tarojs/components/types/common.d.ts:61

会在一个 WXSS animation 动画完成时触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onAnimationIteration

• **onAnimationIteration**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onAnimationIteration](_floatlayout_.floatlayoutprops.md#optional-onanimationiteration)*

Defined in node_modules/@tarojs/components/types/common.d.ts:58

会在一个 WXSS animation 一次迭代结束时触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onAnimationStart

• **onAnimationStart**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onAnimationStart](_floatlayout_.floatlayoutprops.md#optional-onanimationstart)*

Defined in node_modules/@tarojs/components/types/common.d.ts:55

会在一个 WXSS animation 动画开始时触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onClick

• **onClick**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onClick](_floatlayout_.floatlayoutprops.md#optional-onclick)*

Defined in node_modules/@tarojs/components/types/common.d.ts:43

手指触摸后马上离开

#### Type declaration:

▸ (`event`: ITouchEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

___

### `Optional` onLongClick

• **onLongClick**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onLongClick](_floatlayout_.floatlayoutprops.md#optional-onlongclick)*

Defined in node_modules/@tarojs/components/types/common.d.ts:49

手指触摸后，超过350ms再离开（推荐使用longpress事件代替）

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onLongPress

• **onLongPress**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onLongPress](_floatlayout_.floatlayoutprops.md#optional-onlongpress)*

Defined in node_modules/@tarojs/components/types/common.d.ts:46

手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onRefresherAbort

• **onRefresherAbort**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onRefresherAbort](_floatlayout_.floatlayoutprops.md#optional-onrefresherabort)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:134

自定义下拉刷新被中止

**`supported`** weapp

___

### `Optional` onRefresherPulling

• **onRefresherPulling**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onRefresherPulling](_floatlayout_.floatlayoutprops.md#optional-onrefresherpulling)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:119

自定义下拉刷新控件被下拉

**`supported`** weapp

___

### `Optional` onRefresherRefresh

• **onRefresherRefresh**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onRefresherRefresh](_floatlayout_.floatlayoutprops.md#optional-onrefresherrefresh)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:124

自定义下拉刷新被触发

**`supported`** weapp

___

### `Optional` onRefresherRestore

• **onRefresherRestore**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onRefresherRestore](_floatlayout_.floatlayoutprops.md#optional-onrefresherrestore)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:129

自定义下拉刷新被复位

**`supported`** weapp

___

### `Optional` onScroll

• **onScroll**? : *BaseEventOrigFunction‹[onScrollDetail](_floatlayout_.floatlayoutprops.onscrolldetail.md)›*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onScroll](_floatlayout_.floatlayoutprops.md#optional-onscroll)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:114

滚动时触发
`event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}`

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` onScrollToLower

• **onScrollToLower**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onScrollToLower](_floatlayout_.floatlayoutprops.md#optional-onscrolltolower)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:108

滚动到底部/右边，会触发 scrolltolower 事件

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` onScrollToUpper

• **onScrollToUpper**? : *CommonEventFunction*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onScrollToUpper](_floatlayout_.floatlayoutprops.md#optional-onscrolltoupper)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:103

滚动到顶部/左边，会触发 scrolltoupper 事件

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` onTouchCancel

• **onTouchCancel**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTouchCancel](_floatlayout_.floatlayoutprops.md#optional-ontouchcancel)*

Defined in node_modules/@tarojs/components/types/common.d.ts:37

手指触摸动作被打断，如来电提醒，弹窗

#### Type declaration:

▸ (`event`: ITouchEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

___

### `Optional` onTouchEnd

• **onTouchEnd**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTouchEnd](_floatlayout_.floatlayoutprops.md#optional-ontouchend)*

Defined in node_modules/@tarojs/components/types/common.d.ts:40

手指触摸动作结束

#### Type declaration:

▸ (`event`: ITouchEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

___

### `Optional` onTouchForceChange

• **onTouchForceChange**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTouchForceChange](_floatlayout_.floatlayoutprops.md#optional-ontouchforcechange)*

Defined in node_modules/@tarojs/components/types/common.d.ts:64

在支持 3D Touch 的 iPhone 设备，重按时会触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` onTouchMove

• **onTouchMove**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTouchMove](_floatlayout_.floatlayoutprops.md#optional-ontouchmove)*

Defined in node_modules/@tarojs/components/types/common.d.ts:34

手指触摸后移动

#### Type declaration:

▸ (`event`: ITouchEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

___

### `Optional` onTouchStart

• **onTouchStart**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTouchStart](_floatlayout_.floatlayoutprops.md#optional-ontouchstart)*

Defined in node_modules/@tarojs/components/types/common.d.ts:31

手指触摸动作开始

#### Type declaration:

▸ (`event`: ITouchEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

___

### `Optional` onTransitionEnd

• **onTransitionEnd**? : *function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[onTransitionEnd](_floatlayout_.floatlayoutprops.md#optional-ontransitionend)*

Defined in node_modules/@tarojs/components/types/common.d.ts:52

会在 WXSS transition 或 Taro.createAnimation 动画结束后触发

#### Type declaration:

▸ (`event`: CommonEvent): *any*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CommonEvent |

___

### `Optional` ref

• **ref**? : *string | function*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[ref](_floatlayout_.floatlayoutprops.md#optional-ref)*

Defined in node_modules/@tarojs/components/types/common.d.ts:21

引用

___

### `Optional` refresherBackground

• **refresherBackground**? : *string*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[refresherBackground](_floatlayout_.floatlayoutprops.md#optional-refresherbackground)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:92

设置自定义下拉刷新区域背景颜色

**`supported`** weapp

**`default`** '#FFF'

___

### `Optional` refresherDefaultStyle

• **refresherDefaultStyle**? : *string*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[refresherDefaultStyle](_floatlayout_.floatlayoutprops.md#optional-refresherdefaultstyle)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:86

设置自定义下拉刷新默认样式，支持设置 `black | white | none`， none 表示不使用默认样式

**`supported`** weapp

**`default`** 'black'

___

### `Optional` refresherEnabled

• **refresherEnabled**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[refresherEnabled](_floatlayout_.floatlayoutprops.md#optional-refresherenabled)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:74

开启自定义下拉刷新

**`supported`** weapp

**`default`** fasle

___

### `Optional` refresherThreshold

• **refresherThreshold**? : *number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[refresherThreshold](_floatlayout_.floatlayoutprops.md#optional-refresherthreshold)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:80

设置自定义下拉刷新阈值

**`supported`** weapp

**`default`** 45

___

### `Optional` refresherTriggered

• **refresherTriggered**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[refresherTriggered](_floatlayout_.floatlayoutprops.md#optional-refreshertriggered)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:98

设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发

**`supported`** weapp

**`default`** fasle

___

### `Optional` scrollAnchoring

• **scrollAnchoring**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollAnchoring](_floatlayout_.floatlayoutprops.md#optional-scrollanchoring)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:68

开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS `overflow-anchor` 属性。

**`supported`** weapp

**`default`** fasle

___

### `Optional` scrollIntoView

• **scrollIntoView**? : *string*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollIntoView](_floatlayout_.floatlayoutprops.md#optional-scrollintoview)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:44

值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素

**`supported`** weapp, swan, alipay, tt, h5

___

### `Optional` scrollLeft

• **scrollLeft**? : *number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollLeft](_floatlayout_.floatlayoutprops.md#optional-scrollleft)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:39

设置横向滚动条位置

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` scrollTop

• **scrollTop**? : *number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollTop](_floatlayout_.floatlayoutprops.md#optional-scrolltop)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:34

设置竖向滚动条位置

**`supported`** weapp, swan, alipay, tt, h5, rn

___

### `Optional` scrollWithAnimation

• **scrollWithAnimation**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollWithAnimation](_floatlayout_.floatlayoutprops.md#optional-scrollwithanimation)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:50

在设置滚动条位置时使用动画过渡

**`supported`** weapp, swan, alipay, tt, h5, rn

**`default`** fasle

___

### `Optional` scrollX

• **scrollX**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollX](_floatlayout_.floatlayoutprops.md#optional-scrollx)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:10

允许横向滚动

**`default`** fasle

**`supported`** weapp, swan, alipay, tt, h5, rn

**`rn`** 二选一

___

### `Optional` scrollY

• **scrollY**? : *boolean*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[scrollY](_floatlayout_.floatlayoutprops.md#optional-scrolly)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:17

允许纵向滚动

**`default`** fasle

**`supported`** weapp, swan, alipay, tt, h5, rn

**`rn`** 二选一

___

### `Optional` style

• **style**? : *CSSProperties*

*Overrides void*

*Defined in [src/FloatLayout.tsx:10](https://github.com/tarojsx/ui/blob/v0.11.0/src/FloatLayout.tsx#L10)*

___

### `Optional` title

• **title**? : *React.ReactNode*

*Defined in [src/FloatLayout.tsx:11](https://github.com/tarojsx/ui/blob/v0.11.0/src/FloatLayout.tsx#L11)*

___

### `Optional` upperThreshold

• **upperThreshold**? : *number*

*Inherited from [FloatLayoutProps](_floatlayout_.floatlayoutprops.md).[upperThreshold](_floatlayout_.floatlayoutprops.md#optional-upperthreshold)*

Defined in node_modules/@tarojs/components/types/ScrollView.d.ts:23

距顶部/左边多远时（单位px），触发 scrolltoupper 事件

**`default`** 50

**`supported`** weapp, swan, alipay, tt, h5, rn
