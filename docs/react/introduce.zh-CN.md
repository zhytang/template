---
order: 2
title: 快速上手
---

## 使用组件

直接用下面的代码替换 `index.js` 的内容，用 React 的方式直接使用 cosmo 组件。

```jsx
import React, { useState } from 'react';
import { render } from 'react-dom';
import { ConfigProvider, DatePicker, message } from 'cosmo';
// 由于 cosmo 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'cosmo/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'cosmo/dist/cosmo.css';
import './index.css';

moment.locale('zh-cn');

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
    </ConfigProvider>
  );
};

render(<App />, document.getElementById('root'));
```

## 探索更多组件用法

你可以在组件页面的左侧菜单查看组件列表，比如 [Alert](/components/alert) 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。

然后依照演示代码的写法，在之前的 codesandbox 里修改 `index.js`，首先在 `import` 内引入 Alert 组件：

```diff
- import { ConfigProvider, DatePicker, message } from 'cosmo';
+ import { ConfigProvider, DatePicker, message, Alert } from 'cosmo';
```

然后在 `render` 内添加相应的 jsx 代码：

```diff
  <DatePicker onChange={value => this.handleChange(value)} />
  <div style={{ marginTop: 16 }}>
-   当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
+   <Alert message="当前日期" description={date ? date.format('YYYY年MM月DD日') : '未选择'} />
  </div>
```

选择一个日期，在右侧预览区就可以看到如图的效果。

<img width="420" src="https://gw.alipayobjects.com/zos/antfincdn/ZosQjL9pqe/e6179c89-21a9-44c9-aea4-3cc04af7ef25.png" alt="codesandbox screenshot" />

好的，现在你已经会使用基本的 cosmo 组件了，你可以在这个例子中继续探索其他组件的用法。如果你遇到组件的 bug，也推荐建一个可重现的 codesandbox 来报告 bug。

## 按需加载

`cosmo` 默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { Button } from 'cosmo'` 就会有按需加载的效果。

如果你在开发环境的控制台看到下面的提示，那么你可能还在使用 `webpack@1.x` 或者 tree shaking 失效，请升级或检查相关配置。

```
You are using a whole package of cosmo, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.
```

![控制台警告](https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png)
