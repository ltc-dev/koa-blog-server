// id校验
export const queryIdValid = (ctx)=>{
  ctx
  .validateQuery("id")
  .required("id是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
}

export const bodyIdValid = (ctx)=>{
  ctx
  .validateBody("id")
  .required("id是必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
}