---
id: "_imagepicker_.imagepickerprops"
title: "ImagePickerProps"
sidebar_label: "ImagePickerProps"
---

## Hierarchy

* **ImagePickerProps**

## Index

### Properties

* [className](_imagepicker_.imagepickerprops.md#optional-classname)
* [count](_imagepicker_.imagepickerprops.md#optional-count)
* [files](_imagepicker_.imagepickerprops.md#files)
* [length](_imagepicker_.imagepickerprops.md#optional-length)
* [limit](_imagepicker_.imagepickerprops.md#optional-limit)
* [mode](_imagepicker_.imagepickerprops.md#optional-mode)
* [multiple](_imagepicker_.imagepickerprops.md#optional-multiple)
* [onChange](_imagepicker_.imagepickerprops.md#onchange)
* [onFail](_imagepicker_.imagepickerprops.md#optional-onfail)
* [onImageClick](_imagepicker_.imagepickerprops.md#optional-onimageclick)
* [showAddBtn](_imagepicker_.imagepickerprops.md#optional-showaddbtn)
* [sizeType](_imagepicker_.imagepickerprops.md#optional-sizetype)
* [sourceType](_imagepicker_.imagepickerprops.md#optional-sourcetype)
* [style](_imagepicker_.imagepickerprops.md#optional-style)

## Properties

### `Optional` className

• **className**? : *string*

*Defined in [src/ImagePicker.tsx:21](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L21)*

___

### `Optional` count

• **count**? : *number*

*Defined in [src/ImagePicker.tsx:34](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L34)*

最多可以选择的图片张数

___

###  files

• **files**: *ImagePickerFile[]*

*Defined in [src/ImagePicker.tsx:24](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L24)*

图片文件数组, 元素为对象, 包含属性 url（必选)

___

### `Optional` length

• **length**? : *number*

*Defined in [src/ImagePicker.tsx:32](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L32)*

单行的图片数量

___

### `Optional` limit

• **limit**? : *number*

*Defined in [src/ImagePicker.tsx:36](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L36)*

图片数据限制

___

### `Optional` mode

• **mode**? : *ImageProps["mode"]*

*Defined in [src/ImagePicker.tsx:26](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L26)*

图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)

___

### `Optional` multiple

• **multiple**? : *boolean*

*Defined in [src/ImagePicker.tsx:30](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L30)*

是否支持多选

___

###  onChange

• **onChange**: *function*

*Defined in [src/ImagePicker.tsx:42](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L42)*

files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引

#### Type declaration:

▸ (`files`: ImagePickerFile[], `operationType`: "add" | "remove", `index?`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`files` | ImagePickerFile[] |
`operationType` | "add" &#124; "remove" |
`index?` | number |

___

### `Optional` onFail

• **onFail**? : *function*

*Defined in [src/ImagePicker.tsx:46](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L46)*

选择失败触发的回调

#### Type declaration:

▸ (`message`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

___

### `Optional` onImageClick

• **onImageClick**? : *function*

*Defined in [src/ImagePicker.tsx:44](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L44)*

点击图片触发的回调

#### Type declaration:

▸ (`index`: number, `file`: Object): *void*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`file` | Object |

___

### `Optional` showAddBtn

• **showAddBtn**? : *boolean*

*Defined in [src/ImagePicker.tsx:28](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L28)*

是否显示添加图片按钮

___

### `Optional` sizeType

• **sizeType**? : *"original" | "compressed"[]*

*Defined in [src/ImagePicker.tsx:38](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L38)*

所选的图片的尺寸

___

### `Optional` sourceType

• **sourceType**? : *"album" | "camera"[]*

*Defined in [src/ImagePicker.tsx:40](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L40)*

选择图片的来源

___

### `Optional` style

• **style**? : *CSSProperties*

*Defined in [src/ImagePicker.tsx:22](https://github.com/tarojsx/ui/blob/v0.11.0/src/ImagePicker.tsx#L22)*
