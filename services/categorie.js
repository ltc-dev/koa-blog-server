import { uniqueException } from "../utils/exception"
import {Categorie} from "../models/index"

import dayjs from "dayjs"

// 创建
export const create=async (params={})=>{
  try {
    const res = await Categorie.create(params)
    return res
  } catch (error) {
    uniqueException(error,"分类名重复")
  }
}
// 更新
export const updateOne =async (params={})=>{
  const {id,...other} = params
  try {
    const res = await Categorie.findByIdAndUpdate(id,other)
    return res
  } catch (error) {
    uniqueException(error,"分类名重复")
  }
}

// 删除
export const delOne =async (params={})=>{
  const {id} = params
  console.log(id);
  const res = await Categorie.findByIdAndDelete(id)
  return res
}

// 获取单个信息
export const findOne = async (params={})=>{
  const res = await Categorie.findById(params.id)
  return res
}

// 分页获取列表
export const findList=async (params={})=>{
  const {current=1,pageSize=10,...other} = params
  const total = await Categorie.countDocuments(other)
  const list = await Categorie.find(other)
                        .skip((current - 1) * pageSize) // 跳过前面的文档数量 
                        .limit(pageSize) // 每页的文档数量 
  return {total,list}
}

