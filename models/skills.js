import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  language: String,
  learned: Boolean,
})

const Skill = mongoose.model("Skill", skillsSchema)

export {
  Skill
}