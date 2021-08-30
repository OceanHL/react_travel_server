# 旅游电商平台-服务端

使用 `express` + `mocker-api` 搭建一个旅游电商平台的 `Mock` 数据后台服务。

## 启动服务

### 第一步：安装依赖

```js
npm i
# or
yarn
```

### 第二步：启动服务（5050端口）

```js
nodemon index.js
```



## `API` 接口

### 1. 旅游路由接口

| method | `url`                               |
| ------ | ----------------------------------- |
| GET    | `/api/productCollections`           |
| GET    | `/api/touristRoutes/:touristRoutes` |
| GET    | `/api/touristRoutes`                |

### 2. 身份认证

| method | `url`                |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

### 3. 购物车

| method | `url`                              |
| ------ | ---------------------------------- |
| GET    | `/api/shoppingCart`                |
| POST   | `/api/shoppingCart/items`          |
| DELETE | `/api/shoppingCart/items/:itemsId` |
| POST   | `/api/shoppingCart/checkout`       |

### 4. 订单

| method | `url`                             |
| ------ | --------------------------------- |
| POST   | `/api/orders/:orderId/placeOrder` |

