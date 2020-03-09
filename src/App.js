import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {console.log('prop  children App', this.props.children )}
        {this.props.children}
      </div>
    );
  }
}

export default App;
