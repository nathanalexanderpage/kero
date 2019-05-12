import React, { Component } from 'react';
import { connect } from 'react-redux';


class Board extends Component {
  render() {


    return (
      <div id="content">
        <h1>Board </h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

export default connect(mapStateToProps, {})(Board);
