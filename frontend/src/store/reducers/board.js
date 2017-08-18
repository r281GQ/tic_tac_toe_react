import * as board from './../actions/board';
import * as _ from 'lodash';

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

const handleMove = (state, payload) => {
  const newState = _.cloneDeep(state);
  newState.board[payload.number] = payload.player;
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

const handleCloseModal = state => {
  const newState = _.cloneDeep(state);
  newState.settings.isModalOpen = false;
  newState.settings.message = '';
  return newState;
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case board.MAKE_MOVE:
      return handleMove(state, payload);
    case board.RESET_BOARD:
      return handleReset();
    case board.INIT_CALC:
      return handleInitCalc(state);
    case board.CLOSE_CALC:
      return handleCloseCalc(state);
    case board.OPEN_MODAL:
      return handleOpenModal(state, payload);
    case board.CLOSE_MODAL:
      return handleCloseModal(state);
    default:
      return state;
  }
};

export default reducer;
