import Router from '@koa/router'

import uploadMiddleware from '../middlewares/upload'
import {login,logout,register,vercode,upload} from '../controller/common'

// 创建路由对象
const router = new Router()
router.post("/login",login)
router.post("/logout",logout)
router.post("/register",register)
router.get("/vercode",vercode)
router.post("/upload",uploadMiddleware,upload)
export default router