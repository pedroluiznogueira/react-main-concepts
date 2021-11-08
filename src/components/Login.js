import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggledOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClick() {
    this.setState(state => ({ 
      isToggledOn: !state.isToggledOn
    }))
  }

    render() {
      return (
        <><Form className="form-content" onSubmit={this.handleSubmit}> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleClick}>
            {this.state.isToggledOn ? 'ON' : 'OFF'}
          </Button>
        </Form></>
    );
    }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

export default Login;