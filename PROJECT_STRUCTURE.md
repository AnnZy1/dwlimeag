# 外卖管理系统 - 项目目录结构

## 一、后端项目结构（Spring Boot）

```
deliver-management-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── delivery/
│   │   │           └── management/
│   │   │               ├── DeliverManagementApplication.java    # 启动类
│   │   │               ├── config/                             # 配置类
│   │   │               │   ├── WebMvcConfig.java               # Web MVC 配置
│   │   │               │   ├── MyBatisPlusConfig.java          # MyBatis-Plus 配置
│   │   │               │   ├── SecurityConfig.java             # Spring Security 配置
│   │   │               │   ├── JwtConfig.java                 # JWT 配置
│   │   │               │   ├── Knife4jConfig.java             # Swagger 配置
│   │   │               │   ├── CorsConfig.java                 # 跨域配置
│   │   │               │   └── OssConfig.java                  # 阿里云 OSS 配置
│   │   │               ├── common/                             # 公共模块
│   │   │               │   ├── constant/                      # 常量类
│   │   │               │   │   ├── StatusConstant.java        # 状态常量
│   │   │               │   │   └── MessageConstant.java       # 消息常量
│   │   │               │   ├── context/                       # 上下文
│   │   │               │   │   └── BaseContext.java           # 线程本地存储（当前登录用户）
│   │   │               │   ├── exception/                     # 异常处理
│   │   │               │   │   ├── GlobalExceptionHandler.java # 全局异常处理器
│   │   │               │   │   └── BusinessException.java     # 业务异常
│   │   │               │   ├── properties/                    # 配置属性
│   │   │               │   │   └── JwtProperties.java         # JWT 配置属性
│   │   │               │   ├── result/                        # 统一响应
│   │   │               │   │   └── Result.java                # 统一返回结果
│   │   │               │   └── utils/                         # 工具类
│   │   │               │       ├── JwtUtil.java               # JWT 工具类
│   │   │               │       ├── PasswordUtil.java          # 密码加密工具
│   │   │               │       ├── IpUtil.java                # IP 工具类
│   │   │               │       └── ExcelUtil.java             # Excel 工具类
│   │   │               ├── filter/                            # 过滤器
│   │   │               │   └── JwtAuthenticationTokenFilter.java # JWT 认证过滤器
│   │   │               ├── interceptor/                       # 拦截器
│   │   │               │   ├── LoginCheckInterceptor.java    # 登录校验拦截器
│   │   │               │   └── PermissionInterceptor.java     # 权限拦截器
│   │   │               ├── aspect/                            # 切面
│   │   │               │   └── LogAspect.java                 # 操作日志切面
│   │   │               ├── dto/                               # 数据传输对象
│   │   │               │   ├── EmployeeLoginDTO.java          # 员工登录 DTO
│   │   │               │   ├── EmployeePageQueryDTO.java      # 员工分页查询 DTO
│   │   │               │   ├── DishDTO.java                   # 菜品 DTO
│   │   │               │   ├── SetmealDTO.java                # 套餐 DTO
│   │   │               │   └── OrderDTO.java                  # 订单 DTO
│   │   │               ├── entity/                            # 实体类
│   │   │               │   ├── Employee.java                 # 员工实体
│   │   │               │   ├── Role.java                     # 角色实体
│   │   │               │   ├── Permission.java               # 权限实体
│   │   │               │   ├── Branch.java                   # 分店实体
│   │   │               │   ├── Category.java                 # 分类实体
│   │   │               │   ├── Dish.java                     # 菜品实体
│   │   │               │   ├── DishFlavor.java               # 菜品口味实体
│   │   │               │   ├── Setmeal.java                  # 套餐实体
│   │   │               │   ├── SetmealDish.java              # 套餐菜品关系实体
│   │   │               │   ├── Orders.java                   # 订单实体
│   │   │               │   ├── OrderDetail.java              # 订单明细实体
│   │   │               │   ├── OperationLog.java             # 操作日志实体
│   │   │               │   ├── LoginLog.java                 # 登录日志实体
│   │   │               │   └── Dict.java                     # 字典实体
│   │   │               ├── mapper/                           # Mapper 接口
│   │   │               │   ├── EmployeeMapper.java
│   │   │               │   ├── RoleMapper.java
│   │   │               │   ├── PermissionMapper.java
│   │   │               │   ├── BranchMapper.java
│   │   │               │   ├── CategoryMapper.java
│   │   │               │   ├── DishMapper.java
│   │   │               │   ├── DishFlavorMapper.java
│   │   │               │   ├── SetmealMapper.java
│   │   │               │   ├── SetmealDishMapper.java
│   │   │               │   ├── OrdersMapper.java
│   │   │               │   ├── OrderDetailMapper.java
│   │   │               │   ├── OperationLogMapper.java
│   │   │               │   ├── LoginLogMapper.java
│   │   │               │   └── DictMapper.java
│   │   │               ├── service/                           # 服务层接口
│   │   │               │   ├── EmployeeService.java
│   │   │               │   ├── RoleService.java
│   │   │               │   ├── PermissionService.java
│   │   │               │   ├── BranchService.java
│   │   │               │   ├── CategoryService.java
│   │   │               │   ├── DishService.java
│   │   │               │   ├── SetmealService.java
│   │   │               │   ├── OrderService.java
│   │   │               │   ├── StatService.java
│   │   │               │   ├── AuthService.java
│   │   │               │   ├── LogService.java
│   │   │               │   └── CommonService.java             # 通用服务（文件上传等）
│   │   │               ├── service/impl/                      # 服务层实现
│   │   │               │   ├── EmployeeServiceImpl.java
│   │   │               │   ├── RoleServiceImpl.java
│   │   │               │   ├── PermissionServiceImpl.java
│   │   │               │   ├── BranchServiceImpl.java
│   │   │               │   ├── CategoryServiceImpl.java
│   │   │               │   ├── DishServiceImpl.java
│   │   │               │   ├── SetmealServiceImpl.java
│   │   │               │   ├── OrderServiceImpl.java
│   │   │               │   ├── StatServiceImpl.java
│   │   │               │   ├── AuthServiceImpl.java
│   │   │               │   ├── LogServiceImpl.java
│   │   │               │   └── CommonServiceImpl.java
│   │   │               └── controller/                        # 控制器层（RESTful API）
│   │   │                   ├── AdminController.java          # 管理员基础控制器
│   │   │                   ├── AdminAuthController.java      # 认证控制器
│   │   │                   │   # POST /admin/auth/login
│   │   │                   │   # POST /admin/auth/logout
│   │   │                   │   # POST /admin/auth/unlock
│   │   │                   ├── AdminEmployeeController.java  # 员工管理控制器
│   │   │                   │   # GET    /admin/employee/list
│   │   │                   │   # POST   /admin/employee/save
│   │   │                   │   # PUT    /admin/employee/update
│   │   │                   │   # POST   /admin/employee/resetPwd
│   │   │                   │   # POST   /admin/employee/batch
│   │   │                   ├── AdminRoleController.java      # 角色管理控制器
│   │   │                   │   # GET    /admin/role/list
│   │   │                   │   # POST   /admin/role/save
│   │   │                   │   # PUT    /admin/role/update
│   │   │                   │   # DELETE /admin/role/delete
│   │   │                   ├── AdminPermissionController.java # 权限管理控制器
│   │   │                   ├── AdminBranchController.java    # 分店管理控制器
│   │   │                   │   # GET    /admin/branch/list
│   │   │                   │   # POST   /admin/branch/save
│   │   │                   │   # PUT    /admin/branch/update
│   │   │                   │   # DELETE /admin/branch/delete
│   │   │                   ├── AdminCategoryController.java  # 分类管理控制器
│   │   │                   │   # GET    /admin/category/list
│   │   │                   │   # POST   /admin/category/save
│   │   │                   │   # PUT    /admin/category/update
│   │   │                   │   # DELETE /admin/category/delete
│   │   │                   │   # POST   /admin/category/batch
│   │   │                   │   # POST   /admin/category/sort
│   │   │                   ├── AdminDishController.java      # 菜品管理控制器
│   │   │                   │   # GET    /admin/dish/list
│   │   │                   │   # POST   /admin/dish/save
│   │   │                   │   # PUT    /admin/dish/update
│   │   │                   │   # DELETE /admin/dish/delete
│   │   │                   │   # POST   /admin/dish/batch
│   │   │                   │   # POST   /admin/dish/import
│   │   │                   │   # GET    /admin/dish/export
│   │   │                   ├── AdminSetmealController.java   # 套餐管理控制器
│   │   │                   │   # GET    /admin/setmeal/list
│   │   │                   │   # POST   /admin/setmeal/save
│   │   │                   │   # PUT    /admin/setmeal/update
│   │   │                   │   # DELETE /admin/setmeal/delete
│   │   │                   │   # POST   /admin/setmeal/batch
│   │   │                   │   # GET    /admin/setmeal/export
│   │   │                   ├── AdminOrderController.java     # 订单管理控制器
│   │   │                   │   # GET    /admin/order/list
│   │   │                   │   # GET    /admin/order/detail
│   │   │                   │   # PUT    /admin/order/updateStatus
│   │   │                   │   # POST   /admin/order/cancel
│   │   │                   │   # GET    /admin/order/export
│   │   │                   │   # GET    /admin/order/log
│   │   │                   ├── AdminStatController.java      # 数据统计控制器
│   │   │                   │   # GET    /admin/stat/business
│   │   │                   │   # GET    /admin/stat/salesTop
│   │   │                   │   # GET    /admin/stat/orderAnalysis
│   │   │                   │   # GET    /admin/stat/export
│   │   │                   ├── AdminLogController.java       # 日志管理控制器
│   │   │                   │   # GET    /admin/log/loginList
│   │   │                   │   # GET    /admin/log/operationList
│   │   │                   └── CommonController.java         # 通用控制器
│   │   │                       # POST   /admin/common/upload
│   │   ├── resources/
│   │   │   ├── mapper/                                      # MyBatis XML 映射文件
│   │   │   │   ├── EmployeeMapper.xml
│   │   │   │   ├── RoleMapper.xml
│   │   │   │   ├── PermissionMapper.xml
│   │   │   │   ├── BranchMapper.xml
│   │   │   │   ├── CategoryMapper.xml
│   │   │   │   ├── DishMapper.xml
│   │   │   │   ├── DishFlavorMapper.xml
│   │   │   │   ├── SetmealMapper.xml
│   │   │   │   ├── SetmealDishMapper.xml
│   │   │   │   ├── OrdersMapper.xml
│   │   │   │   ├── OrderDetailMapper.xml
│   │   │   │   ├── OperationLogMapper.xml
│   │   │   │   ├── LoginLogMapper.xml
│   │   │   │   └── DictMapper.xml
│   │   │   ├── application.yml                              # 主配置文件
│   │   │   ├── application-dev.yml                          # 开发环境配置
│   │   │   ├── application-prod.yml                         # 生产环境配置
│   │   │   └── logback-spring.xml                           # 日志配置
│   │   └── sql/
│   │       └── init.sql                                     # 数据库初始化脚本
│   └── test/                                                # 测试代码
│       └── java/
│           └── com/
│               └── delivery/
│                   └── management/
├── pom.xml                                                  # Maven 依赖配置
└── README.md                                                # 项目说明文档
```

