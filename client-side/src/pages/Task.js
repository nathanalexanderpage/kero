import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

    drag = (e) => {
      e.dataTransfer.setData('transfer', e.target.id);
    }

    noAllowDrop = (e) => {
      e.stopPropagation();
    }

    changeState = (e) => {
      console.log(e);
    }


  render() {

    if(!this.props.task){
      return (
        <div>
          <p>This page is for viewing information on a task. You must be logged in to see it.</p>
          <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
        </div>
      );
    }
    return(
      <div className="tasks" id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} onDrop={this.changeState}>
        {this.props.task.title}
        {this.props.children}
        {/*/ <div>
        //   {8}
        // </div>
        // <div>
        //   <div className="task-name">
        //     <h2>Task X</h2>
        //   </div>
        //   <div className="task-details-imp" onClick={this.props.getUserProfInfo}>
        //     Owner: This Person
        //   </div>
        //   <div className="task-priority">
        //     Priority Level: 8
        //   </div>
        //   <div className="task-man-hour-budget">
        //     Man Hours Required Estimate: 10
        //   </div>
        //   <div className="task-date-completed">
        //     Completed on: 05/10
        //   </div>
        //   <div className="task-status">
        //     In progress
        //   </div>
        //   // <div className="task-depends-on">
        //   //   Prerequisite tasks: <a href="#">Task B</a>, <a href="#">Task C</a>
        //   // </div>
        //   <div className="task-desc">
        //     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //   </div>
        //   <div className="task-tags">
        //     Tags: HTML, CSS, Javascript
        //   </div>
        //   <div className="task-date-assigned">
        //     Assigned on: 05/01
        //   </div>
        // </div> */}
      </div>




    );
  }
};

export default Task;


Task.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
}
