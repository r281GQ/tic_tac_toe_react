import React from 'react';
import { shallow } from 'enzyme';
import GithubButton from './../../src/components/github_button';

describe('GithubButton test', () => {
  it('should render', () => {
    const component = shallow(<GithubButton />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
