import {Skill} from "../models/skills.js";


function index(req, res){
  console.log("Hey!")
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}


export {
  index,
  newSkill as new,
}