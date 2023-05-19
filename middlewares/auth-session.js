import whiteApis from '../config/white-apis'

// session鉴权中间件

export default async (ctx,next)=>{
  const {path,method} = ctx.request
  const pass = whiteApis.find(item=>{
    let m = item.method||"GET"
    return `/api${item.api}`== path && m == method
  })
  if(pass){
    await next()
  }else{
    if(ctx.session.isLogin){
      await next()
    }else{
      ctx.body = {
        code:401,
        message:"用户未登录"
      }
    }
  }
  
}