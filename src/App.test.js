import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Button component', () => {

  it('App Snapshot Test', () => {
    // const box = shallow(<Box data={mock} />).instance();
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});