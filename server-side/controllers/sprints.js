require('dotenv').config();
//Required models
let express = require('express')
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
    console.log('error in get /sprints', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//post tasks
router.post('/post', (req, res) => {
  db.Sprint.create(req.body)
  .then(createdSprint => {
    res.send(createdSprint)
  })
  .catch( err => {
    console.log('error in post /sprints', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })

})

//get tasks/:id
router.get('/:id', (req, res) => {
  db.Sprint.findById(req.params.id)
  .then(foundSprint => {
    res.send(foundSprint)
  })
  .catch( err => {
    console.log('error in get sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//put tasks
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
    console.log('error in put sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete tasks
router.delete('/:id', (req, res) => {
  db.Sprint.findOneAndDelete({
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /sprints/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
