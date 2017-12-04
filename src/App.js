import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box.components';

class App extends Component {
  render() {
    // const a = <Hello name="Bank"/>
    // const b = <Hello name="Chao"/>
    // return (
    //   [a,b]
    // );
    const titacto = 
    [
      ['O', 'X', 'O'],
      ['X', 'O', 'O'],
      ['X', 'X', 'O']
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Box rowData={titacto}/>
        
      </div>
    );
  }
}


export default App;

//const a = React.createElement('div', {}, 'Hello');
//console.log(a);
//const b = <div>test</div>
// https://github.com/CodeAcademyBKK2017/react-intro
// https://facebook.github.io/jest/docs/en/tutorial-react.html#content