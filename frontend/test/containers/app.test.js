import React from 'react';
import { shallow } from 'enzyme';
import { PureApp } from './../../src/containers/app';
import sinon from 'sinon';

describe('App test', () => {
  it('should render', () => {
    const spyNewGame = sinon.spy();
    const spyMakeHumanMove = sinon.spy();
    const spyComputerMove = sinon.spy();
    const spyCheckForGameState = sinon.spy();

    const component = shallow(
      <PureApp
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
        makeHumanMove={spyMakeHumanMove}
        makeComputerMove={spyComputerMove}
        checkForGameState={spyCheckForGameState}
        playerSign="x"
        computerSign="o"
        isCalculating={false}
        isModalOpen={false}
        message=""
        newGame={spyNewGame}
      />
    );

    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();

    component.instance()._createNewGame();
    component.instance()._makeHumanMove(1)();

    expect(spyMakeHumanMove.calledWith(1)).toBeTruthy();
    expect(spyNewGame.calledOnce).toBeTruthy();
    expect(spyComputerMove.calledOnce).toBeTruthy();
    expect(spyCheckForGameState.calledTwice).toBeTruthy();
  });
});
