// Require Mongoose node module
const mongoose = require('mongoose');

//  Create Project Schema
let projectSchema = new mongoose.Schema({
  name: String,
  startdate: Date,
  finishdate: Date,
  purpose: String
})

// Use schema to create model
let Project = mongoose.model('Project', projectSchema)

// Export Project Model
module.exports = Project
