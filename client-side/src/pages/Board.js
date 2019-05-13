import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class Board extends Component {
  render() {



      if(this.props.user){
        return (
          <Container >
            <Row id="mainboard">
              <Col>
               <h1>To Do</h1>
              </Col>
              <Col>
                <h1>Doing</h1>
              </Col>
              <Col>
                <h1>Done</h1>
              </Col>
            </Row>
          </Container>
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


export default Board;
