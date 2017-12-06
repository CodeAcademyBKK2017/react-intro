import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
	render() {

		// console.log(this.props);

		// return (
		//   <div>
		//     <div>
		//       Hello
		//     </div>
		//     <div>
		//       {this.props.name} World
		//     </div>
		//   </div>
		// );

		const hello = <div key="1">Hello</div>
		const world = <div key="2" >{this.props.name} World</div>
		return [hello, world];
	}
}

Hello.propTypes = {
	name: PropTypes.string.isRequired
};

export default Hello;
