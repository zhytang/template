---
order: 4
title: 在 create-react-app 中使用
---

[create-react-app](https://github.com/facebookincubator/create-react-app) 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。

---

## 安装和初始化

在开始之前，你可能需要安装 [yarn](https://github.com/yarnpkg/yarn/)。

```bash
$ yarn create react-app cosmo-demo

# or

$ npx create-react-app cosmo-demo
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。

```bash
$ cd cosmo-demo
$ yarn start
```

此时浏览器会访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。

## 引入 antd

这是 create-react-app 生成的默认目录结构。

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

现在从 yarn 或 npm 安装并引入 antd。

```bash
$ yarn add cosmo
```

修改 `src/App.js`，引入 cosmo 的按钮组件。

```jsx
import React from 'react';
import { Button } from 'cosmo';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

修改 `src/App.css`，在文件顶部引入 `cosmo/dist/cosmo.css`。

```css
@import '~cosmo/dist/cosmo.css';
```

好了，现在你应该能看到页面上已经有了 cosmo 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的[官方文档](https://create-react-app.dev/docs/getting-started)。

我们现在已经把 cosmo 组件成功运行起来了，开始开发你的应用吧！

## 小结

以上是在 create-react-app 中使用 cosmo 的相关实践，你也可以借鉴此文的做法在自己的 webpack 工作流中使用 cosmo
