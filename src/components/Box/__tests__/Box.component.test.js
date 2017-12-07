import React from 'react';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';


describe('Button component', () => {
  const mock = [
    {
      items: [' ',' ',' '],
      rowkeys: 'avc'
    },
    {
      items: [' ',' ',' '],
      rowkeys: 'avhc'
    },
    {
      items: [' ',' ',' '],
      rowkeys: 'ajvc'
    }
  ];
  
  it('mapFunction function is work.',() => {
    const box = shallow(<Box data={mock} />).instance();
    const res = box.mapFunction(mock[0]);
    const expected = <Row cellData={[' ',' ',' ']} key={'avc'} clickHandle={box.callHandle}/>;
    expect(res).toEqual(expected);    
  });

  it('Box Snapshot Test', () => {
    const box = shallow(<Box data={mock} />).instance();
    const tree = renderer.create(<Box Data={mock} callHandle={box.cellClickHandleCallBack}/>);
    expect(tree).toMatchSnapshot();
  });
});