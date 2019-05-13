import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignIn extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Email" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="Password" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}