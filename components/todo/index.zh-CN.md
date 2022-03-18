---
category: 组件 # 顶部导航类别
subtitle: 待办 # document.title和菜单子标题
title: Todo # document.title和菜单标题
---

代办列表。

## 何时使用

- 需要需要待办列表时；
- 只负责展现，逻辑需要自己实现。

## API

| 参数       | 说明         | 类型                     | 默认值    |
| ---------- | ------------ | ------------------------ | --------- |
| todos      | 代办列表     | TodoModel                | []        |
| onAppend   | 添加代办回调 | TodoAppendEventHandler   | undefined |
| onComplete | 添加代办回调 | TodoCompleteEventHandler | undefined |
