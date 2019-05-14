import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import axios from 'axios';


class Sprint extends Component {

  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        sprintTasks: []
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

  render() {
    if(!this.props.user){
      return (
        <div>
          <p>This page is for viewing information on a sprint. You must be <a href="/login">logged in</a> to see it.</p>
        </div>
      );
    }
    return(
      <Container >
        <Row>
          <Col>
            <Form inline onSubmit={(e) => e.preventDefault()}>
              <Button color="danger" onClick={this.toggle}>New Task</Button>
            </Form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
            <ModalHeader toggle={this.toggle}>Create a New Task</ModalHeader>
            <ModalBody>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="date placeholder"
                  />
              <Label>Start Date</Label>
              <Input
                type="date"
                name="startdate"
                placeholder="date placeholder"
                  />
              <Label>End Date</Label>
              <Input
                type="date"
                name="finishdate"
                placeholder="date placeholder"
                  />
              <Label>Purpose</Label>
              <Input
                type="textarea"
                name="purpose"
                placeholder="Write something"
                rows={5}
                  />
              <Label > Author </Label>
              <Input
                plaintext value={this.props.user.name}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Create</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
};


export default Sprint;
