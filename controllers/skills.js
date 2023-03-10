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

function create(req, res){
  console.log(req.body)
  req.body.learned = true
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteTodo(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(todo => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  index,
  newSkill as new,
  create,
  show,
  deleteTodo as delete,
}