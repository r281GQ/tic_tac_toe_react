import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import {
  makeHumanMove,
  newGame,
  makeComputerMove,
  checkForGameState
} from './../../../src/store/action_creators/board';

const middleWares = [thunk];

describe('board actions creators', () => {
  let store;

  beforeEach(() => {
    store = createMockStore(middleWares)({
      board: {
        board: {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: 'COMPUTER',
          9: 'PLAYER'
        },
        settings: {
          playerSign: 'x',
          computerSign: 'o',
          isCalculating: false,
          isModalOpen: false,
          message: ''
        }
      }
    });
  });

  describe('newGame', () => {
    it('should return type RESET_BOARD', () => {
      store.dispatch(newGame());

      expect(store.getActions()[0].type).toBe('RESET_BOARD');
    });
  });

  describe('checkForGameState', () => {
    it('should return type CHECK_GAME_STATE', () => {
      store.dispatch(checkForGameState());

      expect(store.getActions()[0].type).toBe('CHECK_GAME_STATE');
    });
  });

  describe('makeComputerMove', () => {
    it('should not dispatch INIT_CALC MAKE_COMPUTER_MOVE CLOSE_CALC action when board is not full', () => {
      store.dispatch(makeComputerMove());

      expect(store.getActions()[0].type).toBe('INIT_CALC');
      expect(store.getActions()[1].type).toBe('MAKE_COMPUTER_MOVE');
      expect(store.getActions()[2].type).toBe('CLOSE_CALC');
    });

    it('should dispatch only a player move when board is full', () => {
      store.getState().board.board = {
        1: 'PLAYER',
        2: 'PLAYER',
        3: 'PLAYER',
        4: 'PLAYER',
        5: 'PLAYER',
        6: 'PLAYER',
        7: 'PLAYER',
        8: 'PLAYER',
        9: 'PLAYER'
      };

      store.dispatch(makeComputerMove());
      expect(store.getActions().length).toBe(0);
    });
  });

  describe('makeHumanMove', () => {
    it('should return a player and computer move between init and close calc if everythin is fine', () => {
      store.dispatch(makeHumanMove(1));
      expect(store.getActions()[0].payload).toBe(1);
      expect(store.getActions()[0].type).toBe('MAKE_HUMAN_MOVE');
      // expect(store.getActions()[1].type).toBe('MAKE_MOVE');
      // expect(store.getActions()[2].type).toBe('MAKE_MOVE');
      // expect(store.getActions()[3].type).toBe('CLOSE_CALC');
    });

    it('should not dispatch any action when the board segment is already marked', () => {
      store.getState().board.board[1] = 'PLAYER';

      store.dispatch(makeHumanMove(1));
      expect(store.getActions().length).toBe(0);
    });
  });
});
