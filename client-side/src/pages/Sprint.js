import React, { Component } from 'react';
import { connect } from 'react-redux';


class Sprint extends Component {
  render() {
    
    if(!this.props.user){
      return (
        <div>
          <p>This page is for viewing information on a sprint. You must be <a href="/login">logged in</a> to see it.</p>
        </div>
      );
    }
    return(
      <div>
        <div className="sprint-name">
          <h2>Sprint X</h2>
        </div>
        <div className="sprint-date-start">
          Start Date: 05/01
        </div>
        <div className="sprint-date-end">
          End date: 05/09
        </div>
        <div className="sprint-priority">
          Part of project: Project X
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

export default Sprint;
