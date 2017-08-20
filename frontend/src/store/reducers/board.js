import * as _ from 'lodash';

import * as board from './../actions/board';
import {
  getComputerMove,
  isGameWon,
  movesLeft
} from './../../services/minimax';

const INITIAL_STATE = {
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

const handleHumanMove = (state, payload) => {
  let newState = _.cloneDeep(state);
  newState.board[payload] = 'PLAYER';
  return newState;
};

const handleReset = () => {
  const newState = {
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
  return newState;
};

const handleInitCalc = state => {
  const newState = _.cloneDeep(state);
  newState.settings.isCalculating = true;
  return newState;
};

const handleCloseCalc = state => {
  const newState = _.cloneDeep(state);
  newState.settings.isCalculating = false;
  return newState;
};

const handleOpenModal = (state, payload) => {
  const newState = _.cloneDeep(state);
  newState.settings.isModalOpen = true;
  newState.settings.message = payload;
  return newState;
};

const handleComputerMove = state => {
  const newState = _.cloneDeep(state);
  newState.board[getComputerMove(newState.board)] = 'COMPUTER';
  return newState;
};

const handleCheckGameState = state => {
  const newState = _.cloneDeep(state);
  if (isGameWon('COMPUTER', newState.board)) {
    newState.settings.isModalOpen = true;
    newState.settings.message = 'You have lost!';
  }

  if (movesLeft(newState.board).length === 0) {
    newState.settings.isModalOpen = true;
    newState.settings.message = 'No more steps left!';
  }
  return newState;
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case board.CHECK_GAME_STATE:
      return handleCheckGameState(state);
    case board.MAKE_COMPUTER_MOVE:
      return handleComputerMove(state);
    case board.MAKE_HUMAN_MOVE:
      return handleHumanMove(state, payload);
    case board.RESET_BOARD:
      return handleReset();
    case board.INIT_CALC:
      return handleInitCalc(state);
    case board.CLOSE_CALC:
      return handleCloseCalc(state);
    case board.OPEN_MODAL:
      return handleOpenModal(state, payload);
    default:
      return state;
  }
};

export default reducer;
