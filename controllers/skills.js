import {Skill} from "../models/skills.js";


function index(req, res){
  console.log("Hey!")
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
}



export {
  index,
}