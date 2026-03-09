# 优化布局与项目展示 Spec

## Why
当前简历页面的项目展示区域占用空间较大，且项目数量较少。为了提升信息密度，支持展示更多项目，并增强项目的可跳转性（如 GitHub 链接、在线演示等），需要对布局进行优化。

## What Changes
- **数据层**: 在 `App.vue` 中增加更多项目数据，并为每个项目补充 GitHub 链接和在线演示链接。
- **UI 布局**:
    - 将项目卡片布局从双列 (`md:grid-cols-2`) 优化为更紧凑的样式，视情况调整为三列或更灵活的网格。
    - 压缩项目描述（Highlights）的展示空间，采用更精简的字号或限制显示行数。
    - 统一技术栈标签（Tech Stack）的样式，使其更加整齐。
- **交互功能**:
    - 在项目卡片中添加明显的跳转图标（GitHub、External Link）。
    - 增强卡片的悬停效果，提升交互感。

## Impact
- 影响文件: [App.vue](file:///d:/Desktop/project/resume/src/App.vue)
- 页面视觉: 项目区域将更加紧凑，能够容纳 4-6 个项目而不显拥挤。

## ADDED Requirements
### Requirement: 紧凑型项目卡片
系统应提供一种更紧凑的项目展示方式，确保在不滚动太多的情况下展示更多内容。

#### Scenario: 响应式网格
- **WHEN** 屏幕宽度为桌面端时
- **THEN** 项目以三列网格显示；移动端保持单列。

### Requirement: 多维度链接跳转
每个项目卡片应支持跳转到 GitHub 仓库或在线演示地址。

#### Scenario: 点击跳转
- **WHEN** 用户点击 GitHub 图标
- **THEN** 在新标签页打开对应的仓库地址。

## MODIFIED Requirements
### Requirement: 项目描述展示
原有的项目亮点（Highlights）列表将被简化或采用更紧凑的排版，以节省空间。
