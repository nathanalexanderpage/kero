require('dotenv').config();

// Required models
const express = require('express');
const jwt = require('jsonwebtoken');

// router instances
let router = express.Router()

// include models
let db = require('../models')


// GET sprints
router.get('/:id', (req, res) => {
  console.log('SPRINTS HIT');
  db.Sprint.findById()
  .then(foundSprint => {
    console.log(foundSprint);
    res.send(foundSprint)
  })
  .catch(err => {
    console.log('error in get /tasks', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

// POST sprints
router.post('/', (req, res) => {
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
    console.log('error in post /Sprints', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })

})

//get sprints/:id
router.get('/:id', (req, res) => {
  db.Sprint.findById(req.params.id).populate('tasks')
  .then(foundSprint => {
    res.send(foundSprint)
  })
  .catch( err => {
    console.log('error in get /Sprint/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put sprints
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
  db.Sprint.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
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
  db.Sprint.findOneAndDelete({
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /Sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
