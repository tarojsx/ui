---
id: '_calendar_interface_.propsbase'
title: 'PropsBase'
sidebar_label: 'PropsBase'
---

## Hierarchy

- **PropsBase**

  ↳ [SingleSelectedProps](_calendar_interface_.singleselectedprops.md)

  ↳ [MutilSelectedProps](_calendar_interface_.mutilselectedprops.md)

## Index

### Properties

- [className](_calendar_interface_.propsbase.md#optional-classname)
- [format](_calendar_interface_.propsbase.md#optional-format)
- [hideArrow](_calendar_interface_.propsbase.md#optional-hidearrow)
- [isSwiper](_calendar_interface_.propsbase.md#optional-isswiper)
- [isVertical](_calendar_interface_.propsbase.md#optional-isvertical)
- [marks](_calendar_interface_.propsbase.md#optional-marks)
- [maxDate](_calendar_interface_.propsbase.md#optional-maxdate)
- [minDate](_calendar_interface_.propsbase.md#optional-mindate)
- [monthFormat](_calendar_interface_.propsbase.md#optional-monthformat)
- [onClickNextMonth](_calendar_interface_.propsbase.md#optional-onclicknextmonth)
- [onClickPreMonth](_calendar_interface_.propsbase.md#optional-onclickpremonth)
- [onDayClick](_calendar_interface_.propsbase.md#optional-ondayclick)
- [onDayLongClick](_calendar_interface_.propsbase.md#optional-ondaylongclick)
- [onMonthChange](_calendar_interface_.propsbase.md#optional-onmonthchange)
- [onSelectDate](_calendar_interface_.propsbase.md#optional-onselectdate)
- [validDates](_calendar_interface_.propsbase.md#optional-validdates)

## Properties

### `Optional` className

• **className**? : _Calendar.classNameType_

_Defined in [src/Calendar/interface.ts:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L22)_

---

### `Optional` format

• **format**? : _string_

_Defined in [src/Calendar/interface.ts:4](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L4)_

---

### `Optional` hideArrow

• **hideArrow**? : _boolean_

_Defined in [src/Calendar/interface.ts:18](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L18)_

---

### `Optional` isSwiper

• **isSwiper**? : _boolean_

_Defined in [src/Calendar/interface.ts:12](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L12)_

---

### `Optional` isVertical

• **isVertical**? : _boolean_

_Defined in [src/Calendar/interface.ts:20](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L20)_

---

### `Optional` marks

• **marks**? : _Array‹Mark›_

_Defined in [src/Calendar/interface.ts:14](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L14)_

---

### `Optional` maxDate

• **maxDate**? : _Calendar.DateArg_

_Defined in [src/Calendar/interface.ts:10](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L10)_

---

### `Optional` minDate

• **minDate**? : _Calendar.DateArg_

_Defined in [src/Calendar/interface.ts:8](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L8)_

---

### `Optional` monthFormat

• **monthFormat**? : _string_

_Defined in [src/Calendar/interface.ts:16](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L16)_

---

### `Optional` onClickNextMonth

• **onClickNextMonth**? : _function_

_Defined in [src/Calendar/interface.ts:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L26)_

#### Type declaration:

▸ (): _void_

---

### `Optional` onClickPreMonth

• **onClickPreMonth**? : _function_

_Defined in [src/Calendar/interface.ts:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L24)_

#### Type declaration:

▸ (): _void_

---

### `Optional` onDayClick

• **onDayClick**? : _function_

_Defined in [src/Calendar/interface.ts:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L30)_

#### Type declaration:

▸ (`item`: object): _void_

**Parameters:**

▪ **item**: _object_

| Name    | Type   |
| ------- | ------ |
| `value` | string |

---

### `Optional` onDayLongClick

• **onDayLongClick**? : _function_

_Defined in [src/Calendar/interface.ts:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L32)_

#### Type declaration:

▸ (`item`: object): _void_

**Parameters:**

▪ **item**: _object_

| Name    | Type   |
| ------- | ------ |
| `value` | string |

---

### `Optional` onMonthChange

• **onMonthChange**? : _function_

_Defined in [src/Calendar/interface.ts:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L34)_

#### Type declaration:

▸ (`value`: string): _void_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `value` | string |

---

### `Optional` onSelectDate

• **onSelectDate**? : _function_

_Defined in [src/Calendar/interface.ts:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L28)_

#### Type declaration:

▸ (`item`: object): _void_

**Parameters:**

▪ **item**: _object_

| Name    | Type         |
| ------- | ------------ |
| `value` | SelectedDate |

---

### `Optional` validDates

• **validDates**? : _Array‹ValidDate›_

_Defined in [src/Calendar/interface.ts:6](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/interface.ts#L6)_
