---
id: "_searchbar_.searchbarprops"
title: "SearchBarProps"
sidebar_label: "SearchBarProps"
---

## Hierarchy

* object

* object

  ↳ **SearchBarProps**

## Index

### Properties

* [onActionClick](_searchbar_.searchbarprops.md#optional-onactionclick)
* [onChange](_searchbar_.searchbarprops.md#onchange)
* [onConfirm](_searchbar_.searchbarprops.md#optional-onconfirm)
* [style](_searchbar_.searchbarprops.md#optional-style)

## Properties

### `Optional` onActionClick

• **onActionClick**? : *CommonEventFunction‹object›*

*Defined in [src/SearchBar.tsx:27](https://github.com/tarojsx/ui/blob/v0.11.0/src/SearchBar.tsx#L27)*

右侧按钮点击触发事件

___

###  onChange

• **onChange**: *CommonEventFunction‹object›*

*Defined in [src/SearchBar.tsx:18](https://github.com/tarojsx/ui/blob/v0.11.0/src/SearchBar.tsx#L18)*

输入框值改变时触发的事件

**`description`** 必填，开发者需要通过 onChange 事件来更新 value 值变化

___

### `Optional` onConfirm

• **onConfirm**? : *CommonEventFunction‹object›*

*Defined in [src/SearchBar.tsx:23](https://github.com/tarojsx/ui/blob/v0.11.0/src/SearchBar.tsx#L23)*

点击完成按钮时触发

**`description`** H5 版中目前需借用 Form 组件的onSubmit事件来替代

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/SearchBar.tsx:13](https://github.com/tarojsx/ui/blob/v0.11.0/src/SearchBar.tsx#L13)*
