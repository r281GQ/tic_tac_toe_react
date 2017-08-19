import * as board from './../actions/board';
import {
  getComputerMove,
  isGameWon,
  movesLeft
} from './../../services/minimax';

export const makeHumanMove = number => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if (
      getState().board.settings.isCalculating ||
      getState().board.board[number] !== ''
    )
      return reject('calculating');

    dispatch({ type: board.INIT_CALC });
    dispatch({ type: board.MAKE_MOVE, payload: { player: 'PLAYER', number } });

    if (movesLeft(getState().board.board).length === 0) return reject('no moves left');

    setTimeout(() => resolve(getComputerMove(getState().board.board)), 0);
  })
    .then(value => {
      dispatch({
        type: board.MAKE_MOVE,
        payload: { player: 'COMPUTER', number: value }
      });
      if (isGameWon('COMPUTER', getState().board.board)) {
        dispatch({ type: board.OPEN_MODAL, payload: 'You have lost!' });
      } else {
        if (movesLeft(getState().board.board).length === 0) {
          dispatch({ type: board.OPEN_MODAL, payload: 'No more steps left!' });
        }
        dispatch({ type: board.CLOSE_CALC });
      }
    })
    .catch(error => {
      if (error === 'no moves left') {
        dispatch({ type: board.OPEN_MODAL, payload: 'No more steps left!' });
      }
    });
};

export const newGame = () => (dispatch, getState) => {
  if (getState().board.isCalculating || getState().board.isGameWon) return;
  dispatch({ type: board.RESET_BOARD });
};
