---
order: 6
title: Change Log
toc: false
timeline: true
---

`antd` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breaking change and new features.

---

## 0.1.0

`2022-03-17`

- Todo 新增 todo 组件

## 0.0.2

`2022-03-15`

- 🐞 Fix less compile error related to custom status. [#34350](https://github.com/ant-design/ant-design/pull/34350)
  - 🐞 Fix error `ReferenceError: colorPalette is not defined` when customize theme.
  - 🐞 Fix error `Error: Invalid class or id selector syntax` when import `antd/dist/antd.css`.
- 🐞 Fix Input.Passowrd icon color in site. [#34354](https://github.com/ant-design/ant-design/pull/34354)
- 🐞 Fix ConfigProvider `csp` sometime not effect on Icon. [#34356](https://github.com/ant-design/ant-design/pull/34356)
