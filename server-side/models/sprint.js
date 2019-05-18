var mongoose = require('mongoose');

var sprintSchema = new mongoose.Schema({
  title: String,
  startDate: {
    type: String,
    required: true
  },
  finishDate: { // TODO: Need to add email validation
    type: String,
    required: true
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

let Sprint = mongoose.model('Sprint', sprintSchema);

// Exporting the User model
module.exports = Sprint;
