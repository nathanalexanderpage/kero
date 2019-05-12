import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from '../constants/server';

class Dash extends Component {
  render () {
    if(this.props.user){
      return (<Redirect to="/profile" />);
    }
    return (
      <div>
        <h2>
          Dash
        </h2>
      </div>
    )
  }
}

export default Dash;
