---
order: 0 # 渲染顺序
title:
  zh-CN: 基本 # 中文说明
  en-US: Basic # 英文说明
---

## zh-CN

最简单的用法。

## en-US

The most basic usage.

```jsx
import { Todo, TodoModel } from 'zhytang';

const todos: TodoModel[] = [
  {
    text: '基础组件Demo',
  },
  {
    text: '演示组件Demo',
  },
];

ReactDOM.render(<Todo todos={todos} />, mountNode);
```

<style>
.code-box-demo .ant-switch {
  margin-bottom: 8px;
}
</style>