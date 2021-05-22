---
id: '_calendar_common_helper_'
title: 'Calendar/common/helper'
sidebar_label: 'Calendar/common/helper'
---

## Index

### Functions

- [generateCalendarGroup](_calendar_common_helper_.md#generatecalendargroup)
- [getGenerateDate](_calendar_common_helper_.md#getgeneratedate)

## Functions

### generateCalendarGroup

▸ **generateCalendarGroup**(`options`: GroupOptions): _function_

_Defined in [src/Calendar/common/helper.ts:27](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/common/helper.ts#L27)_

**Parameters:**

| Name      | Type         |
| --------- | ------------ |
| `options` | GroupOptions |

**Returns:** _function_

▸ (`generateDate`: number, `selectedDate`: SelectedDate, `isShowStatus?`: boolean): _Calendar.ListInfo‹Item›_

**Parameters:**

| Name            | Type         |
| --------------- | ------------ |
| `generateDate`  | number       |
| `selectedDate`  | SelectedDate |
| `isShowStatus?` | boolean      |

---

### getGenerateDate

▸ **getGenerateDate**(`date`: Calendar.DateArg | undefined): _Dayjs_

_Defined in [src/Calendar/common/helper.ts:112](https://github.com/tarojsx/ui/blob/v0.11.0/src/Calendar/common/helper.ts#L112)_

**Parameters:**

| Name   | Type                              |
| ------ | --------------------------------- |
| `date` | Calendar.DateArg &#124; undefined |

**Returns:** _Dayjs_