## 二、前端项目结构（Vue 3）

```
deliver-management-frontend/
├── public/                                                  # 静态资源
│   └── favicon.ico
├── src/
│   ├── api/                                                # API 接口
│   │   ├── index.js                                        # Axios 封装
│   │   ├── auth.js                                         # 认证相关接口
│   │   ├── employee.js                                     # 员工管理接口
│   │   ├── role.js                                         # 角色管理接口
│   │   ├── branch.js                                       # 分店管理接口
│   │   ├── category.js                                     # 分类管理接口
│   │   ├── dish.js                                         # 菜品管理接口
│   │   ├── setmeal.js                                      # 套餐管理接口
│   │   ├── order.js                                        # 订单管理接口
│   │   ├── stat.js                                         # 数据统计接口
│   │   └── common.js                                       # 通用接口（文件上传等）
│   ├── assets/                                             # 资源文件
│   │   ├── images/                                         # 图片资源
│   │   ├── styles/                                         # 样式文件
│   │   │   ├── index.scss                                 # 全局样式
│   │   │   └── variables.scss                             # 样式变量
│   │   └── fonts/                                          # 字体文件
│   ├── components/                                         # 公共组件
│   │   ├── Layout/                                         # 布局组件
│   │   │   ├── AppLayout.vue                               # 主布局
│   │   │   ├── Header.vue                                 # 头部组件
│   │   │   ├── Sidebar.vue                                # 侧边栏组件
│   │   │   └── Breadcrumb.vue                             # 面包屑组件
│   │   ├── Table/                                          # 表格组件
│   │   │   └── DataTable.vue                              # 数据表格
│   │   ├── Form/                                           # 表单组件
│   │   │   └── FormDialog.vue                             # 表单弹窗
│   │   ├── Upload/                                         # 上传组件
│   │   │   └── ImageUpload.vue                            # 图片上传
│   │   └── Chart/                                          # 图表组件
│   │       └── ECharts.vue                                # ECharts 封装
│   ├── router/                                             # 路由配置
│   │   ├── index.js                                        # 路由主文件
│   │   └── guards.js                                       # 路由守卫（权限校验）
│   ├── stores/                                             # Pinia 状态管理
│   │   ├── index.js                                        # Store 入口
│   │   ├── user.js                                         # 用户信息 Store
│   │   ├── permission.js                                   # 权限 Store
│   │   └── app.js                                          # 应用全局 Store
│   ├── views/                                              # 页面组件
│   │   ├── Login/                                          # 登录页
│   │   │   └── Login.vue
│   │   ├── Dashboard/                                      # 首页/仪表盘
│   │   │   └── Dashboard.vue
│   │   ├── Employee/                                       # 员工管理
│   │   │   ├── EmployeeList.vue                           # 员工列表
│   │   │   └── EmployeeForm.vue                           # 员工表单
│   │   ├── Role/                                           # 角色管理
│   │   │   ├── RoleList.vue
│   │   │   └── RoleForm.vue
│   │   ├── Branch/                                         # 分店管理
│   │   │   ├── BranchList.vue
│   │   │   └── BranchForm.vue
│   │   ├── Category/                                       # 分类管理
│   │   │   ├── CategoryList.vue
│   │   │   └── CategoryForm.vue
│   │   ├── Dish/                                           # 菜品管理
│   │   │   ├── DishList.vue
│   │   │   └── DishForm.vue
│   │   ├── Setmeal/                                        # 套餐管理
│   │   │   ├── SetmealList.vue
│   │   │   └── SetmealForm.vue
│   │   ├── Order/                                          # 订单管理
│   │   │   ├── OrderList.vue
│   │   │   └── OrderDetail.vue
│   │   └── Stat/                                           # 数据统计
│   │       ├── BusinessStat.vue                           # 营业统计
│   │       ├── SalesTop.vue                                # 销量排行
│   │       └── OrderAnalysis.vue                           # 订单分析
│   ├── utils/                                              # 工具函数
│   │   ├── request.js                                      # Axios 请求封装
│   │   ├── auth.js                                         # 认证工具
│   │   ├── validate.js                                     # 表单校验规则
│   │   ├── format.js                                       # 格式化工具
│   │   ├── export.js                                       # Excel 导出工具
│   │   └── constants.js                                    # 前端常量
│   ├── directives/                                         # 自定义指令
│   │   └── permission.js                                  # 权限指令
│   ├── App.vue                                             # 根组件
│   ├── main.js                                             # 入口文件
│   └── env.js                                              # 环境变量配置
├── .env                                                     # 环境变量（开发）
├── .env.production                                          # 环境变量（生产）
├── .gitignore                                              # Git 忽略文件
├── index.html                                              # HTML 模板
├── package.json                                            # 依赖配置
├── vite.config.js                                          # Vite 配置
├── eslint.config.js                                        # ESLint 配置
├── prettier.config.js                                      # Prettier 配置
└── README.md                                               # 项目说明文档
```

