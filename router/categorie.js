import Router from '@koa/router'
import { save,getInfo,update,del,getList } from '../controller/categorie'

// 创建路由对象
const router = new Router()
router.post("/save",save)
router.get("/info",getInfo)
router.post("/update",update)
router.post("/del",del)
router.get("/list",getList)

export default router