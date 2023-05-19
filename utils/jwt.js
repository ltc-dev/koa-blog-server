import jsonwebtoken from 'jsonwebtoken';

// jwt加密秘钥,可以任意写，越复杂越好
export const secret = "koa_blog_serve!!>_<!!"

// 生成token
export const generateToken = ({username}) => {
  const token = jsonwebtoken.sign({
    data:username, // 不要放敏感数据
    exp:Math.floor(Date.now()/1000)+60*60*24,  // 设置token过期时间为一天
  },secret)
  return token
}




