import React, { Component } from 'react';
import Movies from './components/Movies'

class App extends Component {
  state = {  }
  render() { 
    return (
      <main role="main" className="container">
      <Movies/>
      </main>
    );
  }
}

export default App;