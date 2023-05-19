import mongoose from 'mongoose';
import {logger} from '../utils/logger.js'
import {db} from '../config/index.js';

export default()=>{
  // 数据库连接
  mongoose.connect(`mongodb://${db.user}:${db.password}@${db.ip}:${db.port}/${db.name}`,{
    // 是否在连接过程中使用新的 URL 解析器
    useNewUrlParser:true,
    // 先从admin表中验证数据库用户身份才行
    authSource:"admin",
    // 表示是否使用新的、基于 Node.js 的拓扑结构监视引擎
    useUnifiedTopology:true,
  })
 
  console.log("数据库连接中...");
  mongoose.connection.on("error",(err)=>{
    console.error('数据库错误:',err);
    // 错误日志持久化
    logger.error(err);
  })
  mongoose.connection.on("open",()=>{
    console.log('数据连接成功');
  })
}
