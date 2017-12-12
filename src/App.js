import React, { Component } from 'react';
import './App.css';

// import Hello from './components/Hello/Hello.component';
import Box from './components/Box/Box.component';
import Header from './components/Header/Header.component';
import Credit from './components/Credit/Credit.component';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Hello name="Chong" test={{test:123}}/> */}
				<Header title="Welcome to TicTacToe" subtitle="Start with X" />
				<Box />
				<Credit name="chong"/>
			</div>
		);
	}
}

export default App;
