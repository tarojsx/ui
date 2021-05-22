---
id: '_imagepicker_.imagepickerprops'
title: 'ImagePickerProps'
sidebar_label: 'ImagePickerProps'
---

## Hierarchy

- **ImagePickerProps**

## Index

### Properties

- [className](_imagepicker_.imagepickerprops.md#optional-classname)
- [count](_imagepicker_.imagepickerprops.md#optional-count)
- [files](_imagepicker_.imagepickerprops.md#files)
- [length](_imagepicker_.imagepickerprops.md#optional-length)
- [limit](_imagepicker_.imagepickerprops.md#optional-limit)
- [mode](_imagepicker_.imagepickerprops.md#optional-mode)
- [multiple](_imagepicker_.imagepickerprops.md#optional-multiple)
- [onChange](_imagepicker_.imagepickerprops.md#onchange)
- [onFail](_imagepicker_.imagepickerprops.md#optional-onfail)
- [onImageClick](_imagepicker_.imagepickerprops.md#optional-onimageclick)
- [showAddBtn](_imagepicker_.imagepickerprops.md#optional-showaddbtn)
- [sizeType](_imagepicker_.imagepickerprops.md#optional-sizetype)
- [sourceType](_imagepicker_.imagepickerprops.md#optional-sourcetype)
- [style](_imagepicker_.imagepickerprops.md#optional-style)

## Properties

### `Optional` className

• **className**? : _string_

_Defined in [src/ImagePicker.tsx:21](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L21)_

---

### `Optional` count

• **count**? : _number_

_Defined in [src/ImagePicker.tsx:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L34)_

最多可以选择的图片张数

---

### files

• **files**: _ImagePickerFile[]_

_Defined in [src/ImagePicker.tsx:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L24)_

图片文件数组, 元素为对象, 包含属性 url（必选)

---

### `Optional` length

• **length**? : _number_

_Defined in [src/ImagePicker.tsx:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L32)_

单行的图片数量

---

### `Optional` limit

• **limit**? : _number_

_Defined in [src/ImagePicker.tsx:36](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L36)_

图片数据限制

---

### `Optional` mode

• **mode**? : _ImageProps["mode"]_

_Defined in [src/ImagePicker.tsx:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L26)_

图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

---

### `Optional` multiple

• **multiple**? : _boolean_

_Defined in [src/ImagePicker.tsx:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L30)_

是否支持多选

---

### onChange

• **onChange**: _function_

_Defined in [src/ImagePicker.tsx:42](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L42)_

files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引

#### Type declaration:

▸ (`files`: ImagePickerFile[], `operationType`: "add" | "remove", `index?`: number): _void_

**Parameters:**

| Name            | Type                  |
| --------------- | --------------------- |
| `files`         | ImagePickerFile[]     |
| `operationType` | "add" &#124; "remove" |
| `index?`        | number                |

---

### `Optional` onFail

• **onFail**? : _function_

_Defined in [src/ImagePicker.tsx:46](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L46)_

选择失败触发的回调

#### Type declaration:

▸ (`message`: string): _void_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| `message` | string |

---

### `Optional` onImageClick

• **onImageClick**? : _function_

_Defined in [src/ImagePicker.tsx:44](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L44)_

点击图片触发的回调

#### Type declaration:

▸ (`index`: number, `file`: Object): _void_

**Parameters:**

| Name    | Type   |
| ------- | ------ |
| `index` | number |
| `file`  | Object |

---

### `Optional` showAddBtn

• **showAddBtn**? : _boolean_

_Defined in [src/ImagePicker.tsx:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L28)_

是否显示添加图片按钮

---

### `Optional` sizeType

• **sizeType**? : _"original" | "compressed"[]_

_Defined in [src/ImagePicker.tsx:38](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L38)_

所选的图片的尺寸

---

### `Optional` sourceType

• **sourceType**? : _"album" | "camera"[]_

_Defined in [src/ImagePicker.tsx:40](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L40)_

选择图片的来源

---

### `Optional` style

• **style**? : _CSSProperties_

_Defined in [src/ImagePicker.tsx:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L22)_
