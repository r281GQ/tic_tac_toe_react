import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';
import {
  makeHumanMove,
  newGame
} from './../../../src/store/action_creators/board';

import {
  movesLeft
} from './../../../src/services/minimax';

import sinon from 'sinon';

const middleWares = [thunk];

describe('board actions creators', () => {
  beforeAll(() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  });

  afterAll(() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
  });
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

  describe('makeHumanMove', () => {
    it('should return a player and computer move between init and close calc if everythin is fine', async done => {
      try {
        await store.dispatch(makeHumanMove(1));
        expect(store.getActions()[0].type).toBe('INIT_CALC');
        expect(store.getActions()[1].type).toBe('MAKE_MOVE');
        expect(store.getActions()[2].type).toBe('MAKE_MOVE');
        expect(store.getActions()[3].type).toBe('CLOSE_CALC');
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should not dispatch any action when an other one is currently running', async done => {
      store.getState().board.settings.isCalculating = true;
      try {
        await store.dispatch(makeHumanMove(1));
        expect(store.getActions().length).toBe(0);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should not dispatch any action when the board segment is already marked', async done => {
      store.getState().board.board[1] = 'PLAYER';
      try {
        await store.dispatch(makeHumanMove(1));
        expect(store.getActions().length).toBe(0);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should dispatch only a player move when board is full', async done => {
      store.getState().board.board = {
        1: '',
        2: 'PLAYER',
        3: 'PLAYER',
        4: 'PLAYER',
        5: 'PLAYER',
        6: 'PLAYER',
        7: 'PLAYER',
        8: 'PLAYER',
        9: 'PLAYER'
      };

      const spy = sinon.stub(movesLeft).returns([]);
      // const myMock = jest.fn();
// console.log(myMock());
// > undefined

// myMock.mockReturnValueOnce(10)
      try {
        await store.dispatch(makeHumanMove(1));
        expect(store.getActions().length).toBe(0);
        done();
      } catch (e) {
        done.fail(e);
      }
    });
  });
});
