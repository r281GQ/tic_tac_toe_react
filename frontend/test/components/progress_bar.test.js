import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './../../src/components/progress_bar';

describe('ProgressBar test', () => {
  it('should render', () => {
    const component = shallow(
      <ProgressBar/>
    );
    expect(component).toHaveLength(1);
  });
});
