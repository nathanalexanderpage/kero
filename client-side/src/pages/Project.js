import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import '../App.css';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }


  render() {
    if(this.props.user){
      return (
            <Container >
              <Row>
                <Col>
                  <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button color="danger" onClick={this.toggle}>New Sprint</Button>
                  </Form>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                  <ModalHeader toggle={this.toggle}>Create a New Sprint</ModalHeader>
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
    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Project;
