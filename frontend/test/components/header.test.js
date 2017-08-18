import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../src/components/header';

describe('Header test', () => {
  it('should render', () => {
    const component = shallow(<Header createNewGameHandler={value => value} />);
    expect(component).toHaveLength(1);
  });
});
