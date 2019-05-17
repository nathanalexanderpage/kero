import React, { Component } from 'react';
import {Col, Container, Row, Form, Button} from 'reactstrap'

class SwimLane extends Component {
  render() {
    return (
      <Container >
        <Row >
          <Col>
          <div>{this.props.project}</div>
            <div>{this.props.sprint}</div>
            <Row id="mainboard">
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name'>To Do</h6>
                  <hr></hr>
                </ div>
              </Col>
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name'>Doing</h6>
                  <hr></hr>
                </div>
              </Col>
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name' id='code-review'>Code Review</h6>
                  <hr></hr>
                    {/* <Button outline color="primary">👍</Button>
                    <Button outline color="primary">👎</Button> */}
                </ div>
              </Col>
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name'>Done</h6>
                  <hr></hr>
                </div>
              </Col>
            </Row>
            </Col>
        </Row>
      </Container>
    )
  }
}

export default SwimLane