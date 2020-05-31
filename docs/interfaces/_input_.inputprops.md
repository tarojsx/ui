---
id: "_input_.inputprops"
title: "InputProps"
sidebar_label: "InputProps"
---

## Hierarchy

* object

* object

  ↳ **InputProps**

## Index

### Properties

* [className](_input_.inputprops.md#optional-classname)
* [error](_input_.inputprops.md#optional-error)
* [innerRef](_input_.inputprops.md#optional-innerref)
* [maxLength](_input_.inputprops.md#optional-maxlength)
* [name](_input_.inputprops.md#optional-name)
* [onBlur](_input_.inputprops.md#optional-onblur)
* [onChange](_input_.inputprops.md#optional-onchange)
* [onFocus](_input_.inputprops.md#optional-onfocus)
* [readOnly](_input_.inputprops.md#optional-readonly)
* [required](_input_.inputprops.md#optional-required)
* [style](_input_.inputprops.md#optional-style)
* [type](_input_.inputprops.md#optional-type)

### Methods

* [onClick](_input_.inputprops.md#optional-onclick)
* [onErrorClick](_input_.inputprops.md#optional-onerrorclick)

## Properties

### `Optional` className

• **className**? : *string*

*Defined in [src/Input.tsx:31](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L31)*

___

### `Optional` error

• **error**? : *any*

*Defined in [src/Input.tsx:41](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L41)*

___

### `Optional` innerRef

• **innerRef**? : *any*

*Defined in [src/Input.tsx:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L30)*

___

### `Optional` maxLength

• **maxLength**? : *number*

*Defined in [src/Input.tsx:39](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L39)*

最大输入长度，设置为 -1 的时候不限制最大长度

___

### `Optional` name

• **name**? : *string*

*Defined in [src/Input.tsx:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L34)*

___

### `Optional` onBlur

• **onBlur**? : *_InputProps["onBlur"]*

*Defined in [src/Input.tsx:44](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L44)*

___

### `Optional` onChange

• **onChange**? : *_InputProps["onInput"]*

*Defined in [src/Input.tsx:42](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L42)*

___

### `Optional` onFocus

• **onFocus**? : *_InputProps["onFocus"]*

*Defined in [src/Input.tsx:43](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L43)*

___

### `Optional` readOnly

• **readOnly**? : *boolean*

*Defined in [src/Input.tsx:40](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L40)*

___

### `Optional` required

• **required**? : *boolean*

*Defined in [src/Input.tsx:35](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L35)*

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/Input.tsx:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L32)*

___

### `Optional` type

• **type**? : *_InputProps["type"] | "phone" | "password"*

*Defined in [src/Input.tsx:33](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L33)*

## Methods

### `Optional` onClick

▸ **onClick**(`event`: ITouchEvent): *any*

*Defined in [src/Input.tsx:45](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | ITouchEvent |

**Returns:** *any*

___

### `Optional` onErrorClick

▸ **onErrorClick**(`error`: any): *void*

*Defined in [src/Input.tsx:46](https://github.com/tarojsx/ui/blob/v0.11.0/src/Input.tsx#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |

**Returns:** *void*
