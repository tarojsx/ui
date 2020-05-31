---
id: "_calendar_interface_.propsbase"
title: "PropsBase"
sidebar_label: "PropsBase"
---

## Hierarchy

* **PropsBase**

  ↳ [SingleSelectedProps](_calendar_interface_.singleselectedprops.md)

  ↳ [MutilSelectedProps](_calendar_interface_.mutilselectedprops.md)

## Index

### Properties

* [className](_calendar_interface_.propsbase.md#optional-classname)
* [format](_calendar_interface_.propsbase.md#optional-format)
* [hideArrow](_calendar_interface_.propsbase.md#optional-hidearrow)
* [isSwiper](_calendar_interface_.propsbase.md#optional-isswiper)
* [isVertical](_calendar_interface_.propsbase.md#optional-isvertical)
* [marks](_calendar_interface_.propsbase.md#optional-marks)
* [maxDate](_calendar_interface_.propsbase.md#optional-maxdate)
* [minDate](_calendar_interface_.propsbase.md#optional-mindate)
* [monthFormat](_calendar_interface_.propsbase.md#optional-monthformat)
* [onClickNextMonth](_calendar_interface_.propsbase.md#optional-onclicknextmonth)
* [onClickPreMonth](_calendar_interface_.propsbase.md#optional-onclickpremonth)
* [onDayClick](_calendar_interface_.propsbase.md#optional-ondayclick)
* [onDayLongClick](_calendar_interface_.propsbase.md#optional-ondaylongclick)
* [onMonthChange](_calendar_interface_.propsbase.md#optional-onmonthchange)
* [onSelectDate](_calendar_interface_.propsbase.md#optional-onselectdate)
* [validDates](_calendar_interface_.propsbase.md#optional-validdates)

## Properties

### `Optional` className

• **className**? : *Calendar.classNameType*

*Defined in [src/Calendar/interface.ts:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L22)*

___

### `Optional` format

• **format**? : *string*

*Defined in [src/Calendar/interface.ts:4](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L4)*

___

### `Optional` hideArrow

• **hideArrow**? : *boolean*

*Defined in [src/Calendar/interface.ts:18](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L18)*

___

### `Optional` isSwiper

• **isSwiper**? : *boolean*

*Defined in [src/Calendar/interface.ts:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L12)*

___

### `Optional` isVertical

• **isVertical**? : *boolean*

*Defined in [src/Calendar/interface.ts:20](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L20)*

___

### `Optional` marks

• **marks**? : *Array‹Mark›*

*Defined in [src/Calendar/interface.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L14)*

___

### `Optional` maxDate

• **maxDate**? : *Calendar.DateArg*

*Defined in [src/Calendar/interface.ts:10](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L10)*

___

### `Optional` minDate

• **minDate**? : *Calendar.DateArg*

*Defined in [src/Calendar/interface.ts:8](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L8)*

___

### `Optional` monthFormat

• **monthFormat**? : *string*

*Defined in [src/Calendar/interface.ts:16](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L16)*

___

### `Optional` onClickNextMonth

• **onClickNextMonth**? : *function*

*Defined in [src/Calendar/interface.ts:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L26)*

#### Type declaration:

▸ (): *void*

___

### `Optional` onClickPreMonth

• **onClickPreMonth**? : *function*

*Defined in [src/Calendar/interface.ts:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L24)*

#### Type declaration:

▸ (): *void*

___

### `Optional` onDayClick

• **onDayClick**? : *function*

*Defined in [src/Calendar/interface.ts:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L30)*

#### Type declaration:

▸ (`item`: object): *void*

**Parameters:**

▪ **item**: *object*

Name | Type |
------ | ------ |
`value` | string |

___

### `Optional` onDayLongClick

• **onDayLongClick**? : *function*

*Defined in [src/Calendar/interface.ts:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L32)*

#### Type declaration:

▸ (`item`: object): *void*

**Parameters:**

▪ **item**: *object*

Name | Type |
------ | ------ |
`value` | string |

___

### `Optional` onMonthChange

• **onMonthChange**? : *function*

*Defined in [src/Calendar/interface.ts:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L34)*

#### Type declaration:

▸ (`value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

___

### `Optional` onSelectDate

• **onSelectDate**? : *function*

*Defined in [src/Calendar/interface.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L28)*

#### Type declaration:

▸ (`item`: object): *void*

**Parameters:**

▪ **item**: *object*

Name | Type |
------ | ------ |
`value` | SelectedDate |

___

### `Optional` validDates

• **validDates**? : *Array‹ValidDate›*

*Defined in [src/Calendar/interface.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L6)*
