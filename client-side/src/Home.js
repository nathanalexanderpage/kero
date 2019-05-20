import React, { Component } from 'react';
import {Container, Button} from 'reactstrap'

class Home extends Component {
  render() {
    return(
      <Container>
        <div className="home-info">
          <h1>Kero, task management for Software Engineers!</h1>
          <p>Kero is more than a to-do list. It tracks tasks from beginning to end, helps admins delegate and sets deadlines to make sure projects get done on time.</p>
          <p>
          Task management software, like Kero, empowers software engineers to work more productively and efficiently together.
          </p>
          <Button>Sign Up</Button>
        </div>
        <img src="https://cdn-images-1.medium.com/max/853/1*zJkojKNpFD9HFGPJLCs15Q.jpeg" className="coding-img" />
      </Container>

      );
  }
}

export default Home;
