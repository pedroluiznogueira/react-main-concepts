import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Login extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {value: ''};
    console.log(this.state.value);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    console.log(event.target)
    this.setState({value: event.target.value});
  }

  handleSubmit(event: any) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);

export default Login;