import {bodyIdValid} from './common'
// 保存校验
export const saveValid = (ctx)=>{
  ctx
  .validateBody("title")
  .required("文章标题(title)为必传参数") 
  .isString() //确保输入的字段是字符串或者可以转换成字符串
  ctx
  .validateBody("content")
  .required("文章内容(content)为必传参数") 
  .isString() 
  ctx
  .validateBody("categorie_id")
  .required("文章分类(categorie_id)为必传参数") 
  .isString() 
}

// 更新校验
export const updateValid = (ctx)=>{
  bodyIdValid(ctx)
  saveValid(ctx)
}
