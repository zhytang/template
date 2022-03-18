---
order: 1 # 渲染顺序
title:
  zh-CN: 新增和删除 # 中文说明
  en-US: Basic # 英文说明
---

## zh-CN

回调的用法。

## en-US

The most basic usage.

```jsx
// eslint-disable-next-line import/no-unresolved
import { Todo } from 'zhytang';
// eslint-disable-next-line import/no-unresolved
import { TodoModel } from 'zhytang/lib/todo';

const Demo: React.FC = () => {
  const [todos, setTodos] = React.useState([
    {
      text: '基础组件Demo',
    },
    {
      text: '演示组件Demo',
    },
  ]);

  const append = (model: TodoModel) => {
    setTodos([...todos, model]);
  };

  const complete = (index: number, model: TodoModel) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return <Todo todos={todos} onAppend={append} onComplete={complete} />;
};

ReactDOM.render(<Demo />, mountNode);
```

<style>
.code-box-demo .ant-switch {
  margin-bottom: 8px;
}
</style>
