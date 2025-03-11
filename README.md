## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000)
可以从编辑`app/page.tsx`开始

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## 业务场景
1. 同一个路由地址，通过不同方式打开，展示不同效果（案例：图片弹窗分享）
   1. 对`软连接`(用`Link`标签跳转) 进行拦截，先正常做出来页面， 然后通过平行路由 + 拦截路由实现
   2. 平行路由：@xxx, 添加 default.tsx文件，防止页面404
   3. `app/default.tsx return null`
   4. `app/layout.tsx中添加 xxx`
   5. `@xxx/(.)aaa`, 添加需要拦截的路由


## 功能
1. 动态路由：切换页面元信息
2. 平行路由：需要在其它 @item文件夹下建立 `default.tsx` 文件
   1. 作用：同一layout中展示多个 页面，例如仪表盘页面
3. 拦截路由：