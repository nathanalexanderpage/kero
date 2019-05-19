import React, { Component } from 'react';
import { Container, Row, Card, Button, CardTitle, CardText, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form  } from 'reactstrap';
import '../App.css';
import axios from 'axios';
import SERVER_URL from '../constants/server';
import Swimlane from './SwimLane'


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
        assignedTo:'',
        title:'',
        manHourBudget: 0,
        status:'',
        dateAssigned:'',
        dateCompleted:'',
        prerequisiteTasks:'',
        description:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  }

  handleAssignedToChange = (e) => { this.setState({ assignedTo: e.target.value }); }
  handleTitleChange = (e) => { this.setState({ title: e.target.value }); }
  handleManHourBudgetChange = (e) => { this.setState({ manHourBudget: e.target.value }); }
  handleStatusChange = (e) => { this.setState({ status: e.target.value }); }
  handleDateAssignedChange = (e) => { this.setState({ dateAssigned: e.target.value }); }
  handleDateCompletedChange = (e) => { this.setState({ dateCompleted: e.target.value }); }
  handlePrerequisiteTasksChange = (e) => { this.setState({ prerequisiteTasks: e.target.value }); }
  handleDescriptionChange = (e) => { this.setState({ description: e.target.value }); }


  handleSubmit = (e) => {

    e.preventDefault();
    let newState = {...this.state}
    delete newState.modal
    console.log(newState);
    let token = localStorage.getItem('serverToken');
    axios.post(`${SERVER_URL}/tasks/post`, newState,
      {
        headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .then(response=> {
      console.log('Success');
      console.log(response);
      this.setState({
        modal : {
          assignedTo:'',
          title:'',
          manHourBudget: 0,
          status:'',
          dateAssigned:'',
          dateCompleted:'',
          prerequisiteTasks:'',
          description:''
        },
        tasks: [
          {
            title: "Do stuff",
            desc: "So much stuff to do, should really do",
            manHourBudget: 20,
            status: "to do",
            dateAssigned: new Date(),
            dateCompleted: null
          },
          {
            title: "Do Things",
            desc: "Make things that do things",
            manHourBudget: 10,
            status: "doing",
            dateAssigned: new Date(),
            dateCompleted: null
          },
          {
            title: "Complete Thing",
            desc: "take the partially done thing and complete it",
            manHourBudget: 50,
            status: "code review",
            dateAssigned: new Date(),
            dateCompleted: new Date()
          },
          {
            title: "Finish",
            desc: "Run down that damn finish line",
            manHourBudget: 2,
            status: "complete",
            dateAssigned: new Date(),
            dateCompleted: new Date()
          },
        ]
      })

    })
    .catch(err => {
      console.log('error axios to server:');
      console.log(err);
    })
  }

  // TODO Make call to DB to get all tasks associated with user, then set state to returned tasks

  render() {
    if(!this.props.user){
      return (
        <div>
          <p>This page is for viewing information on a sprint. You must be <a href="/login">logged in</a> to see it.</p>
        </div>
      );
    }

    let toDo = []
    let doing = []
    let codeReview = []
    let complete = []

    // iterate through this.state.tasks and push tasks to their relevant array

    return(
      <Container >
        <Row >
          <Col>
            <div>{this.props.sprint}</div>
            <Row id="mainboard">
              <Col>
                <Swimlane title="To-Do" tasks={toDo} />
              </Col>
              <Col>
                <Swimlane title="Doing" task={doing} />
              </Col>
              <Col>
                <Swimlane title="Code-Review" task={codeReview}/>
              </Col>
              <Col>
                <Swimlane title="Done" task={complete}/>
              </Col>
            </Row>
            <Form inline onSubmit={(e) => e.preventDefault()}>
              <Button color="primary"
                      onClick={this.toggle}
                      id="new-task">➕ </Button>
            </Form>
            <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className} >
              <Form onSubmit={this.handleSubmit}>
                <ModalHeader toggle={this.toggle}>Create a New Task</ModalHeader>
                <ModalBody>
                  <Label>Assigned To</Label>
                  <Input
                    type="text"
                    name="assignedTo"
                    placeholder="Who is gonna do this?"
                    value={this.state.assignedTo}
                    onChange={this.handleAssignedToChange}
                      />
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="Give it a name"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                      />
                    <Label>Man hours</Label>
                  <Input
                    type="number"
                    name="manHourBudget"
                    placeholder="How many hours?"
                    value={this.state.manHourBudget}
                    onChange={this.handleManHourBudgetChange}
                      />
                    <Label for="Select Role">Status</Label>
                  <Input type="select"
                          name="status"
                          value={this.state.status}
                          onChange={this.handleStatusChange}>
                            <option defaultValue="todo">To Do</option>
                            <option value="inprogress">In progress</option>
                            <option value="codereview">Code review</option>
                            <option value="done">Done</option>
                  </Input>
                  <Label>Assigned Date</Label>
                  <Input
                    type="date"
                    name="dateAssigned"
                    placeholder="date placeholder"
                    value={this.state.dateAssigned}
                    onChange={this.handleDateAssignedChange}
                      />
                    <Label>Completed Date</Label>
                  <Input
                    type="date"
                    name="dateCompleted"
                    placeholder="date placeholder"
                    value={this.state.dateCompleted}
                    onChange={this.handleDateCompletedChange}
                      />
                    <Label>Prerequisite Tasks</Label>
                  <Input
                    type="text"
                    name="prerequisiteTasks"
                    placeholder="related tasks"
                    value={this.state.prerequisiteTasks}
                    onChange={this.handlePrerequisiteTasksChange}
                      />
                    <Label>Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    placeholder="Write something"
                    rows={5}
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
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
};

export default Board
