---
id: "_utils_"
title: "utils"
sidebar_label: "utils"
---

## Index

### Functions

* [delay](_utils_.md#delay)
* [delayGetClientRect](_utils_.md#delaygetclientrect)
* [delayGetScrollOffset](_utils_.md#delaygetscrolloffset)
* [delayQuerySelector](_utils_.md#delayqueryselector)
* [getEventDetail](_utils_.md#geteventdetail)
* [handleTouchScroll](_utils_.md#handletouchscroll)
* [initTestEnv](_utils_.md#inittestenv)
* [isTest](_utils_.md#istest)
* [mergeStyle](_utils_.md#mergestyle)
* [pxTransform](_utils_.md#pxtransform)
* [uuid](_utils_.md#uuid)

## Functions

###  delay

▸ **delay**(`delayTime`: number): *Promise‹null›*

*Defined in [src/utils.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 25 |

**Returns:** *Promise‹null›*

___

###  delayGetClientRect

▸ **delayGetClientRect**(`__namedParameters`: object): *Promise‹any[]›*

*Defined in [src/utils.ts:41](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L41)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 500 |
`selectorStr` | any | - |

**Returns:** *Promise‹any[]›*

___

###  delayGetScrollOffset

▸ **delayGetScrollOffset**(`__namedParameters`: object): *Promise‹any[]›*

*Defined in [src/utils.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L28)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 500 |

**Returns:** *Promise‹any[]›*

___

###  delayQuerySelector

▸ **delayQuerySelector**(`selectorStr`: string, `delayTime`: number): *Promise‹any[]›*

*Defined in [src/utils.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`selectorStr` | string | - |
`delayTime` | number | 500 |

**Returns:** *Promise‹any[]›*

___

###  getEventDetail

▸ **getEventDetail**(`event`: any): *EventDetail*

*Defined in [src/utils.ts:98](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *EventDetail*

___

###  handleTouchScroll

▸ **handleTouchScroll**(`flag`: any): *void*

*Defined in [src/utils.ts:189](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`flag` | any |

**Returns:** *void*

___

###  initTestEnv

▸ **initTestEnv**(): *void*

*Defined in [src/utils.ts:170](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L170)*

**Returns:** *void*

___

###  isTest

▸ **isTest**(): *boolean*

*Defined in [src/utils.ts:183](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L183)*

**Returns:** *boolean*

___

###  mergeStyle

▸ **mergeStyle**(`style1`: object | string, `style2`: object | string): *object | string*

*Defined in [src/utils.ts:240](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L240)*

合并 style

**Parameters:**

Name | Type |
------ | ------ |
`style1` | object &#124; string |
`style2` | object &#124; string |

**Returns:** *object | string*

___

###  pxTransform

▸ **pxTransform**(`size`: number): *string*

*Defined in [src/utils.ts:209](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L209)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *string*

___

###  uuid

▸ **uuid**(`len`: number, `radix`: number): *string*

*Defined in [src/utils.ts:56](https://github.com/tarojsx/ui/blob/v0.11.0/src/utils.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`len` | number | 8 |
`radix` | number | 16 |

**Returns:** *string*
