# Tasks

- [x] Task 1: 准备项目数据
  - [x] SubTask 1.1: 在 `App.vue` 的 `projects` 数组中增加 2-3 个模拟或真实项目
  - [x] SubTask 1.2: 为每个项目添加 `github` 和 `link` (demo) 字段

- [x] Task 2: 优化项目卡片组件布局
  - [x] SubTask 2.1: 修改项目区域的网格配置，从 `md:grid-cols-2` 调整为 `md:grid-cols-2 lg:grid-cols-3`
  - [x] SubTask 2.2: 压缩卡片内边距和字号，使整体更紧凑
  - [x] SubTask 2.3: 优化 `highlights` 的显示逻辑，减小字号并使用更精简的列表样式

- [x] Task 3: 实现跳转与交互功能
  - [x] SubTask 3.1: 在卡片右上角或底部添加 GitHub 和 外部链接图标
  - [x] SubTask 3.2: 完善 `a` 标签的跳转逻辑，确保 `target="_blank"`
  - [x] SubTask 3.3: 添加 Hover 阴影加深或缩放效果

- [x] Task 4: 整体视觉对齐与微调
  - [x] SubTask 4.1: 检查技术栈标签的颜色和间距，确保在紧凑布局下依然清晰
  - [x] SubTask 4.2: 确保在不同屏幕尺寸下的响应式表现良好

# Task Dependencies
- Task 2 依赖于 Task 1 的数据结构更新
- Task 3 在 Task 2 的布局基础上进行功能嵌入
