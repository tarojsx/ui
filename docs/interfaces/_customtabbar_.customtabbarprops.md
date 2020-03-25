---
id: "_customtabbar_.customtabbarprops"
title: "CustomTabBarProps"
sidebar_label: "CustomTabBarProps"
---

## Hierarchy

* **CustomTabBarProps**

## Index

### Properties

* [appTabBarConfig](_customtabbar_.customtabbarprops.md#apptabbarconfig)
* [children](_customtabbar_.customtabbarprops.md#optional-children)

## Properties

###  appTabBarConfig

• **appTabBarConfig**: *TabBarConfig*

*Defined in [src/CustomTabBar.tsx:35](https://github.com/tarojsx/ui/blob/6701f45/src/CustomTabBar.tsx#L35)*

`app.config.js` 中的 `tabBar` 字段

**`example`** 
```tsx
 import appConfig from '../app.config'
 <CustomTabBar appTabBarConfig={appConfig.tabBar} />
```

___

### `Optional` children

• **children**? : *function*

*Defined in [src/CustomTabBar.tsx:10](https://github.com/tarojsx/ui/blob/6701f45/src/CustomTabBar.tsx#L10)*

#### Type declaration:

▸ (`renderProps`: object): *ReactElement*

**Parameters:**

▪ **renderProps**: *object*

Name | Type | Description |
------ | ------ | ------ |
`current` | number | 当前选中项索引 |
`hidden` | boolean | 是否隐藏. 当调用 `Taro.hideTabBar()` 后值为 true |
`list` | CustomTabBarItem[] | Tab 列表 |
`style` | CustomTabBarStyle | TabBar 样式 |
`switchTabIndex` |  | - |
