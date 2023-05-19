import {bodyIdValid} from './common'

// 保存校验
export const saveValid = (ctx)=>{
  ctx
  .validateBody("name")
  .required("分类名称为必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
}

// 更新校验
export const updateValid = (ctx)=>{
  bodyIdValid(ctx)
  saveValid(ctx)
}
