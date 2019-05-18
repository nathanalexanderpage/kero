import React, { Component } from 'react';
import { Container, Row, Col, Button,  Modal, ModalHeader, ModalBody,
  ModalFooter, Input, Label, Form, FormGroup, Card, CardTitle, CardText } from 'reactstrap';
import '../App.css';
import SERVER_URL from '../constants/server';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import { Route, Redirect, withRouter } from 'react-router'


class AdminProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        startDate: '',
        finishDate: '',
        modalCreate: false,
        modalEdit: false,
        redirect: false,
        newboard: ''
    };

    this.toggleCreate = this.toggleCreate.bind(this);
  }

  handleTitleChange = (e) => { this.setState({ title: e.target.value }); }
  handleStartDateChange = (e) => { this.setState({ startDate: e.target.value }); }
  handleFinishDateChange = (e) => { this.setState({ finishDate: e.target.value }); }
  handlePurposeChange = (e) => { this.setState({ purpose: e.target.value }); }

  componentDidMount = () => {
    // GET USER INFO

  }
  toggleCreate() {
      this.setState(prevState => ({
          modalCreate: !prevState.modalCreate
      }));
  }

  handleSubmit = (e) => {

    e.preventDefault();
    let newState = {...this.state};
    delete newState.modalCreate;
    delete newState.modalEdit;
    delete newState.redirect;
    delete newState.newboard;
    console.log("esto es lo que mandas",newState);
    let token = localStorage.getItem('serverToken');
    axios.post(`${SERVER_URL}/sprints/`, newState,
      {
        headers: {
         'Authorization' : `Bearer ${token}`
       }
     })
    .then(response=> {
      console.log('Success');
      this.setState({
          title: '',
          startDate: '',
          finishDate: '',
          purpose:'',
          newboard:response.data._id,
          redirect: true
      })
      this.props.rerender()
    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
  }


  render() {

    if(this.state.redirect === true){
    return(
      <Redirect to={{
      pathname: '/board/'+ this.state.newboard
       }} />
   )
   }

    if(this.props.user){
      let sprintsList = this.props.sprints.map((sprint, i) => {
        return (
          <div key={`sprint-${sprint._id}`}>
            <Link to={`/board/${sprint._id}`}>
              <Card body className="text-center" id="card-body">
                <CardTitle>Title: {sprint.title}</CardTitle>
              </Card>
            </Link>
          </div>
        );
      });

      return (
        <Container className="profile">
          <Row>
            <Col md="6">
              <img  id="userprofile" src={this.props.user.image}  />
                <h5 id="username">{this.props.user.firstName + ' ' + this.props.user.lastName}</h5>
                <h5>Email : {this.props.user.email}</h5>
                <h5>Your role is : {this.props.user.role}</h5>
                <h5>You are working in Project: {this.props.user.project}</h5>
            </Col>
            <Col md="6" >
              <Col><h1>Your Sprints</h1></Col>
              <Col id="displayProjects">{sprintsList}</Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form
                inline
                onSubmit={(e) => e.preventDefault()}
              >
                <Button
                  color="danger"
                  onClick={this.toggleCreate}
                >
                  New Sprint
                </Button>
              </Form>
              <Modal
                isOpen={this.state.modalCreate}
                toggleCreate={this.toggleCreate}
                className={this.props.className}
              >
                <Form onSubmit={this.handleSubmit}>
                <ModalHeader toggleCreate={this.toggleCreate}>Create a New Sprint</ModalHeader>
                <ModalBody>
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="title placeholder"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="startDate"
                    placeholder="start date placeholder"
                    value={this.state.startDate}
                    onChange={this.handleStartDateChange}
                  />
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    name="finishDate"
                    placeholder="finish date placeholder"
                    value={this.state.finishDate}
                    onChange={this.handleFinishDateChange}
                  />
                  <Label > Author </Label>
                  <Input
                    name="author"
                    plaintext
                    value={this.props.user.firstName+ ' ' + this.props.user.lastName}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    type="submit" onClick={this.toggleCreate}
                  >
                    Create
                  </Button>{' '}
                    <Button color="secondary" onClick={this.toggleCreate}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
          </Col>
        </Row>
    </Container>
    );
    }
    return (
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
    );
  }
}


export default AdminProfile;
