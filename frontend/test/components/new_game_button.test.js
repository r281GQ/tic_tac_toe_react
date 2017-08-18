import React from 'react';
import { shallow } from 'enzyme';
import NewGameButton from './../../src/components/new_game_button';

describe('NewGameButton test', () => {
  it('should render', () => {
    const component = shallow(
      <NewGameButton createNewGameHandler={value => value} />
    );
    expect(component).toHaveLength(1);
  });
});
