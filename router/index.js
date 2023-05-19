import Router from '@koa/router'
import koaJwt from 'koa-jwt'

import user from './user'
import categorie from './categorie'
import article from './article'
import common from './common'
import authSession from '../middlewares/auth-session'
import {secret} from '../utils/jwt'
import whiteApis from '../config/white-apis'


// 创建路由对象
const router = new Router({
  // 路由前缀
  prefix:"/api"
})

// 使用session 鉴权中间件
router.use(authSession)

// 使用jwt鉴权中间件
// router.use(koaJwt({secret}).unless({path:whiteApis.map(api=>`/api${api.api}`)}))

router.use(common.routes(),user.allowedMethods())
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
// 用户模块路由
router.use('/user',user.routes(),user.allowedMethods())
// 文章分类模块路由
router.use('/categorie',categorie.routes(),categorie.allowedMethods())
// 文章分类模块路由
router.use('/article',article.routes(),article.allowedMethods())

export default router