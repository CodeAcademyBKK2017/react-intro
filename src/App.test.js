import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('cellClickHandleCallBack it will work collectly', () => {
    const app = shallow(<App />).instance();
    app.cellClickHandleCallBack('o');
    expect(app.state.player).toEqual(1); 
  });

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