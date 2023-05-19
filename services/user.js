import {User} from "../models/index"
import { CustomException } from "../utils/exception"

// 分页获取用户列表
export const getAllUser=async (params={})=>{
  const {current=1,pageSize=10,...other} = params
  const res = await User.find(other)
                        .skip((current - 1) * pageSize) // 跳过前面的文档数量 
                        .limit(pageSize) // 每页的文档数量 
  return res
}

// 创建用户
export const createUser=async (params)=>{
  
  const users = await getAllUser({username:params.username})
  if(users&&users.length){
    throw new CustomException(400,"用户名重复")
  }
  const res = await User.create(params)
  return res
}

// 获取用户
export const getUser = async (params={})=>{
  const res = await User.findOne(params)
  return res
}

// 获取用户信息加密码
export const getUserPass = async (params={})=>{
  const res = await User.findOne(params).select("+password")
  return res
}