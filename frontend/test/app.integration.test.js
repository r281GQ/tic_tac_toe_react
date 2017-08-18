import React from 'react';
import { mount } from 'enzyme';
import App from './../src/containers/app';

describe(' test', () => {
  it('should render', () => {
    const component = mount(
      <App/>
    );
    expect(component).toHaveLength(1);
  });
});
