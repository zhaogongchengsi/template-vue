# Vue 3 现代化开发模板

一个现代化的 Vue 3 + TypeScript + Vite 开发模板，集成了当前最佳实践和常用工具。

## ✨ 特性

- 🚀 **Vue 3** - 使用最新的 Vue 3 Composition API
- 🔥 **TypeScript** - 完整的类型支持
- ⚡ **Vite** - 极速的开发服务器和构建工具
- 📦 **自动导入** - 组件和 composables 自动导入
- 🎨 **UnoCSS** - 原子化 CSS 引擎
- 🔌 **Vue Router** - 基于文件的路由系统
- 🌙 **深色模式** - 内置深色模式切换
- 📱 **响应式设计** - 移动端友好
- 🔧 **ESLint** - 代码质量检查
- 🎯 **别名配置** - 简化导入路径

## 🛠️ 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **路由**: Vue Router (基于文件的路由)
- **状态管理**: VueUse
- **样式**: UnoCSS
- **代码规范**: ESLint (@antfu/eslint-config)
- **包管理**: pnpm

## 📦 依赖包

### 核心依赖
- `vue` - Vue 3 框架
- `vue-router` - Vue 路由
- `@vueuse/core` - Vue Composition API 工具集
- `@unocss/reset` - CSS 重置样式

### 开发依赖
- `vite` - 构建工具
- `@vitejs/plugin-vue` - Vue 3 Vite 插件
- `typescript` - TypeScript 支持
- `unocss` - 原子化 CSS 引擎
- `unplugin-auto-import` - 自动导入插件
- `unplugin-vue-components` - 组件自动导入
- `unplugin-vue-router` - 基于文件的路由
- `eslint` - 代码检查工具

## 🚀 快速开始

### 使用模板创建项目

```bash
# 使用 degit 克隆模板
npx degit zhaogongchengsi/template-vue my-vue-app

# 进入项目目录
cd my-vue-app

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 手动安装 pnpm

如果你还没有安装 pnpm：

```bash
npm install -g pnpm
```

## 📝 可用脚本

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 运行 ESLint 检查
pnpm lint

# 修复 ESLint 错误
pnpm lint:fix
```

## 📁 项目结构

```
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 组件目录
│   ├── composables/     # 可复用的组合函数
│   │   └── dark.ts      # 深色模式切换
│   ├── pages/           # 页面目录 (自动路由)
│   │   └── index.vue    # 首页
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── style.css        # 全局样式
├── public/              # 公共资源
├── auto-imports.d.ts    # 自动导入类型声明
├── components.d.ts      # 组件类型声明
├── typed-router.d.ts    # 路由类型声明
├── vite.config.ts       # Vite 配置
├── uno.config.ts        # UnoCSS 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 包管理文件
```

## 🔧 配置说明

### 路径别名

项目配置了路径别名 `~/` 指向 `src/` 目录：

```typescript
// 使用别名导入
import { something } from '~/utils/helper'
```

### 自动导入

- **Vue API**: `ref`, `computed`, `watch` 等自动导入
- **Vue Router**: `useRouter`, `useRoute` 等自动导入
- **VueUse**: `@vueuse/core` 中的所有 composables 自动导入
- **组件**: `components/` 目录下的组件自动导入

### 基于文件的路由

在 `src/pages/` 目录下创建 `.vue` 文件会自动生成对应的路由：

```
src/pages/
├── index.vue          # → /
├── about.vue          # → /about
└── user/
    ├── index.vue      # → /user
    └── profile.vue    # → /user/profile
```

### UnoCSS 配置

项目使用 UnoCSS 作为 CSS 引擎，支持：

- Tailwind CSS 兼容的原子化类名
- 属性化模式
- 图标支持
- Web 字体支持

## 🌙 深色模式

项目内置了深色模式支持，使用 VueUse 的 `useDark` 实现：

```vue
<script setup>
import { isDark, toggleDark } from '~/composables/dark'
</script>

<template>
  <button @click="toggleDark()">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>
```

## 📖 学习资源

- [Vue 3 官方文档](https://vuejs.org/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [UnoCSS 官方文档](https://unocss.dev/)
- [VueUse 官方文档](https://vueuse.org/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT](LICENSE)
