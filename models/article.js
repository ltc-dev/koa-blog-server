import { Schema, model } from "mongoose";
import dayjs from "dayjs";

const schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "文章标题为必传参数"],
      unique: true, //用户名不能重复
      trim: true, // 去掉两头空格
    },
    content: {
      type: String,
      required: [true, "文章内容为必传参数"],
      trim: true, // 去掉两头空格
    },
    categorie_id: {
      type: String,
      required: [true, "文章分类ID为必传参数"],
      trim: true, // 去掉两头空格
    },
    like: {
      type: Number,
      default: 0,
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
