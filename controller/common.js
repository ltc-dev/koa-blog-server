import { loginValid,registerValid } from '../validators/login'
import { createUser,getUserPass } from '../services/user'
import svgCaptcha from 'svg-captcha'
import { CustomException } from '../utils/exception'
import response from '../utils/response'


// 登录
export const login =async (ctx,next)=>{
  // 验证参数格式
  loginValid(ctx)
  const {username,password,vercode} = ctx.request.body
  console.log(vercode,ctx.session.vercode);
  if(vercode == ctx.session.vercode?.toLowerCase()){
    const user = await getUserPass({username})
    if(user){
      let pass = await user.comparePass(password)
      if(pass){
        // 删除验证码
        delete ctx.session.vercode
        ctx.session.isLogin = true
        ctx.session.user_id = user.id
        response.msg(ctx,'登录成功')
        return;
      }
    }
    response.error(ctx,"用户名或密码错误")
  }else{
    response.error(ctx,"验证码错误")
  }
  
}

// 退出登录
export const logout = async (ctx,next)=>{
  const { isLogin,user_id} = ctx.session
  if(isLogin&&user_id){
    delete ctx.session.isLogin
    delete ctx.session.user_id
    response.msg(ctx,'退出成功')
  }else{
    response.error(ctx,"你还未登录")
  }
}

// 注册
export const  register= async (ctx,next)=>{
  // 验证参数格式
  registerValid(ctx)
  const {username,password,phone} = ctx.request.body
  const user = await createUser({
    username,password,phone,role:1
  })
  response.msg(ctx,'用户注册成功')

}

// 验证码
export const vercode = async (ctx)=>{
  let option = {
    size:4,
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 6, // 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    // background: '#cc9966', // 验证码图片背景颜色
    // 预设字符
    // charPreset:"23456789"
  }
  // 生成简单验证码
  var captcha = svgCaptcha.create(option)
  // 生成算术式验证码
  // var captcha = svgCaptcha.createMathExpr(option)
  ctx.session.vercode = captcha.text
  ctx.type = "svg"
  ctx.body=captcha.data
}

// 文件上传

export const upload = async (ctx)=>{
  const {file} = ctx.request.files
  if(file){
    response.success(ctx,`/upload/${file.newFilename}`,"上传成功")
  }else{
    response.error(ctx,"上传失败")
  }
  
}