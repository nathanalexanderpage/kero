var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  sprint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sprint',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
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
    type: Date
  },
  dateCompleted: {
    type: Date
  },
  // prerequisiteTasks:
  //   {
  //     required: false,
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Task'
  //   },
  basePriority: {
    type: Number
  }
});

let Task = mongoose.model('Task', taskSchema);

// Exporting the User model
module.exports = Task;
