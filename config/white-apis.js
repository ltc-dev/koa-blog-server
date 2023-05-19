// 跳过鉴权的api
export default [
  // 登录接口
  {api:"/login",method:'POST'},
  // 注册接口
  {api:"/register",method:'POST'},
  {api:"/upload",method:"POST"},
  {api:"/vercode"},
]