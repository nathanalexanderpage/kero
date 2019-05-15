require('dotenv').config();

//Required models
const express = require('express');
const jwt = require('jsonwebtoken');

//router instances
let router = express.Router()

//include models
let db = require('../models')


//GET sprints
router.post('/get', (req, res) => {
  console.log('SPRINTS HIT');
  db.Sprint.find()
  .then(foundSprint => {
    console.log(foundSprint);
    res.send(foundSprint)

  })
  .catch( err => {
    console.log('error in get /tasks', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//post tasks
router.post('/post', (req, res) => {

  console.log('In the POST /sprint/ route');
  console.log(req.body);
  let newsprint = {...req.body}
  newsprint.project = '5cdb6b3796f250daf48129eb'
  console.log(newsprint);
  db.Sprint.create(newsprint)

  .then(createdSprint => {
    res.send(createdSprint)
  })
  .catch( err => {
    console.log('error in post /Projects', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })

})

//get tasks/:id
router.get('/:id', (req, res) => {
  db.Project.findById(req.params.id)
  .then(foundProject => {
    res.send(foundProject)
  })
  .catch( err => {
    console.log('error in get /Project/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put tasks
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
  db.Project.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedProject => {
     res.send(editedProject)
  })
  .catch( err => {
    console.log('error in put /Project/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete tasks
router.delete('/:id', (req, res) => {
  db.Project.findOneAndDelete({
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /Projects/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
