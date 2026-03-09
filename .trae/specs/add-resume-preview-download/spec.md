# 添加简历预览和下载功能 Spec

## Why
用户需要一种简便的方式来预览和下载原始的 `resume.html` 文件。

## What Changes
- 将 `resume.html` 移动到 `public/` 目录，使其可以被 Vite 静态服务。
- 在 Vue 3 应用的头部添加“预览原件”和“下载原件”按钮。
- 实现下载逻辑，使用浏览器内置的下载功能。

## Impact
- 影响 `App.vue` 的 UI。
- 影响项目文件结构（`resume.html` 位置）。

## ADDED Requirements
### Requirement: 简历预览功能
系统应提供一个按钮，点击后在浏览器新标签页中打开 `resume.html`。

#### Scenario: 预览成功
- **WHEN** 用户点击“预览原件”按钮
- **THEN** 浏览器在新标签页打开 `http://localhost:5173/resume.html`

### Requirement: 简历下载功能
系统应提供一个按钮，点击后触发浏览器下载 `resume.html`。

#### Scenario: 下载成功
- **WHEN** 用户点击“下载原件”按钮
- **THEN** 浏览器开始下载 `resume.html` 文件
