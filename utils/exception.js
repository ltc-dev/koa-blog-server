export class CustomException extends Error {
  constructor(code = 400,msg = "服务器异常") {
    super();
    this.status = code;
    this.message = msg;
    this.stack = '自定义异常'
  }
}

// 不唯一异常
export function uniqueException (error,msg){
  if (error.name === 'MongoServerError' && error.code === 11000) {
    throw new CustomException(400,msg)
  } else {
    throw error
  }
}