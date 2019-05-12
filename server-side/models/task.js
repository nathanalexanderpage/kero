var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 70
  },
  desc: {
    type: String,
  },
  manHourBudget: {
    type: Number,
    required: true
  },
  status: {
    type: String,
  },
  dateAssigned: {
    type: String
  },
  dateCompleted: {
    type: String
  },
  prerequisiteTasks: {
    type: String
  },
  basePriority: {
    type: Number
  }
});

let Task = mongoose.model('Task', taskSchema);

// Exporting the User model
module.exports = Task;
