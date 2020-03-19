<div align="center">
    <h1>Taro3 UI</h1>
</div>
<div align="center">
    <strong>我们重新发明了 taro-ui</strong>
</div>

<br />

<div align="center">
    <a href="https://github.com/tarojsx/ui/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/tarojsx/ui.svg" alt="License" />
    </a>
    <a href="https://www.npmjs.com/package/@tarojsx/ui">
        <img src="https://img.shields.io/npm/v/@tarojsx/ui.svg" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/org/tarojsx">
        <img src="https://img.shields.io/npm/dm/@tarojsx/ui.svg" alt="npm downloads" />
    </a>
    <a href="http://makeapullrequest.com">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
    </a>
</div>

<div align="center">
    <sub>Built with :purple_heart: by
    <a href="https://github.com/cncolder">@Colder</a> and
    <a href="https://github.com/tarojsx/ui/graphs/contributors">
        Contributors
    </a>
    <div align="center">
        :star2: :eyes: :zap: :boom:
    </div>
</div>

<br />

_当前代码提交频繁, 一些特性时有变化._

Taro3 释放了 React 的潜能, 是时候对 [Taro UI](https://github.com/NervJS/taro-ui) 进行改进了.

## 特性

- :electric_plug: 安装方式不变, 使用上尽可能向后兼容.

- :clapper: 复用 taro-ui 样式, 不改变组件外观.

- :octopus: 扩展性更强, 许多原本只能传入字符串的地方, 现在可以传入组件了.

- :mag_right: 完善的 Typescript 类型提示.

- :gift: 开箱即用, 只需引入组件即可, 无需单独引入样式, 支持 Tree shaking.

- :telescope: 未来计划引入更多常用的基础组件.

## 需求

* taro3+

## 安装

`npm i @tarojsx/ui`

## 使用

```tsx
import React from 'react'
import { Text } from '@tarojs/components'
import { List, ListHeader, ListItem } from '@tarojsx/ui'

export default () => {
    return (
        <List>
            <ListHeader title="Taro3 UI" />
            <ListItem title="版本" extra={<Text>0.1.0</Text>}>
        </List>
    )
}
```

## 组件

源于 Taro UI

* [ ] Accordion
* [ ] ActionSheet
  * [ ] 子组件
* [x] ActivityIndicator
* [ ] Article
* [x] Avatar
* [x] Badge
* [x] Button
* [ ] Calendar
  * [ ] Swipe 操作
* [ ] Card
* [ ] Checkbox
* [ ] Countdown
* [ ] Divider
* [ ] Drawer
* [ ] ~~Fab~~ (已合并入 Button)
* [ ] Flex
* [x] FloatLayout
* [ ] Form
* [ ] Grid
* [x] Icon
* [x] ImagePicker
* [ ] Indexes
* [x] Input
* [ ] InputNumber
* [x] List
* [x] ListItem
* [x] Loading
* [ ] Loadmore
* [x] Message
* [ ] Modal
* [ ] NavBar
* [ ] Noticebar
* [ ] Pagination
* [ ] Picker
* [x] Progress
* [ ] Radio
* [ ] Rate
* [ ] SearchBar
* [ ] SegmentedControl
* [ ] Slider
* [x] Steps
* [ ] SwipeAction
* [ ] Swiper
* [ ] Switch
* [x] TabBar
* [ ] Tabs
  * [ ] Swipe 操作
* [ ] TabsPane
  * [ ] Swipe 操作
* [x] Tag
* [x] Textarea
* [ ] Timeline
* [ ] Toast

扩展组件

* [x] CustomTabBar
* [x] ListHeader
* [x] Statistic

## 支持

欢迎各种形式的支持. 至少可以给颗星 :star:

## License

[MIT](LICENSE)
