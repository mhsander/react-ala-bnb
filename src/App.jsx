import React from 'react';
import Greeter from './Greeter';

class App extends React.Component {
  state = {
    timestamp1: Date.now(),
    timestamp2: Date.now(),
  };

  handleUpdateTimestamp1 = () => {
    this.setState({
      timestamp1: Date.now(),
    });
  };

  handleUpdateTimestamp2 = () => {
    this.setState({
      timestamp2: Date.now(),
    });
  };

  render() {
    return (
      <div>
        <h1>Our Greeter App</h1>
        <Greeter
          name="Barney"
          time={this.state.timestamp1}
          doTheClick={this.handleUpdateTimestamp1}
        />
        <Greeter
          name="Thomas"
          time={this.state.timestamp2}
          doTheClick={this.handleUpdateTimestamp2}
        />
      </div>
    );
  }
}

export default App;
