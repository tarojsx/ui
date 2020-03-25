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
* [pxTransform](_utils_.md#pxtransform)
* [uuid](_utils_.md#uuid)

## Functions

###  delay

▸ **delay**(`delayTime`: number): *Promise‹null›*

*Defined in [src/utils.ts:6](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L6)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 500 |

**Returns:** *Promise‹null›*

___

###  delayGetClientRect

▸ **delayGetClientRect**(`__namedParameters`: object): *Promise‹Array‹execObject››*

*Defined in [src/utils.ts:47](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L47)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 500 |
`selectorStr` | any | - |
`self` | any | - |

**Returns:** *Promise‹Array‹execObject››*

___

###  delayGetScrollOffset

▸ **delayGetScrollOffset**(`__namedParameters`: object): *Promise‹Array‹execObject››*

*Defined in [src/utils.ts:34](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L34)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`delayTime` | number | 500 |

**Returns:** *Promise‹Array‹execObject››*

___

###  delayQuerySelector

▸ **delayQuerySelector**(`self`: any, `selectorStr`: string, `delayTime`: number): *Promise‹Array‹execObject››*

*Defined in [src/utils.ts:18](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`self` | any | - |
`selectorStr` | string | - |
`delayTime` | number | 500 |

**Returns:** *Promise‹Array‹execObject››*

___

###  getEventDetail

▸ **getEventDetail**(`event`: any): *EventDetail*

*Defined in [src/utils.ts:105](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | any |

**Returns:** *EventDetail*

___

###  handleTouchScroll

▸ **handleTouchScroll**(`flag`: any): *void*

*Defined in [src/utils.ts:189](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L189)*

**Parameters:**

Name | Type |
------ | ------ |
`flag` | any |

**Returns:** *void*

___

###  initTestEnv

▸ **initTestEnv**(): *void*

*Defined in [src/utils.ts:177](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L177)*

**Returns:** *void*

___

###  isTest

▸ **isTest**(): *boolean*

*Defined in [src/utils.ts:183](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L183)*

**Returns:** *boolean*

___

###  pxTransform

▸ **pxTransform**(`size`: any): *string*

*Defined in [src/utils.ts:209](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L209)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | any |

**Returns:** *string*

___

###  uuid

▸ **uuid**(`len`: number, `radix`: number): *string*

*Defined in [src/utils.ts:63](https://github.com/tarojsx/ui/blob/6701f45/src/utils.ts#L63)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`len` | number | 8 |
`radix` | number | 16 |

**Returns:** *string*
