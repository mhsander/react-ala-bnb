import React from 'react';
import Greeter from './Greeter';


// function App() {
//   return (
//     <div>
//       <h1>Oi!</h1>
//       <p>hey!</p>
//       <Greeter />
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    console.log('run only once');
  }

  componentDidUpdate() {
    console.log('run on update');
  }

  render() {
    return (
      <div>
        <h1>Oi!</h1>
        <p>hey!</p>
        <Greeter name={'Martha'} mood={'fine'}/>
      </div>
    );
  }
}

export default App;
