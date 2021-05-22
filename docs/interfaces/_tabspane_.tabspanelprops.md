---
id: '_tabspane_.tabspanelprops'
title: 'TabsPanelProps'
sidebar_label: 'TabsPanelProps'
---

## Hierarchy

- AtTabsPaneProps

  ↳ **TabsPanelProps**

## Index

### Properties

- [className](_tabspane_.tabspanelprops.md#optional-classname)
- [current](_tabspane_.tabspanelprops.md#current)
- [customStyle](_tabspane_.tabspanelprops.md#optional-customstyle)
- [index](_tabspane_.tabspanelprops.md#index)
- [style](_tabspane_.tabspanelprops.md#optional-style)
- [tabDirection](_tabspane_.tabspanelprops.md#optional-tabdirection)

## Properties

### `Optional` className

• **className**? : _string_

_Inherited from [ActivityIndicatorProps](\_activityindicator_.activityindicatorprops.md).[className](_activityindicator_.activityindicatorprops.md#optional-classname)\_

Defined in node_modules/taro-ui/types/base.d.ts:4

---

### current

• **current**: _number_

_Inherited from [TabsPanelProps](\_tabspane_.tabspanelprops.md).[current](_tabspane_.tabspanelprops.md#current)\_

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:15

当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致

**`default`** 0

---

### `Optional` customStyle

• **customStyle**? : _string | CSSProperties_

_Inherited from [ActivityIndicatorProps](\_activityindicator_.activityindicatorprops.md).[customStyle](_activityindicator_.activityindicatorprops.md#optional-customstyle)\_

Defined in node_modules/taro-ui/types/base.d.ts:6

---

### index

• **index**: _number_

_Inherited from [TabsPanelProps](\_tabspane_.tabspanelprops.md).[index](_tabspane_.tabspanelprops.md#index)\_

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:20

tabPane 排序，从 0 计数

**`default`** 0

---

### `Optional` style

• **style**? : _CSSProperties_

_Defined in [src/TabsPane.tsx:9](https://github.com/tarojsx/ui/blob/6701f45/src/TabsPane.tsx#L9)_

---

### `Optional` tabDirection

• **tabDirection**? : _"horizontal" | "vertical"_

_Inherited from [TabsPanelProps](\_tabspane_.tabspanelprops.md).[tabDirection](_tabspane_.tabspanelprops.md#optional-tabdirection)\_

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:10

Tab 方向，请跟 AtTabs 保持一致

**`default`** 'horizontal'
