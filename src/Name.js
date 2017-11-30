import React,{ Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>Hello {this.props.name} World.</div>
    );
  }
}

export default Name;
