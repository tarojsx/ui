---
id: "_tabspane_.tabspaneprops"
title: "TabsPaneProps"
sidebar_label: "TabsPaneProps"
---

## Hierarchy

* AtTabsPaneProps

  ↳ **TabsPaneProps**

## Index

### Properties

* [className](_tabspane_.tabspaneprops.md#optional-classname)
* [current](_tabspane_.tabspaneprops.md#current)
* [customStyle](_tabspane_.tabspaneprops.md#optional-customstyle)
* [index](_tabspane_.tabspaneprops.md#index)
* [style](_tabspane_.tabspaneprops.md#optional-style)
* [tabDirection](_tabspane_.tabspaneprops.md#optional-tabdirection)

## Properties

### `Optional` className

• **className**? : *string*

*Inherited from [ActivityIndicatorProps](_activityindicator_.activityindicatorprops.md).[className](_activityindicator_.activityindicatorprops.md#optional-classname)*

Defined in node_modules/taro-ui/types/base.d.ts:4

___

###  current

• **current**: *number*

*Inherited from [TabsPaneProps](_tabspane_.tabspaneprops.md).[current](_tabspane_.tabspaneprops.md#current)*

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

*Inherited from [TabsPaneProps](_tabspane_.tabspaneprops.md).[index](_tabspane_.tabspaneprops.md#index)*

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:20

tabPane 排序，从 0 计数

**`default`** 0

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/TabsPane.tsx:9](https://github.com/tarojsx/ui/blob/v0.11.0/src/TabsPane.tsx#L9)*

___

### `Optional` tabDirection

• **tabDirection**? : *"horizontal" | "vertical"*

*Inherited from [TabsPaneProps](_tabspane_.tabspaneprops.md).[tabDirection](_tabspane_.tabspaneprops.md#optional-tabdirection)*

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:10

Tab 方向，请跟 AtTabs 保持一致

**`default`** 'horizontal'
