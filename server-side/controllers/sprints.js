require('dotenv').config();

// Required models
const express = require('express');
const jwt = require('jsonwebtoken');

// router instances
let router = express.Router()

// include models
let db = require('../models')


// GET sprints
router.get('/mySprints', (req, res) => {
  console.log('SPRINTS HIT');
  db.Task.find({
    assignedTo: req.user.id
  })
  .populate('sprints')
  .then(foundTasks => {
    res.send(foundTasks)
  })
  .catch(err => {
    console.log('error in get /tasks', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

// POST sprints
router.post('/', (req, res) => {
  console.log('In the POST /sprints/ route');
  console.log(req.user);
  let newSprintData = {...req.body}
  newSprintData.project = "NEED TO GRAB";
  console.log('before going into db');
  console.log(newSprintData);
  db.Sprint.create(newSprintData)
  .then(createdSprint => {
    console.log(createdSprint);
    res.send(createdSprint)
  })
  .catch(err => {
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//get sprints/:id
router.get('/:id', (req, res) => {
  db.Sprint.findById(req.params.id)
  .then(foundSprint => {
    res.send(foundSprint)
  })
  .catch( err => {
    console.log('error in get /Sprint/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

// returns array of all tasks associated to given sprint id
// get sprints/:id/tasks
router.get('/:id/tasks', (req, res) => {
  db.Task.find({
    sprint: req.params.id
  })
  .then(foundSprintTasks => {
    res.send(foundSprintTasks)
  })
  .catch( err => {
    console.log('error in get /sprints/:id/tasks', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put sprints
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
  db.Sprint.findOneAndUpdate(
    { _id: req.params.id},
    req.body,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedSprint => {
    res.send(editedSprint)
  })
  .catch( err => {
    console.log('error in put /Sprint/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete sprints
router.delete('/:id', (req, res) => {
  db.Sprint.findOneAndDelete(
    {_id: req.params.id},
    { useFindAndModify: false}
  )
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /Sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
