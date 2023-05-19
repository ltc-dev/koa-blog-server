import dayjs from "dayjs";

// // 定义 timestamp 插件,用于给每个文档创建自动创建更新时间和创建时间
// export const timestampPlugin = (schema) => {
//   const created_at = {
//     type: String,
//     default: dayjs().format("YYYY-MM-DD HH:mm:ss"),
//   };
//   const updated_at = {
//     type: String,
//     default: dayjs().format("YYYY-MM-DD HH:mm:ss"),
//   };
//   schema.add({ created_at, updated_at });

//   schema.pre('save', function (next) {
//     const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
//     this.updated_at = now;
//     if (!this.created_at) { 
//       this.created_at = now;
//     }
//     next();
//   });
//   schema.pre('findOneAndUpdate', function(next) {
//     const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
//     this.update({}, { $set: { updated_at: now } });
//     next();
//   });
// };


// 
export const formatPlugin = (schema)=>{
    // 将 _id 字段名转换为 id
    schema.set('toObject', {
      transform: function(doc, ret, options) {
        ret.created_at = dayjs(ret.created_at).format('YYYY-MM-DD HH:mm:ss');
        ret.updated_at = dayjs(ret.updated_at).format('YYYY-MM-DD HH:mm:ss');
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    });
    schema.set('toJSON', {
      virtuals: true,
      transform: function(doc, ret, options) {
        ret.created_at = dayjs(ret.created_at).format('YYYY-MM-DD HH:mm:ss');
        ret.updated_at = dayjs(ret.updated_at).format('YYYY-MM-DD HH:mm:ss');
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    });
}