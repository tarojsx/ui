---
id: '_utils_'
title: 'utils'
sidebar_label: 'utils'
---

## Index

### Functions

- [delay](_utils_.md#delay)
- [delayGetClientRect](_utils_.md#delaygetclientrect)
- [delayGetScrollOffset](_utils_.md#delaygetscrolloffset)
- [delayQuerySelector](_utils_.md#delayqueryselector)
- [getEventDetail](_utils_.md#geteventdetail)
- [handleTouchScroll](_utils_.md#handletouchscroll)
- [initTestEnv](_utils_.md#inittestenv)
- [isTest](_utils_.md#istest)
- [mergeStyle](_utils_.md#mergestyle)
- [pxTransform](_utils_.md#pxtransform)
- [uuid](_utils_.md#uuid)

## Functions

### delay

▸ **delay**(`delayTime`: number): _Promise‹null›_

_Defined in [src/utils.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L6)_

**Parameters:**

| Name        | Type   | Default |
| ----------- | ------ | ------- |
| `delayTime` | number | 25      |

**Returns:** _Promise‹null›_

---

### delayGetClientRect

▸ **delayGetClientRect**(`__namedParameters`: object): _Promise‹any[]›_

_Defined in [src/utils.ts:41](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L41)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name          | Type   | Default |
| ------------- | ------ | ------- |
| `delayTime`   | number | 500     |
| `selectorStr` | any    | -       |

**Returns:** _Promise‹any[]›_

---

### delayGetScrollOffset

▸ **delayGetScrollOffset**(`__namedParameters`: object): _Promise‹any[]›_

_Defined in [src/utils.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L28)_

**Parameters:**

▪ **\_\_namedParameters**: _object_

| Name        | Type   | Default |
| ----------- | ------ | ------- |
| `delayTime` | number | 500     |

**Returns:** _Promise‹any[]›_

---

### delayQuerySelector

▸ **delayQuerySelector**(`selectorStr`: string, `delayTime`: number): _Promise‹any[]›_

_Defined in [src/utils.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L14)_

**Parameters:**

| Name          | Type   | Default |
| ------------- | ------ | ------- |
| `selectorStr` | string | -       |
| `delayTime`   | number | 500     |

**Returns:** _Promise‹any[]›_

---

### getEventDetail

▸ **getEventDetail**(`event`: any): _EventDetail_

_Defined in [src/utils.ts:98](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L98)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `event` | any  |

**Returns:** _EventDetail_

---

### handleTouchScroll

▸ **handleTouchScroll**(`flag`: any): _void_

_Defined in [src/utils.ts:189](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L189)_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `flag` | any  |

**Returns:** _void_

---

### initTestEnv

▸ **initTestEnv**(): _void_

_Defined in [src/utils.ts:170](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L170)_

**Returns:** _void_

---

### isTest

▸ **isTest**(): _boolean_

_Defined in [src/utils.ts:183](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L183)_

**Returns:** _boolean_

---

### mergeStyle

▸ **mergeStyle**(`style1`: object | string, `style2`: object | string): _object | string_

_Defined in [src/utils.ts:240](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L240)_

合并 style

**Parameters:**

| Name     | Type                 |
| -------- | -------------------- |
| `style1` | object &#124; string |
| `style2` | object &#124; string |

**Returns:** _object | string_

---

### pxTransform

▸ **pxTransform**(`size`: number): _string_

_Defined in [src/utils.ts:209](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L209)_

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `size` | number |

**Returns:** _string_

---

### uuid

▸ **uuid**(`len`: number, `radix`: number): _string_

_Defined in [src/utils.ts:56](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L56)_

**Parameters:**

| Name    | Type   | Default |
| ------- | ------ | ------- |
| `len`   | number | 8       |
| `radix` | number | 16      |

**Returns:** _string_
