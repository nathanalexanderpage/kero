var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
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
  prerequisiteTasks:
    {
      required: false,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'    
    },
  basePriority: {
    type: Number
  }
});

let Task = mongoose.model('Task', taskSchema);

// Exporting the User model
module.exports = Task;
