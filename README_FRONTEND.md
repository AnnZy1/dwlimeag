# 外卖管理系统 - 前端项目

## 项目简介

基于 Vue 3 + Vite + Element Plus 开发的外卖管理系统 Web 管理端。

## 技术栈

- **框架**: Vue 3.4.x (Composition API + script setup)
- **构建工具**: Vite 5.0.x
- **UI 组件库**: Element Plus 2.4.x
- **路由**: Vue Router 4.2.x
- **状态管理**: Pinia 2.1.x
- **HTTP 客户端**: Axios 1.6.x
- **图表库**: ECharts 5.4.x
- **工具库**: Day.js, FileSaver, XLSX

## 项目结构

```
src/
├── api/                    # API 接口封装
│   ├── auth.js            # 认证相关
│   ├── employee.js        # 员工管理
│   ├── role.js            # 角色管理
│   ├── branch.js          # 分店管理
│   ├── category.js        # 分类管理
│   ├── dish.js            # 菜品管理
│   ├── setmeal.js         # 套餐管理
│   ├── order.js           # 订单管理
│   ├── stat.js            # 数据统计
│   ├── common.js          # 通用接口
│   └── log.js             # 日志管理
├── assets/                # 静态资源
│   └── styles/           # 样式文件
├── components/           # 公共组件
│   ├── Layout/           # 布局组件
│   └── Upload/           # 上传组件
├── router/               # 路由配置
├── stores/               # Pinia 状态管理
├── utils/                # 工具函数
├── views/                # 页面组件
│   ├── Login/           # 登录页
│   ├── Dashboard/       # 首页
│   ├── Employee/        # 员工管理
│   ├── Role/            # 角色管理
│   ├── Branch/          # 分店管理
│   ├── Category/        # 分类管理
│   ├── Dish/            # 菜品管理
│   ├── Setmeal/         # 套餐管理
│   ├── Order/            # 订单管理
│   └── Stat/             # 数据统计
├── App.vue               # 根组件
└── main.js               # 入口文件
```

## 功能模块

### 1. 登录认证
- 用户登录
- JWT Token 认证
- 自动登录状态保持
- 退出登录

### 2. 员工管理
- 员工列表查询（分页、搜索、筛选）
- 新增/编辑员工
- 删除员工
- 密码重置
- 批量操作（锁定、启用、删除）

### 3. 角色管理
- 角色列表查询
- 新增/编辑角色
- 删除角色
- 权限分配

### 4. 分店管理
- 分店列表查询
- 新增/编辑分店
- 删除分店

### 5. 分类管理
- 分类列表查询
- 新增/编辑分类
- 删除分类
- 批量操作

### 6. 菜品管理
- 菜品列表查询
- 新增/编辑菜品
- 删除菜品
- 口味管理
- 图片上传
- Excel 导入/导出
- 批量上下架

### 7. 套餐管理
- 套餐列表查询
- 新增/编辑套餐
- 删除套餐
- 关联菜品管理
- Excel 导出
- 批量上下架

### 8. 订单管理
- 订单列表查询（多条件筛选）
- 订单详情查看
- 订单状态管理（接单、取消）
- Excel 导出

### 9. 数据统计
- 营业数据统计（今日/本周/本月/自定义）
- 销量排行（菜品/套餐）
- 订单分析（图表展示）

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发环境运行

```bash
npm run dev
# 或
yite dev
```

访问地址: http://localhost:3000

### 生产环境构建

```bash
npm run build
# 或
yarn build
```

构建产物在 `dist` 目录。

### 预览构建结果

```bash
npm run preview
# 或
yarn preview
```

## 环境变量配置

创建 `.env` 文件（开发环境）或 `.env.production` 文件（生产环境）：

```env
# API 基础地址
VITE_API_BASE_URL=http://localhost:8080/api

# 应用标题
VITE_APP_TITLE=外卖管理系统
```

## 默认账号

- 用户名: `admin`
- 密码: `123456`

## 主要特性

### 1. 响应式设计
- 适配不同屏幕尺寸
- 移动端友好

### 2. 权限控制
- 基于 JWT Token 的认证
- 路由守卫
- 按钮级权限控制（预留）

### 3. 数据交互
- 统一的 API 封装
- 请求/响应拦截
- 错误处理
- 加载状态提示

### 4. 用户体验
- 页面加载进度条
- 操作反馈提示
- 表单验证
- 数据格式化

### 5. 功能完善
- Excel 导入/导出
- 图片上传（OSS）
- 数据统计图表
- 批量操作

## 开发规范

### 代码风格
- 使用 ESLint + Prettier 进行代码格式化
- 遵循 Vue 3 官方风格指南

### 组件规范
- 使用 Composition API + script setup
- 组件命名采用 PascalCase
- Props 和 Emits 使用 TypeScript 类型定义（可选）

### API 调用
- 统一使用 `@/api` 目录下的接口封装
- 错误处理在 `request.js` 中统一处理

### 状态管理
- 使用 Pinia 进行状态管理
- Store 按模块划分

## 注意事项

1. **API 地址配置**: 确保后端服务已启动，且 API 地址配置正确
2. **跨域问题**: 开发环境已配置代理，生产环境需要配置 CORS
3. **Token 存储**: Token 存储在 localStorage，注意安全性
4. **图片上传**: 需要配置阿里云 OSS 相关环境变量

## 浏览器支持

- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 常见问题

### 1. 登录后跳转失败
检查路由守卫配置和 Token 存储是否正确。

### 2. API 请求失败
检查后端服务是否启动，API 地址是否正确。

### 3. 图片上传失败
检查 OSS 配置和网络连接。

## 后续优化建议

1. 添加单元测试
2. 完善权限控制（按钮级权限）
3. 优化打包体积
4. 添加 PWA 支持
5. 国际化支持
6. 暗色主题

## 许可证

MIT

