import React, { Component } from 'react';
import './App.css';

import Hello from './components/Hello/Hello.component';
import Box from './components/Box/Box.component';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Hello name="Chong" test={{test:123}}/>
				<Box />
			</div>
		);
	}
}

export default App;
