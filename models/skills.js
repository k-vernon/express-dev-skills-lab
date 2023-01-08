import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  text: String,
  learned: Boolean,
})

const Skill = mongoose.model("Skill", skillsSchema)

export {
  Skill
}