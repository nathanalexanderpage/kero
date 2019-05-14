var mongoose = require('mongoose');

var sprintSchema = new mongoose.Schema({
  number: Number,
  startDate: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 30
  },
  endDate: { // TODO: Need to add email validation
    type: String,
    required: true,
    minlength: 20,
    maxlength: 30
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
});

let Sprint = mongoose.model('Sprint', sprintSchema);

// Exporting the User model
module.exports = Sprint;
