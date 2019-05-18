import React, { Component } from 'react';
import {Card, Col, Container, Row} from 'reactstrap'

class SwimLane extends Component {
  // You will have props!

  render() {
    // map through this.props.tasks, call your variable below
    let taskCards = this.props.tasks.map((task)=> {
      return <Card task={task} />
    })

    return (
      <Container >
        <Row >
          <Col>
          <div>{this.props.project}</div>
            <div>{this.props.sprint}</div>
            <Row id="mainboard">
              <Col>
                <div className= 'board-columns'>
                  <h6 className= 'column-name'>{this.props.title}</h6>
                  <hr></hr>
                  {taskCards}
                </ div>
              </Col>
            </Row>
            </Col>
        </Row>
      </Container>
    )
  }
}

export default SwimLane