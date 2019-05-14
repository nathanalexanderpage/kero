import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Board extends Component {
  render() {
      if(this.props.user){
        return (
          <Container >
            <Row id="mainboard">
              <Col>
                  <div>
                  <h1>To Do</h1>
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional             content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                  <Card body className="text-center">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional             content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                  <Card body className="text-right">
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional             content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                  </ div>
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
