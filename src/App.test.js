import React from 'react';
import renderer from 'react-test-renderer';
import  {shallow} from 'enzyme';
import App from './App';

describe('App component', () => {
  it('App: renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});