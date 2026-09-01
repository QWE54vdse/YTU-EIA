# EIA 协会网站

基于 React + TypeScript + Vite 的协会官方网站（Ant Design + 3D 动效）。

## 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **UI 组件**: Ant Design 6
- **路由**: react-router-dom（HashRouter，适合静态托管）
- **动效**: GSAP / Three.js / OGL
- **后端**: `server/`（Node）与 `app/`（Bun/Elysia，独立仓库）

## 本地开发

```bash
npm install
npm run dev        # 启动前端开发服务器 (http://localhost:5173)
```

前端通过 Vite 代理把 `/api` 转发到 `http://localhost:8080`，如需完整功能请同时启动后端：

```bash
npm run dev:server   # 启动 server/ 后端
```

## 构建与预览

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建产物
```

## 部署（GitHub Pages）

项目已配置 GitHub Actions 自动部署：**推送 `master` 分支后，工作流会自动构建并把 `EIA/dist` 发布到 GitHub Pages**。

- 在线地址: https://QWE54vdse.github.io/YTU-EIA/
- 手动触发: 仓库 Actions 页面 → "Deploy to GitHub Pages" → Run workflow
- `vite.config.ts` 中 `base: '/YTU-EIA/'` 与仓库名一致，不要随意修改

> ⚠️ 注意：GitHub Pages 是纯静态托管，没有后端服务。登录、注册、个人资料、资料下载等依赖 `/api` 的功能在线版不可用；静态展示部分（首页、部门介绍、新闻等）正常。
