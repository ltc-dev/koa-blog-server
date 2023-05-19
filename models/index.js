import dayjs from "dayjs";
import {timestampPlugin,formatPlugin }from '../utils/mongoose-plugin.js'
import categorie from './categorie'
import user from './user'
import article from './article'
import mongoose from "mongoose";

// mongoose.plugin(timestampPlugin);
mongoose.plugin(formatPlugin)

export const Categorie =  mongoose.model("Categorie",categorie)
export const User =  mongoose.model("User",user)
export const Article =  mongoose.model("Article",article)

