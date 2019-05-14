import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText  } from 'reactstrap';
import '../App.css';

class Board extends Component {
  render() {
      if(this.props.user){
        return (
          <Container >
            <Row id="mainboard">
              <Col>
                <div>
                <h1>To Do</h1>
                <Card body className="text-center">
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                <Button>Go to task <a href="/task"></a></Button>
                </Card>
                </ div>
              </Col>
              <Col>
              <div>
                <h1>Doing</h1>
                <Card body className="text-center">
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                  <Button>Go to task <a href="/task"></a></Button>
                </Card>
              </div>
              </Col>
              <Col>
              <div>
                <h1>Done</h1>
                <Card body className="text-center">
                  <CardTitle></CardTitle>
                  <CardText></CardText>
                  <Button>Go to task <a href="/task"></a></Button>
                </Card>
              </div>
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
