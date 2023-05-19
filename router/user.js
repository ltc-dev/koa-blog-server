import Router from '@koa/router'

// 创建路由对象
const router = new Router()
router.get("/",ctx=>{
  throw CustomException(400,"自定义错误")
})

export default router