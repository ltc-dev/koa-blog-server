import { saveValid,updateValid } from '../validators/categorie'
import { queryIdValid,bodyIdValid } from '../validators/common'
import { create,updateOne,delOne,findOne,findList } from '../services/categorie'
import response from '../utils/response'

export const save = async (ctx,next)=>{
  saveValid(ctx)
  const { name,description} = ctx.request.body
  const res = await create({name,description}) 
  response.success(ctx,res.id)
}

export const getInfo = async (ctx,next)=>{
  queryIdValid(ctx)
  const { id} = ctx.request.query
    const res = await findOne({id}) 
    if(res){
      response.success(ctx,res)
    }else{
      response.error(ctx,"分类id不存在")
    }
}

export const update = async (ctx,next)=>{
  updateValid(ctx)
  const res = await updateOne(ctx.request.body)
  if(res){
    response.success(ctx)
  }else{
    response.error(ctx,"更新分类失败")
  }
  
}

export const getList = async (ctx,next)=>{
  const res = await findList(ctx.request.query)
  response.success(ctx,res)
}

export const del = async (ctx,next)=>{
  queryIdValid(ctx)
  const { id } = ctx.request.query
  try {
    const res = await delOne({id}) 
    response.success(ctx)
  } catch (error) {
    response.error(ctx,"分类id不存在")
  }
}