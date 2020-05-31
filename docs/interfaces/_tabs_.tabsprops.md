---
id: "_tabs_.tabsprops"
title: "TabsProps"
sidebar_label: "TabsProps"
---

## Hierarchy

* AtTabsProps

  ↳ **TabsProps**

## Index

### Properties

* [animated](_tabs_.tabsprops.md#optional-animated)
* [className](_tabs_.tabsprops.md#optional-classname)
* [current](_tabs_.tabsprops.md#current)
* [customStyle](_tabs_.tabsprops.md#optional-customstyle)
* [fixed](_tabs_.tabsprops.md#optional-fixed)
* [height](_tabs_.tabsprops.md#optional-height)
* [onClick](_tabs_.tabsprops.md#onclick)
* [scroll](_tabs_.tabsprops.md#optional-scroll)
* [style](_tabs_.tabsprops.md#optional-style)
* [swipeable](_tabs_.tabsprops.md#optional-swipeable)
* [tabDirection](_tabs_.tabsprops.md#optional-tabdirection)
* [tabList](_tabs_.tabsprops.md#tablist)

## Properties

### `Optional` animated

• **animated**? : *boolean*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[animated](_tabs_.tabsprops.md#optional-animated)*

Defined in node_modules/taro-ui/types/tabs.d.ts:38

是否开启切换动画

**`default`** true

___

### `Optional` className

• **className**? : *string*

*Inherited from [ActivityIndicatorProps](_activityindicator_.activityindicatorprops.md).[className](_activityindicator_.activityindicatorprops.md#optional-classname)*

Defined in node_modules/taro-ui/types/base.d.ts:4

___

###  current

• **current**: *number*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[current](_tabs_.tabsprops.md#current)*

Defined in node_modules/taro-ui/types/tabs.d.ts:28

当前选中的标签索引值，从 0 计数，开发者需要通过 onClick 事件来改变 current，从而切换 tab

**`default`** 0

___

### `Optional` customStyle

• **customStyle**? : *string | CSSProperties*

*Inherited from [ActivityIndicatorProps](_activityindicator_.activityindicatorprops.md).[customStyle](_activityindicator_.activityindicatorprops.md#optional-customstyle)*

Defined in node_modules/taro-ui/types/base.d.ts:6

___

### `Optional` fixed

• **fixed**? : *boolean*

*Defined in [src/Tabs.tsx:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/Tabs.tsx#L12)*

___

### `Optional` height

• **height**? : *string*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[height](_tabs_.tabsprops.md#optional-height)*

Defined in node_modules/taro-ui/types/tabs.d.ts:23

Tab 高度，当 tabDirection='vertical' 时，需要设置；
当 tabDirection='horizontal' 时，会自动根据内容撑开，请勿设置

___

###  onClick

• **onClick**: *function*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[onClick](_tabs_.tabsprops.md#onclick)*

Defined in node_modules/taro-ui/types/tabs.d.ts:51

点击或滑动时触发事件

#### Type declaration:

▸ (`index`: number, `event`: CommonEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`event` | CommonEvent |

___

### `Optional` scroll

• **scroll**? : *boolean*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[scroll](_tabs_.tabsprops.md#optional-scroll)*

Defined in node_modules/taro-ui/types/tabs.d.ts:33

是否滚动，当标签太多时，建议使用。否则会出现部分标签被隐藏

**`default`** false

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/Tabs.tsx:11](https://github.com/tarojsx/ui/blob/v0.11.0/src/Tabs.tsx#L11)*

___

### `Optional` swipeable

• **swipeable**? : *boolean*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[swipeable](_tabs_.tabsprops.md#optional-swipeable)*

Defined in node_modules/taro-ui/types/tabs.d.ts:43

是否支持手势滑动切换内容页，当 tabDirection='vertical' 时，无论是否设置，都不支持手势滑动切换内容页

**`default`** true

___

### `Optional` tabDirection

• **tabDirection**? : *"horizontal" | "vertical"*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[tabDirection](_tabs_.tabsprops.md#optional-tabdirection)*

Defined in node_modules/taro-ui/types/tabs.d.ts:18

Tab 方向，请跟 AtTabPane 保持一致

**`default`** 'horizontal'

___

###  tabList

• **tabList**: *TabItem[]*

*Inherited from [TabsProps](_tabs_.tabsprops.md).[tabList](_tabs_.tabsprops.md#tablist)*

Defined in node_modules/taro-ui/types/tabs.d.ts:47

tab 列表
