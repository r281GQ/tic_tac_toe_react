import * as board from './../actions/board';
import { movesLeft } from './../../services/minimax';

export const makeHumanMove = number => (dispatch, getState) => {
  if (getState().board.board[number] !== '') return;
  dispatch({
    type: board.MAKE_HUMAN_MOVE,
    payload: number
  });
};

export const makeComputerMove = () => (dispatch, getState) => {
  if (movesLeft(getState().board.board).length === 0) return;
  dispatch({ type: board.INIT_CALC });
  dispatch({ type: board.MAKE_COMPUTER_MOVE });
  dispatch({ type: board.CLOSE_CALC });
};

export const checkForGameState = () => {
  return {
    type: board.CHECK_GAME_STATE
  };
};

export const newGame = () => {
  return { type: board.RESET_BOARD };
};
