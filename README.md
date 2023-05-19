## Koa 搭建个人博客后台服务
#### 介绍
本项目中实现的功能接口有：

| 接口名称  | 请求方式  | 接口地址  |
|----------|---------|----------|
| 注册  | post   | /api/register  |
| 登录  | post  | /api/login   |
| 验证码  | get  | /api/vercode  |
| 退出登录  | post  | /api/logout  |
| 文件上传  | post  | /api/upload  |
| 文章分类-创建  | post  | /api/categorie/save  |
| 文章分类-更新  | post  | /api/categorie/update |
| 文章分类-删除  | post  | /api/categorie/del  |
| 文章分类-详情  | get  | /api/categorie/info  |
| 文章分类-列表  | get  | /api/categorie/list  |
| 文章内容-创建  | post  | /api/article/save  |
| 文章内容-更新  | post  | /api/article/update |
| 文章内容-删除  | post  | /api/article/del  |
| 文章内容-详情  | get  | /api/article/info  |
| 文章内容-列表  | get  | /api/article/list  |


#### 安装
    `yarn add `
#### 开发
    `yarn dev `
#### 打包
    `yarn build `