import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    
    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }


    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        </div>
      );
    }
}

export default Clock;