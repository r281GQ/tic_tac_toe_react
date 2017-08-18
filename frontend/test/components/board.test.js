import React from 'react';
import { shallow } from 'enzyme';
import Board from './../../src/components/board';

describe('calorie_target_result_sum_label', () => {
  it('should render', () => {
    const component = shallow(
      <Board
        board={{
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: ''
        }}
        makeHumanMove={value => value}
        playerSign="X"
        computerSign="O"
      />
    );
    expect(component).toHaveLength(1);
  });
});
