import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Login extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event: any) {
    alert('Uma dissertação foi enviada: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Dissertação:
          <textarea value={this.state.value} onChange={this.handleChange} />
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