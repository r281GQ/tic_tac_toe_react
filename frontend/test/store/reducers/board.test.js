import * as _ from 'lodash';

import * as board from './../../../src/store/actions/board';
import reducer from './../../../src/store/reducers/board';

describe('board reducer', () => {
  let INITIAL_STATE;

  beforeEach(() => {
    INITIAL_STATE = {
      board: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
      },
      settings: {
        playerSign: 'x',
        computerSign: 'o',
        isCalculating: false,
        isModalOpen: false,
        message: ''
      }
    };
  });

  it('should not change isModalOpen and message on CHECK_GAME_STATE if game is neither a won or a tie', () => {
    const nextState = reducer(INITIAL_STATE, { type: board.CHECK_GAME_STATE });

    expect(nextState.settings.isModalOpen).toBeFalsy();
    expect(nextState.settings.message).toBe('');
  });

  it('should change isModalOpen to true and message to You have lost! on CHECK_GAME_STATE if game is won', () => {
    INITIAL_STATE.board = {
      1: 'COMPUTER',
      2: 'COMPUTER',
      3: 'COMPUTER',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    };

    const nextState = reducer(INITIAL_STATE, { type: board.CHECK_GAME_STATE });

    expect(nextState.settings.isModalOpen).toBeTruthy();
    expect(nextState.settings.message).toBe('You have lost!');
  });

  it('should change isModalOpen and message message to No more steps left! on CHECK_GAME_STATE if game is a tie', () => {
    INITIAL_STATE.board = {
      1: 'COMPUTER',
      2: 'PLAYER',
      3: 'COMPUTER',
      4: 'PLAYER',
      5: 'PLAYER',
      6: 'COMPUTER',
      7: 'COMPUTER',
      8: 'PLAYER',
      9: 'COMPUTER'
    };
    const nextState = reducer(INITIAL_STATE, { type: board.CHECK_GAME_STATE });

    expect(nextState.settings.isModalOpen).toBeTruthy();
    expect(nextState.settings.message).toBe('No more steps left!');
  });

  it('MAKE_COMPUTER_MOVE', () => {
    INITIAL_STATE.board = {
      1: '',
      2: '',
      3: 'PLAYER',
      4: '',
      5: 'COMPUTER',
      6: '',
      7: '',
      8: '',
      9: 'PLAYER'
    };
    const nextState = reducer(INITIAL_STATE, {
      type: board.MAKE_COMPUTER_MOVE
    });
    expect(nextState.board[6]).toBe('COMPUTER');
  });

  it('MAKE_HUMAN_MOVE', () => {
    const nextState = reducer(INITIAL_STATE, {
      type: board.MAKE_HUMAN_MOVE,
      payload: 1
    });
    expect(nextState.board[1]).toBe('PLAYER');
  });

  it('RESET_BOARD', () => {
    let currentState = _.cloneDeep(INITIAL_STATE);

    currentState.board = {
      1: '',
      2: '',
      3: 'PLAYER',
      4: '',
      5: 'COMPUTER',
      6: '',
      7: '',
      8: '',
      9: 'PLAYER'
    };

    currentState.settings = {
      playerSign: 'x',
      computerSign: 'o',
      isCalculating: true,
      isModalOpen: false,
      message: 'some text'
    };

    const nextState = reducer(currentState, {
      type: board.RESET_BOARD
    });

    expect(nextState).toEqual(INITIAL_STATE);
  });

  it('INIT_CALC', () => {
    const nextState = reducer(INITIAL_STATE, {
      type: board.INIT_CALC
    });

    expect(nextState.settings.isCalculating).toBe(true);
  });

  it('CLOSE_CALC', () => {
    INITIAL_STATE.settings.isCalculating = true;

    expect(INITIAL_STATE.settings.isCalculating).toBe(true);

    const nextState = reducer(INITIAL_STATE, {
      type: board.CLOSE_CALC
    });

    expect(nextState.settings.isCalculating).toBe(false);
  });

  it('OPEN_MODAL', () => {
    const nextState = reducer(INITIAL_STATE, {
      type: board.OPEN_MODAL,
      payload: 'some message'
    });

    expect(nextState.settings.isModalOpen).toBe(true);

    expect(nextState.settings.message).toBe('some message');
  });
});