## 三、RESTful API 设计规范

### 1. URL 设计规范
- 使用名词，不使用动词
- 使用复数形式（如 `/admin/employees` 而非 `/admin/employee`）
- 使用层级结构表示资源关系
- 使用连字符 `-` 分隔单词，不使用下划线

### 2. HTTP 方法规范
- `GET`: 查询资源（列表、详情）
- `POST`: 创建资源
- `PUT`: 更新资源（完整更新）
- `PATCH`: 部分更新资源
- `DELETE`: 删除资源

### 3. 状态码规范
- `200`: 请求成功
- `201`: 创建成功
- `400`: 参数错误
- `401`: 未登录/Token 过期
- `403`: 无权限
- `404`: 资源不存在
- `500`: 服务器内部错误

### 4. 响应格式规范
```json
{
  "code": 200,
  "msg": "操作成功",
  "data": {}
}
```

### 5. 分页响应格式
```json
{
  "code": 200,
  "msg": "查询成功",
  "data": {
    "total": 100,
    "list": []
  }
}
```

## 四、命名规范

### 后端命名规范
- **类名**: 大驼峰（PascalCase），如 `EmployeeController`
- **方法名**: 小驼峰（camelCase），如 `getEmployeeList`
- **常量**: 全大写下划线分隔，如 `STATUS_ENABLED`
- **包名**: 全小写，如 `com.delivery.management.controller`

### 前端命名规范
- **组件名**: 大驼峰（PascalCase），如 `EmployeeList.vue`
- **变量/函数名**: 小驼峰（camelCase），如 `getEmployeeList`
- **常量**: 全大写下划线分隔，如 `API_BASE_URL`
- **文件/文件夹**: 小驼峰或短横线分隔，如 `employee-list.vue`

## 五、开发建议

1. **严格遵守 RESTful 规范**，URL 和方法要符合语义
2. **统一异常处理**，使用全局异常处理器
3. **统一响应格式**，所有接口返回统一结构
4. **参数校验**，使用 `@Valid` 和 `@NotNull` 等注解
5. **日志记录**，关键操作记录操作日志
6. **权限控制**，使用拦截器或 AOP 实现权限校验
7. **代码注释**，关键业务逻辑添加注释
8. **单元测试**，核心业务逻辑编写单元测试

