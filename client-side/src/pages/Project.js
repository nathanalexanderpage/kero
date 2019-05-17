import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form } from 'reactstrap';
import '../App.css';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import { Redirect , Router, withRouter } from 'react-router-dom';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
        number: 0,
        startDate:'',
        finishDate:'',
        modal: false,
        projectdata:{}
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
    axios.post(`${SERVER_URL}/sprints`, newState,
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

  getProject = () => {
    console.log("Im working!!!");
    let token = localStorage.getItem('serverToken');
    axios.get(`${SERVER_URL}/projects/${this.props.id}`,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
      console.log('Success');
      console.log('response from project id',response);
      this.setState({
        projectdata: response.data,
      });
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
  }


  componentDidMount = () => {
    // GET USER INFO
    this.getProject();
  }



  render() {

let projectData = this.state.projectdata

      return (


          <Container >
            <Row>
              <div >
                <div>
                 <h1>Title: {projectData.title}</h1>
                </div>
                <div>
                  Start date: {projectData.startdate}
                </div>
                <div>
                  End date: {projectData.finishdate}
                </div>
                <div>
                  Purpose: {projectData.purpose}
                </div>
                <div>
                  Admin: <img  id="userprofile" src={projectData.admin}  />
                </div>
              </div>

            </Row>
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


    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Project;
