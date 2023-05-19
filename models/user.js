import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import dayjs from "dayjs";

const schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "用户名为必传参数"],
      unique: true, //用户名不能重复
      // 去掉两头空格
      trim: true,
    },
    password: {
      type: String,
      required: true,
      // 查询时不返回
      select: false,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// 密码加密
schema.pre("save", function (next) {
  var user = this;
  //产生密码hash当密码无更改的时候
  if (!user.isModified("password")) return next();
  // 产生一个盐值(salt)
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    // 使用盐值(salt)和明文密码进行哈希加密处理
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // 使用hash覆盖明文密码
      user.password = hash;
      next();
    });
  });
});

// 密码对比校验
schema.methods.comparePass = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export default schema;
