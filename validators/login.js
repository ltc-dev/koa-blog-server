// 登录校验
export const loginValid = (ctx)=>{
  ctx
  .validateBody("username")
  .required("用户名是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  .trim()
  .isLength(2, 8, "用户名长度必须是2~8位");

  ctx
  .validateBody("password")
  .required("密码是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  .trim()
  .isLength(4, 8, "密码长度必须是4~8位");

  ctx
  .validateBody("vercode")
  .required("验证码是必传参数") 
}

// 注册校验
export const registerValid = (ctx)=>{
  ctx
  .validateBody("username")
  .required("用户名是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  .trim()
  .isLength(2, 8, "用户名长度必须是2~8位");

  ctx
  .validateBody("password")
  .required("密码是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  .trim()
  .isLength(4, 8, "密码长度必须是4~8位");

  ctx
  .validateBody("phone")
  .required("手机号码是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  .trim()
  .match(/^1[3-9]\d{9}$/,"手机号格式错误")

  ctx
  .validateBody("vercode")
  .required("验证码是必传参数") 
}