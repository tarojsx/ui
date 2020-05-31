---
id: "_calendar_body_interface_.props"
title: "Props"
sidebar_label: "Props"
---

## Hierarchy

* **Props**

## Index

### Properties

* [format](_calendar_body_interface_.props.md#format)
* [generateDate](_calendar_body_interface_.props.md#generatedate)
* [isSwiper](_calendar_body_interface_.props.md#isswiper)
* [isVertical](_calendar_body_interface_.props.md#isvertical)
* [marks](_calendar_body_interface_.props.md#marks)
* [maxDate](_calendar_body_interface_.props.md#optional-maxdate)
* [minDate](_calendar_body_interface_.props.md#optional-mindate)
* [onDayClick](_calendar_body_interface_.props.md#ondayclick)
* [onLongClick](_calendar_body_interface_.props.md#onlongclick)
* [onSwipeMonth](_calendar_body_interface_.props.md#onswipemonth)
* [selectedDate](_calendar_body_interface_.props.md#selecteddate)
* [selectedDates](_calendar_body_interface_.props.md#selecteddates)
* [validDates](_calendar_body_interface_.props.md#validdates)

## Properties

###  format

• **format**: *string*

*Defined in [src/Calendar/body/interface.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L6)*

___

###  generateDate

• **generateDate**: *number*

*Defined in [src/Calendar/body/interface.ts:20](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L20)*

___

###  isSwiper

• **isSwiper**: *boolean*

*Defined in [src/Calendar/body/interface.ts:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L12)*

___

###  isVertical

• **isVertical**: *boolean*

*Defined in [src/Calendar/body/interface.ts:18](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L18)*

___

###  marks

• **marks**: *Array‹Mark›*

*Defined in [src/Calendar/body/interface.ts:10](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L10)*

___

### `Optional` maxDate

• **maxDate**? : *Calendar.DateArg*

*Defined in [src/Calendar/body/interface.ts:16](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L16)*

___

### `Optional` minDate

• **minDate**? : *Calendar.DateArg*

*Defined in [src/Calendar/body/interface.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L14)*

___

###  onDayClick

• **onDayClick**: *function*

*Defined in [src/Calendar/body/interface.ts:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L26)*

#### Type declaration:

▸ (`item`: Item): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | Item |

___

###  onLongClick

• **onLongClick**: *function*

*Defined in [src/Calendar/body/interface.ts:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L30)*

#### Type declaration:

▸ (`item`: Item): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | Item |

___

###  onSwipeMonth

• **onSwipeMonth**: *function*

*Defined in [src/Calendar/body/interface.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L28)*

#### Type declaration:

▸ (`vectorCount`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`vectorCount` | number |

___

###  selectedDate

• **selectedDate**: *SelectedDate*

*Defined in [src/Calendar/body/interface.ts:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L22)*

___

###  selectedDates

• **selectedDates**: *Array‹SelectedDate› | []*

*Defined in [src/Calendar/body/interface.ts:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L24)*

___

###  validDates

• **validDates**: *Array‹ValidDate›*

*Defined in [src/Calendar/body/interface.ts:8](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L8)*
