---
id: '_input_.inputprops'
title: 'InputProps'
sidebar_label: 'InputProps'
---

## Hierarchy

- object

- object

  ↳ **InputProps**

## Index

### Properties

- [className](_input_.inputprops.md#optional-classname)
- [error](_input_.inputprops.md#optional-error)
- [innerRef](_input_.inputprops.md#optional-innerref)
- [maxLength](_input_.inputprops.md#optional-maxlength)
- [name](_input_.inputprops.md#optional-name)
- [onBlur](_input_.inputprops.md#optional-onblur)
- [onChange](_input_.inputprops.md#optional-onchange)
- [onFocus](_input_.inputprops.md#optional-onfocus)
- [readOnly](_input_.inputprops.md#optional-readonly)
- [required](_input_.inputprops.md#optional-required)
- [style](_input_.inputprops.md#optional-style)
- [type](_input_.inputprops.md#optional-type)

### Methods

- [onClick](_input_.inputprops.md#optional-onclick)
- [onErrorClick](_input_.inputprops.md#optional-onerrorclick)

## Properties

### `Optional` className

• **className**? : _string_

_Defined in [src/Input.tsx:31](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L31)_

---

### `Optional` error

• **error**? : _any_

_Defined in [src/Input.tsx:41](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L41)_

---

### `Optional` innerRef

• **innerRef**? : _any_

_Defined in [src/Input.tsx:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L30)_

---

### `Optional` maxLength

• **maxLength**? : _number_

_Defined in [src/Input.tsx:39](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L39)_

最大输入长度，设置为 -1 的时候不限制最大长度

---

### `Optional` name

• **name**? : _string_

_Defined in [src/Input.tsx:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L34)_

---

### `Optional` onBlur

• **onBlur**? : _\_InputProps["onBlur"]_

_Defined in [src/Input.tsx:44](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L44)_

---

### `Optional` onChange

• **onChange**? : _\_InputProps["onInput"]_

_Defined in [src/Input.tsx:42](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L42)_

---

### `Optional` onFocus

• **onFocus**? : _\_InputProps["onFocus"]_

_Defined in [src/Input.tsx:43](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L43)_

---

### `Optional` readOnly

• **readOnly**? : _boolean_

_Defined in [src/Input.tsx:40](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L40)_

---

### `Optional` required

• **required**? : _boolean_

_Defined in [src/Input.tsx:35](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L35)_

---

### `Optional` style

• **style**? : _CSSProperties_

_Defined in [src/Input.tsx:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L32)_

---

### `Optional` type

• **type**? : _\_InputProps["type"] | "phone" | "password"_

_Defined in [src/Input.tsx:33](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L33)_

## Methods

### `Optional` onClick

▸ **onClick**(`event`: ITouchEvent): _any_

_Defined in [src/Input.tsx:45](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L45)_

**Parameters:**

| Name    | Type        |
| ------- | ----------- |
| `event` | ITouchEvent |

**Returns:** _any_

---

### `Optional` onErrorClick

▸ **onErrorClick**(`error`: any): _void_

_Defined in [src/Input.tsx:46](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L46)_

**Parameters:**

| Name    | Type |
| ------- | ---- |
| `error` | any  |

**Returns:** _void_
