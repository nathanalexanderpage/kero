import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import '../App.css';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
        number: 0,
        startDate:'',
        finishDate:'',
        modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  handleNumberChange = (e) => { this.setState({ number: e.target.value }); }
  handleStartDateChange = (e) => { this.setState({ startDate: e.target.value }); }
  handleFinishDateChange = (e) => { this.setState({ finishDate: e.target.value }); }


  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newState = {...this.state}
    delete newState.modal
    let token = localStorage.getItem('serverToken');
    console.log(newState);
    axios.post(`${SERVER_URL}/sprints/post`, newState,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
      console.log('Success');
      console.log(response);
      this.setState({
        number: 0,
        startDate:'',
        finishDate:'',
      })
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
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
                    <Form onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggle}>Create a New Sprint</ModalHeader>
                        <ModalBody>
                          <Label>Number</Label>
                          <Input
                            type="number"
                            name="number"
                            placeholder="Sprint number"
                            value={this.state.number}
                            onChange={this.handleNumberChange}
                              />
                              <Label>Start Date</Label>
                               <Input
                                type="date"
                                name="startDate"
                                placeholder="date placeholder"
                                value={this.state.startDate}
                                onChange={this.handleStartDateChange}
                                  />
                              <Label>End Date</Label>
                                <Input
                                type="date"
                                name="finishDate"
                                placeholder="date placeholder"
                                value={this.state.finishdate}
                                onChange={this.handleFinishDateChange}
                                  />
                                </ModalBody>
                              <ModalFooter>
                                <Button color="primary" type="submit" onClick={this.toggle}>Create</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                          </ModalFooter>
                    </Form>
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
