import { Schema, model } from "mongoose";
import dayjs from "dayjs";

const schema = new Schema(
  {
    name: {
      // 分类名称
      type: String,
      required: [true, "分类名称为必传参数"],
      unique: true, //用户名不能重复
      // 去掉两头空格
      trim: true,
    },
    description: {
      // 分类描述
      type: String,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default schema;
