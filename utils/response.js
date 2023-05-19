const custom = ({ctx,message="ok",code=200,data={}})=>{
  ctx.body = {
    code,
    data,
    message
  }
}
const success = (ctx,data,message)=>{
  custom({ctx,data,message})
}
const error = (ctx,message)=>{
  custom({ctx,message,code:400})
}
const msg = (ctx,message)=>{
  custom({ctx,message,code:200})
}

export default {
  custom,
  success,
  error,
  msg
}