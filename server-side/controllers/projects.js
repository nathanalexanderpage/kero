//Required models
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

//router instances
let router = express.Router()

//include models
let db = require('../models')

//get projects
router.get('/', (req, res) => {
  console.log("PROJECTS HIT");
  console.log(req.user);
  db.Project.find({
    admin: req.user.id
  })
  .then(foundProjects => {
    console.log(foundProjects);
    res.send(foundProjects);
  })
  .catch( err => {
    console.log('error in get /projects', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//post projects
router.post('/', (req, res) => {
  console.log('In the POST /project/ route');
  req.body.admin = req.user.id;
  db.Project.create(req.body)
  .then(createdProject => {
    res.send(createdProject)
  })
  .catch( err => {
    console.log('error in post /Projects', err);
    res.status(500).send('Something went wrong. Contact administrator');
  });
});

// GET projects/:id
router.get('/:id', (req, res) => {
  db.Project.findById(req.params.id)
  .then(foundProject => {
    res.send(foundProject);
  })
  .catch(err => {
    console.log('error in get /Project/:id', err);
    res.status(500).send('Something went wrong. Contact administrator');
  });
});

// sends list of sprints related to project in URL
router.get('/:id/sprints', (req, res) => {
  db.Project.findById(req.params.id).populate('sprints')
  .then(foundProject => {
    db.Sprint.find({
      project: req.params.id
    })
    .then(foundSprints => {
      res.send({
        foundProjects: foundProjects,
        foundSprints: foundSprints
      })
    })
  })
  .catch(err => {
    console.log('error in get /Project/:id', err);
    res.status(500).send('Something went wrong. Contact administrator');
  });
});

// PUT projects
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
  db.Project.findOneAndUpdate(
    { _id: req.params.id},
    req.body,
    {new: true, useFindAndModify:false }
  ) //this will return what was updated
  .then(editedProject => {
    res.send(editedProject)
  })
  .catch(err => {
    console.log('error in put /Project/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

// DELETE projects
router.delete('/:id', (req, res) => {
  db.Project.findOneAndDelete(
    {_id: req.params.id},
    { useFindAndModify: false}
  )
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /Projects/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
