//Required models
let express = require('express')

//router instances
let router = express.Router()

//include models
let db = require('../models')

//get users
router.get('/', (req, res) => {
  db.User.find()
  .then(foundUser => {
    res.send(foundUser)
  })
  .catch( err => {
    console.log('error in get /users', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//get users/:id
router.get('/:id', (req, res) => {
  db.User.findById(req.params.id)
  .then(foundUser => {
    console.log(foundUser);
    res.send(foundUser)
  })
  .catch(err => {
    console.log('error in get /user/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  });
})

// use to get all sprints for a given regular user.
// get users/:id/sprints
router.get('/:id/sprints', (req, res) => {
  db.Task.find({
    assignedTo: req.params.id
  }).populate('sprint')
  .then(foundTasks => {
    let uniqueSprintIdArr = []; // temporary holder of ALL sprints for searched user. will update with three different arrays for past, present, future.
    let sprints = {};
    sprints.uniqueCurrentSprintIdArr = [];
    sprints.uniqueFutureSprintIdArr = [];
    sprints.uniquePastSprintIdArr = [];
    foundTasks.forEach((task, i) => {
      console.log(task.title);
      console.log(task.sprint);
      let isInArr = uniqueSprintIdArr.includes(task.sprint);
      console.log(isInArr);
      if (!isInArr) {
        uniqueSprintIdArr.push(task.sprint);
      }
    })
    console.log(uniqueSprintIdArr);
    res.send(uniqueSprintIdArr);
  })
  .catch(err => {
    console.log(err);
  })
})

//post users
router.post('/post', (req, res) => {

  console.log('In the POST /users/ route');
  console.log(req.body);
  if(req.body.status === ''){
      req.body.status = 'todo'
  }
  db.User.create(req.body)
  .then(createdUser => {
    res.send(createdUser)
  })
  .catch( err => {
    console.log('error in post /user', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })

})


//put users
router.put('/:id', (req, res) => {
  //args : {where}, data , {options}
  db.User.findOneAndUpdate(
    { _id: req.params.id},
    req.body ,
    {new: true, useFindAndModify:false }) //this will return what was updated
  .then(editedUser => {
    res.send(editedUser)
  })
  .catch( err => {
    console.log('error in put /user/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})

//delete users
router.delete('/:id', (req, res) => {
  db.User.findOneAndDelete({
    _id: req.params.id
  },{ useFindAndModify: false})
  .then(() => {
    res.status(204).send()
  })
  .catch( err => {
    console.log('error in delete /users/:id', err);
    res.status(500).send('Something went wrong. Contact administrator')
  })
})
module.exports = router
