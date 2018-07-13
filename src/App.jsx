import React from 'react';
import Greeter from './Greeter';


//"life cycle method
class App extends React.Component {
  componentDidMount() {
    console.log('run only once');
  }

  componentDidUpdate() {
    console.log('run on update');
  }

  render() {
    const timestamp = Date.now();

    return (
      <div>
        <h1>Oi!</h1>
        <Greeter name={'Martha'} mood={'fine'} time={timestamp}/>
      </div>
    );
  }
}

export default App;
