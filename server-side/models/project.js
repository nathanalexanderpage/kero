// Require Mongoose node module
const mongoose = require('mongoose');

//  Create Project Schema
let projectSchema = new mongoose.Schema({
  title: String,
  startdate: Date,
  finishdate: Date,
  purpose: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

// Use schema to create model
let Project = mongoose.model('Project', projectSchema)

// Export Project Model
module.exports = Project
