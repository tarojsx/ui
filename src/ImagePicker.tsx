import React, { useMemo, useCallback } from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View, Image } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'

import { uuid } from './utils'
import '../style/ImagePicker.scss'

interface ImagePickerFile {
    url: string
    file?: {
        path: string
        size: number
    }
}

type MatrixFile = Partial<ImagePickerFile> & { type?: 'blank' | 'btn'; uuid?: string }

export interface ImagePickerProps {
    className?: string
    style?: React.CSSProperties
    /** 图片文件数组, 元素为对象, 包含属性 url（必选) */
    files: ImagePickerFile[]
    /** 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) */
    mode?: ImageProps['mode']
    /** 是否显示添加图片按钮 */
    showAddBtn?: boolean
    /** 是否支持多选 */
    multiple?: boolean
    /** 单行的图片数量 */
    length?: number
    /** 最多可以选择的图片张数 */
    count?: number
    /** 图片数据限制 */
    limit?: number
    /** 所选的图片的尺寸 */
    sizeType?: ('original' | 'compressed')[]
    /** 选择图片的来源 */
    sourceType?: ('album' | 'camera')[]
    /** files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 */
    onChange: (files: ImagePickerFile[], operationType: 'add' | 'remove', index?: number) => void
    /** 点击图片触发的回调 */
    onImageClick?: (index: number, file: Object) => void
    /** 选择失败触发的回调 */
    onFail?: (message: string) => void
}

export const ImagePicker: React.FC<ImagePickerProps> = (props) => {
    const {
        className,
        style = {},
        files = [],
        mode = 'aspectFill',
        showAddBtn = true,
        multiple = false,
        length = 4,
        count,
        limit = Number.MAX_SAFE_INTEGER,
        sizeType,
        sourceType,
        onChange,
        onImageClick,
        onFail,
    } = props

    const matrix = useMemo(() => {
        const matrix: MatrixFile[][] = []
        const showAdd = showAddBtn && files.length < limit
        const col = length <= 0 ? 1 : length
        const row = Math.ceil((showAdd ? files.length + 1 : files.length) / col)
        for (let i = 0; i < row; i++) {
            if (i === row - 1) {
                // 最后一行数据加上添加按钮
                const lastArr: MatrixFile[] = files.slice(i * col)
                if (lastArr.length < col) {
                    if (showAdd) {
                        lastArr.push({ type: 'btn', uuid: uuid() })
                    }
                    // 填补剩下的空列
                    for (let j = lastArr.length; j < col; j++) {
                        lastArr.push({ type: 'blank', uuid: uuid() })
                    }
                }
                matrix.push(lastArr)
            } else {
                matrix.push(files.slice(i * col, (i + 1) * col))
            }
        }
        return matrix
    }, [files, length, limit, showAddBtn])

    const chooseFile = useCallback(async () => {
        const filePathName = process.env.TARO_ENV === 'alipay' ? 'apFilePaths' : 'tempFiles'
        const params = {} as Taro.chooseImage.Option
        if (multiple) {
            params.count = 99
        }
        if (count) {
            params.count = count
        }
        if (limit) {
            params.count = limit - files.length
        }
        if (sizeType) {
            params.sizeType = sizeType
        }
        if (sourceType) {
            params.sourceType = sourceType
        }

        try {
            const res = await Taro.chooseImage(params)
            const targetFiles = res.tempFilePaths.map((path, index) => ({
                url: path,
                file: res[filePathName][index],
            }))
            const newFiles = files.concat(targetFiles)
            onChange(newFiles, 'add')
        } catch (err) {
            onFail && onFail(err)
        }
    }, [files, multiple, count, limit, sizeType, sourceType])

    const handleImageClick = useCallback(
        (index: number) => {
            onImageClick && onImageClick(index, files[index])
        },
        [onImageClick, files]
    )

    const handleImageRemove = useCallback(
        (index: number) => {
            if (process.env.TARO_ENV === 'h5') {
                window.URL.revokeObjectURL(files[index].url)
            }
            const newFiles = files.filter((_, i) => i !== index)
            onChange && onChange(newFiles, 'remove', index)
        },
        [onChange, files]
    )

    return (
        <View className={classNames('at-image-picker', className)} style={style}>
            {matrix.map((row, i) => (
                <View className="at-image-picker__flex-box" key={i + 1}>
                    {row.map((item, j) =>
                        item.url ? (
                            <View className="at-image-picker__flex-item" key={i * length + j}>
                                <View className="at-image-picker__item">
                                    <View
                                        className="at-image-picker__remove-btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleImageRemove(i * length + j)
                                        }}
                                    ></View>
                                    <Image
                                        className="at-image-picker__preview-img"
                                        mode={mode}
                                        src={item.url}
                                        onClick={() => handleImageClick(i * length + j)}
                                    />
                                </View>
                            </View>
                        ) : (
                            <View className="at-image-picker__flex-item" key={i * length + j}>
                                {item.type === 'btn' && (
                                    <View
                                        className="at-image-picker__item at-image-picker__choose-btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            chooseFile()
                                        }}
                                    >
                                        <View className="add-bar"></View>
                                        <View className="add-bar"></View>
                                    </View>
                                )}
                            </View>
                        )
                    )}
                </View>
            ))}
        </View>
    )
}
