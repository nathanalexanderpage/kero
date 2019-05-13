import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './pages/Profile';
import AdminProfile from './pages/AdminProfile';
import Signup from './auth/Signup';
import Board from './pages/Board';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    // GET USER INFO
  }

  resetUser = () => {
    this.setState({user: null});
  }

  getUser = () => {
    // TO do: SEE IF THERE'S A TOKEN
    console.log(localStorage.getItem('serverToken'));
    let token = localStorage.getItem('serverToken');
    if (token) {
      axios.post(`${SERVER_URL}/auth/current/user`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      .then(response=> {
        console.log(response);
        this.setState({user: response.data.user})
      })
      .catch(err=> {
        this.resetUser();
        console.log('error getting user by token:');
        console.log(err);
      })
    } else {
      this.resetUser();
      console.log('no user token found');
    }

    // IF THERE IS, TRY TO GET USER INFO
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Nav user={this.state.user} resetUser={this.resetUser} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} getUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} getUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
          <Route path="/adminprofile" component={
              () => (<AdminProfile user={this.state.user} />)
            } />
          <Route path="/board" component={
              () => (<Board  user={this.state.user}/>)
            } />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

export default App;
