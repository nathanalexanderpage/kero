import React, { Component } from 'react';
import { connect } from 'react-redux';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

  changeUnmountOnClose(e) {
      let value = e.target.value;
      this.setState({ unmountOnClose: JSON.parse(value) });
  }

  render() {

    if(!this.props.user){
      return (
        <div>
          <p>This page is for viewing information on a task. You must be logged in to see it.</p>
          <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
        </div>
      );
    }

    let tasksList = this.props.tasks.map((task, i) => {
      return(
        <div key="{i}">
          <div>
            Title: {task.title}
          </div>
          <div>
            Desc: {task.desc}
          </div>
          <div>
            Assigned to: {task.assignedTo}
          </div>
          <div>
            Status: {task.status}
          </div>
          <div>
            Expected man hours: {task.manHourBudget}
          </div>
          <div>
            Date assigned: {task.dateAssigned}
          </div>
          <div>
            Date completed: {task.dateCompleted}
          </div>
          <div>
            Stoppers: {task.prerequisiteTasks}
          </div>
          <div>
            Priority level: {task.basePriority}
          </div>
        </div>
      );
    })

    return(
      <div>
        <div>
          {tasksList}
        </div>
        <div>
          <div className="task-name">
            <h2>Task X</h2>
          </div>
          <div className="task-details-imp">
            Owner: This Person
          </div>
          <div className="task-priority">
            Priority Level: 8
          </div>
          <div className="task-man-hour-budget">
            Man Hours Required Estimate: 10
          </div>
          <div className="task-date-completed">
            Completed on: 05/10
          </div>
          <div className="task-status">
            In progress
          </div>
          <div className="task-depends-on">
            Prerequisite tasks: <a href="#">Task B</a>, <a href="#">Task C</a>
          </div>
          <div className="task-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="task-tags">
            Tags: HTML, CSS, Javascript
          </div>
          <div className="task-date-assigned">
            Assigned on: 05/01
          </div>
        </div>
      </div>

    );
  }
};

export default Task;
