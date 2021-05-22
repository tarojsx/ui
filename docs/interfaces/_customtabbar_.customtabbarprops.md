---
id: '_customtabbar_.customtabbarprops'
title: 'CustomTabBarProps'
sidebar_label: 'CustomTabBarProps'
---

## Hierarchy

- **CustomTabBarProps**

## Index

### Properties

- [appTabBarConfig](_customtabbar_.customtabbarprops.md#optional-apptabbarconfig)
- [children](_customtabbar_.customtabbarprops.md#optional-children)

## Properties

### `Optional` appTabBarConfig

• **appTabBarConfig**? : _TabBarConfig_

_Defined in [src/CustomTabBar.tsx:37](https://github.com/tarojsx/ui/blob/v0.11.0/src/CustomTabBar.tsx#L37)_

`app.config.js` 中的 `tabBar` 字段, taro 3.0.0-rc.1 及以上版本可省略.

**`example`**

```tsx
import appConfig from '../app.config';
<CustomTabBar appTabBarConfig={appConfig.tabBar} />;
```

---

### `Optional` children

• **children**? : _function_

_Defined in [src/CustomTabBar.tsx:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/CustomTabBar.tsx#L12)_

#### Type declaration:

▸ (`renderProps`: object): _ReactElement_

**Parameters:**

▪ **renderProps**: _object_

| Name             | Type               | Description                                      |
| ---------------- | ------------------ | ------------------------------------------------ |
| `current`        | number             | 当前选中项索引                                   |
| `hidden`         | boolean            | 是否隐藏. 当调用 `Taro.hideTabBar()` 后值为 true |
| `list`           | CustomTabBarItem[] | Tab 列表                                         |
| `style`          | CustomTabBarStyle  | TabBar 样式                                      |
| `switchTabIndex` |                    | -                                                |
