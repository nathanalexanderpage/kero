//Required models
<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

=======
let express = require('express')
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c

//router instances
let router = express.Router()

//include models
let db = require('../models')

<<<<<<< HEAD
//get tasks
router.post('/get', (req, res) => {
  console.log("PROJECTS HIT");
  console.log(req);
  db.Project.find()
  .then(foundProject => {
    console.log(foundProject);
    res.send(foundProject)
  })
  .catch( err => {
    console.log('error in get /tasks', err);
=======
//GET sprints
router.get('/', (req, res) => {
  db.Sprint.find()
  .then(foundSprint => {
    res.send(foundSprint)
  })
  .catch( err => {
    console.log('error in get /sprints', err);
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//post tasks
<<<<<<< HEAD
router.post('/post', (req, res) => {
  console.log('In the POST /project/ route');
  console.log('ESTE ES EL USUARIO', req.user);
  console.log(req.body);
  req.body.project = ""
  db.Sprint.create(req.body)
  .then(createdProject => {
    res.send(createdProject)
  })
  .catch( err => {
    console.log('error in post /Projects', err);
=======
router.post('/', (req, res) => {
  db.Sprint.create(req.body)
  .then(createdSprint => {
    res.send(createdSprint)
  })
  .catch( err => {
    console.log('error in post /sprints', err);
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
    res.status(500).send('Something went wrong. Contact administrator')
  })

})

//get tasks/:id
router.get('/:id', (req, res) => {
<<<<<<< HEAD
  db.Project.findById(req.params.id)
  .then(foundProject => {
    res.send(foundProject)
  })
  .catch( err => {
    console.log('error in get /Project/:id', err);
=======
  db.Sprint.findById(req.params.id)
  .then(foundSprint => {
    res.send(foundSprint)
  })
  .catch( err => {
    console.log('error in get sprints/:id', err);
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put tasks
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
<<<<<<< HEAD
  db.Project.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedProject => {
     res.send(editedProject)
  })
  .catch( err => {
    console.log('error in put /Project/:id', err);
=======
  db.Sprint.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedSprint => {
    res.send(editedSprint)
  })
  .catch( err => {
    console.log('error in put sprints/:id', err);
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete tasks
router.delete('/:id', (req, res) => {
<<<<<<< HEAD
  db.Project.findOneAndDelete({
=======
  db.Sprint.findOneAndDelete({
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
<<<<<<< HEAD
    console.log('error in delete /Projects/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
=======
    console.log('error in delete /sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
>>>>>>> 051f7ca0529444b6e168d5501b638b01e96c1b0c
