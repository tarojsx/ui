---
id: "_tabspane_.tabspanelprops"
title: "TabsPanelProps"
sidebar_label: "TabsPanelProps"
---

## Hierarchy

* AtTabsPaneProps

  ↳ **TabsPanelProps**

## Index

### Properties

* [className](_tabspane_.tabspanelprops.md#optional-classname)
* [current](_tabspane_.tabspanelprops.md#current)
* [customStyle](_tabspane_.tabspanelprops.md#optional-customstyle)
* [index](_tabspane_.tabspanelprops.md#index)
* [style](_tabspane_.tabspanelprops.md#optional-style)
* [tabDirection](_tabspane_.tabspanelprops.md#optional-tabdirection)

## Properties

### `Optional` className

• **className**? : *string*

*Inherited from [ActivityIndicatorProps](_activityindicator_.activityindicatorprops.md).[className](_activityindicator_.activityindicatorprops.md#optional-classname)*

Defined in node_modules/taro-ui/types/base.d.ts:4

___

###  current

• **current**: *number*

*Inherited from [TabsPanelProps](_tabspane_.tabspanelprops.md).[current](_tabspane_.tabspanelprops.md#current)*

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:15

当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致

**`default`** 0

___

### `Optional` customStyle

• **customStyle**? : *string | CSSProperties*

*Inherited from [ActivityIndicatorProps](_activityindicator_.activityindicatorprops.md).[customStyle](_activityindicator_.activityindicatorprops.md#optional-customstyle)*

Defined in node_modules/taro-ui/types/base.d.ts:6

___

###  index

• **index**: *number*

*Inherited from [TabsPanelProps](_tabspane_.tabspanelprops.md).[index](_tabspane_.tabspanelprops.md#index)*

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:20

tabPane 排序，从 0 计数

**`default`** 0

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/TabsPane.tsx:9](https://github.com/tarojsx/ui/blob/6701f45/src/TabsPane.tsx#L9)*

___

### `Optional` tabDirection

• **tabDirection**? : *"horizontal" | "vertical"*

*Inherited from [TabsPanelProps](_tabspane_.tabspanelprops.md).[tabDirection](_tabspane_.tabspanelprops.md#optional-tabdirection)*

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:10

Tab 方向，请跟 AtTabs 保持一致

**`default`** 'horizontal'
