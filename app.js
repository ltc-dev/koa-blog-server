import Koa from 'koa'
import path from 'path'
import KoaStatic from 'koa-static'
import KoaBody from 'koa-body'
import KoaLogger from 'koa-logger';
import onerror from 'koa-onerror'
import KoaBouncer from 'koa-bouncer';
import KoaSession from 'koa-session';

import router from './router/index.js';
import config from './config/index'
import { CustomException } from './utils/exception.js';
import {accessLogger,serverLogger,logger} from './utils/logger.js'
import connectDB from './core/db.js'
import {SESSION_CONFIG} from './config/index.js'

const app = new Koa()
// 数据库连接
connectDB()
// 对cookie中的sid进行加密签名
app.keys = ['koa_blog_serve']
app.use(KoaSession(SESSION_CONFIG,app))
// 访问日志持久化
.use(accessLogger())
// post请求参数解析
.use(KoaBody())
// 表单校验中间件使用
.use(KoaBouncer.middleware())
// 使用koa-logger中间件可以让控制台打印日志
.use(KoaLogger())
 // 静态资源访问
.use(KoaStatic(path.join(path.resolve(),config.staticPath))) 
// 监听并处理程序出现错误
onerror(app,{
  json: (err, ctx) => {
    // 判断校验类型错误
    if (err instanceof KoaBouncer.ValidationError){
      ctx.status = 400;
    }else{
      ctx.status = err.status || 500;
    }
    ctx.body = {
      code: ctx.status,
      message: err.message || '服务端错误',
      data: null
    };
  },
}) 
// 注册路由
app.use(router.routes())




app.on('error', (err, ctx) => {
  // 判断校验类型错误
  if (err instanceof KoaBouncer.ValidationError) return logger.warn(err);;
  // 如果是自定义错误
  if (err instanceof CustomException) return logger.warn(err);
  // 错误日志持久化
  // logger.error(err);
  serverLogger.error(`Error on ${ctx.method} ${ctx.url}: ${err}`)

});

// 监听端口
const server = app.listen(config.port,config.ip,()=>{
  const address = server.address()
  console.log(`服务启动成功！请访问${address.address}:${address.port}`);
})