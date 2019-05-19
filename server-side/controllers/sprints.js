require('dotenv').config();

// Required models
const express = require('express');
const jwt = require('jsonwebtoken');

// router instances
let router = express.Router()

// include models
let db = require('../models')


// GET sprints related to an admin
router.get('/admin', (req, res) => {
  console.log('SPRINTS HIT');
  console.log(req.user);
  db.Sprint.find({
    admin: req.user.id
  })
  .then(foundSprints => {
    res.send(foundSprints)
  })
  .catch(err => {
    console.log('error in get /tasks', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

// POST NEW sprints
router.post('/', (req, res) => {
  console.log('In the POST /sprints/ route');
  let newSprintData = {...req.body}
 newSprintData.admin = req.user.id;
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
  console.log(req.params.id);
  db.Task.find({
    sprint: req.params.id
  })
  .then(foundSprintTasks => {
    console.log(foundSprintTasks);
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
  let realbody = {}
  realbody.title = req.body.titlE
  realbody.startDate = req.body.startDatE
  realbody.finishDate = req.body.finishDatE

  db.Sprint.findOneAndUpdate(
    { _id: req.params.id},
    realbody,
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
