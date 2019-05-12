import React, { Component } from 'react';
import { connect } from 'react-redux';


class Board extends Component {
  render() {



      if(this.props.user){
        return (
            <div>
              <h2>Board!</h2>

            </div>
          );
      }
      return(
        <div>
          <p>This is board page. You must be logged in to see it.</p>
          <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
        </div>
        );

  }
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

export default Board;
