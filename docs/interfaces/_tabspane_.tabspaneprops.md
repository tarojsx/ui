---
id: '_tabspane_.tabspaneprops'
title: 'TabsPaneProps'
sidebar_label: 'TabsPaneProps'
---

## Hierarchy

- AtTabsPaneProps

  ↳ **TabsPaneProps**

## Index

### Properties

- [className](_tabspane_.tabspaneprops.md#optional-classname)
- [current](_tabspane_.tabspaneprops.md#current)
- [customStyle](_tabspane_.tabspaneprops.md#optional-customstyle)
- [index](_tabspane_.tabspaneprops.md#index)
- [style](_tabspane_.tabspaneprops.md#optional-style)
- [tabDirection](_tabspane_.tabspaneprops.md#optional-tabdirection)

## Properties

### `Optional` className

• **className**? : _string_

_Inherited from [ActivityIndicatorProps](\_activityindicator_.activityindicatorprops.md).[className](_activityindicator_.activityindicatorprops.md#optional-classname)\_

Defined in node_modules/taro-ui/types/base.d.ts:4

---

### current

• **current**: _number_

_Inherited from [TabsPaneProps](\_tabspane_.tabspaneprops.md).[current](_tabspane_.tabspaneprops.md#current)\_

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

_Inherited from [TabsPaneProps](\_tabspane_.tabspaneprops.md).[index](_tabspane_.tabspaneprops.md#index)\_

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:20

tabPane 排序，从 0 计数

**`default`** 0

---

### `Optional` style

• **style**? : _CSSProperties_

_Defined in [src/TabsPane.tsx:9](https://github.com/tarojsx/ui/blob/v0.11.0/src/TabsPane.tsx#L9)_

---

### `Optional` tabDirection

• **tabDirection**? : _"horizontal" | "vertical"_

_Inherited from [TabsPaneProps](\_tabspane_.tabspaneprops.md).[tabDirection](_tabspane_.tabspaneprops.md#optional-tabdirection)\_

Defined in node_modules/taro-ui/types/tabs-pane.d.ts:10

Tab 方向，请跟 AtTabs 保持一致

**`default`** 'horizontal'
