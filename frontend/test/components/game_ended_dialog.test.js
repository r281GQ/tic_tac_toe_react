import React from 'react';
import { shallow } from 'enzyme';
import GameEndedDialog from './../../src/components/game_ended_dialog';

describe('calorie_target_result_sum_label', () => {
  it('should render', () => {
    const component = shallow(
      <GameEndedDialog
        createNewGameHandler={value => value}
        isModalOpen={false}
      />
    );
    expect(component).toHaveLength(1);
  });
});
