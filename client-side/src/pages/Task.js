import React, { Component } from 'react';
import { connect } from 'react-redux';


class Task extends Component {
  render() {
    if(!this.props.user){
      return (
        <div>
          <p>This page is for viewing information on a task. You must be logged in to see it.</p>
          <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
        </div>
      );
    }
    return(
      <div>
        <div className="task-name">
          <h2>Task X</h2>
        </div>
        <div className="task-details-imp">
          Owner: This Person
        </div>
        <div className="task-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="task-tags">
          Tags: HTML, CSS, Javascript
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

export default Task;
