import KoaBody from 'koa-body'
import path from 'path'
import { CustomException } from '../utils/exception'

export default KoaBody({
  multipart: true,
  formidable:{
    // 限制字段​​数
    maxFields:1,
    // 上传文件目录
    uploadDir: path.join(path.resolve(),'/public/upload'),
    // 最大的文件大小
    maxFileSize:1*1024*1024,
    // 包含源文件拓展
    keepExtensions: true,
    // 是否支持上传多个文件,默认为true
    multiples:false,
    // 自定义文件名
    filename:(name,suffix)=>`${Date.now()}-${name}${suffix}`,
    onFileBegin: (name, file) => {
      // 如果字段名不为 myFile，则拒绝上传该文件
      if (name !== 'file') {
        throw new CustomException(400,"文件上传失败,请检查字段名是否正确") 
      }
    }
  }
})