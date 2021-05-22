---
id: '_calendar_body_interface_.props'
title: 'Props'
sidebar_label: 'Props'
---

## Hierarchy

- **Props**

## Index

### Properties

- [format](_calendar_body_interface_.props.md#format)
- [generateDate](_calendar_body_interface_.props.md#generatedate)
- [isSwiper](_calendar_body_interface_.props.md#isswiper)
- [isVertical](_calendar_body_interface_.props.md#isvertical)
- [marks](_calendar_body_interface_.props.md#marks)
- [maxDate](_calendar_body_interface_.props.md#optional-maxdate)
- [minDate](_calendar_body_interface_.props.md#optional-mindate)
- [onDayClick](_calendar_body_interface_.props.md#ondayclick)
- [onLongClick](_calendar_body_interface_.props.md#onlongclick)
- [onSwipeMonth](_calendar_body_interface_.props.md#onswipemonth)
- [selectedDate](_calendar_body_interface_.props.md#selecteddate)
- [selectedDates](_calendar_body_interface_.props.md#selecteddates)
- [validDates](_calendar_body_interface_.props.md#validdates)

## Properties

### format

• **format**: _string_

_Defined in [src/Calendar/body/interface.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L6)_

---

### generateDate

• **generateDate**: _number_

_Defined in [src/Calendar/body/interface.ts:20](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L20)_

---

### isSwiper

• **isSwiper**: _boolean_

_Defined in [src/Calendar/body/interface.ts:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L12)_

---

### isVertical

• **isVertical**: _boolean_

_Defined in [src/Calendar/body/interface.ts:18](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L18)_

---

### marks

• **marks**: _Array‹Mark›_

_Defined in [src/Calendar/body/interface.ts:10](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L10)_

---

### `Optional` maxDate

• **maxDate**? : _Calendar.DateArg_

_Defined in [src/Calendar/body/interface.ts:16](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L16)_

---

### `Optional` minDate

• **minDate**? : _Calendar.DateArg_

_Defined in [src/Calendar/body/interface.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L14)_

---

### onDayClick

• **onDayClick**: _function_

_Defined in [src/Calendar/body/interface.ts:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L26)_

#### Type declaration:

▸ (`item`: Item): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | Item |

---

### onLongClick

• **onLongClick**: _function_

_Defined in [src/Calendar/body/interface.ts:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L30)_

#### Type declaration:

▸ (`item`: Item): _void_

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `item` | Item |

---

### onSwipeMonth

• **onSwipeMonth**: _function_

_Defined in [src/Calendar/body/interface.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L28)_

#### Type declaration:

▸ (`vectorCount`: number): _void_

**Parameters:**

| Name          | Type   |
| ------------- | ------ |
| `vectorCount` | number |

---

### selectedDate

• **selectedDate**: _SelectedDate_

_Defined in [src/Calendar/body/interface.ts:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L22)_

---

### selectedDates

• **selectedDates**: _Array‹SelectedDate› | []_

_Defined in [src/Calendar/body/interface.ts:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L24)_

---

### validDates

• **validDates**: _Array‹ValidDate›_

_Defined in [src/Calendar/body/interface.ts:8](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/body/interface.ts#L8)_
