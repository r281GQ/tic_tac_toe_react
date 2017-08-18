const PLAYER = 'PLAYER';
const COMPUTER = 'COMPUTER';

//checks if the game has been won already
const isGameWon = (player, state) =>
  [[1, 1], [4, 1], [7, 1], [1, 3], [2, 3], [3, 3], [1, 4], [3, 2]]
    .map(
      value =>
        state[value[0]] === player &&
        state[value[0] + value[1]] === player &&
        state[value[0] + value[1] + value[1]] === player
    )
    .find(value => value === true)
    ? true
    : false;

const converToAscending = (sum, item) => {
  if (sum.length === 0) sum.push(item);
  sum.push(item + sum[sum.length - 1]);
  return sum;
};

//takes the current state and creates a new one with the players new move in it
//first the movesLeft is invoked, therefore the move will allways be valid
const makeMove = (state, move, player) => {
  let newState = Object.assign({}, state);
  newState[move] = player;
  return newState;
};

/**
 * Calculates the remaining moves.
 * Example: only the upper left and upper right corner is free then returns [1,3].
 * @param  {[key: number]: string} state [description]
 * @return {Array}       Returns an array of numbers representing the available moves as numbers from 1-9.
 */
const movesLeft = state => {
  const movesLeftContainer = [];
  Object.keys(state).forEach(
    key =>
      state[key] !== '' ? movesLeftContainer.push(Number.parseInt(key)) : null
  );
  return Array(8)
    .fill(1)
    .reduce(converToAscending, [])
    .filter(value => !movesLeftContainer.includes(value));
};

/**
 * Seperated method for logging porpuses.
 * @param  {[key: number]: string} state The acutal game state represented with a js 'map' where the keys are number from 1-9 and the value is the player.
 * @return {[value: number, move: number]}       Array of key value pairs, where key is the potential move with the calculated value.
 */
const miniMax = state =>
  movesLeft(state).map(value => ({
    value: miniMaxHelper(state, COMPUTER, value, 0),
    move: value
  }));

/**
 * Recursively explores all the available possible game moves.
 * @param  {[key: number]: string} state          The acutal game state represented with a js 'map' where the keys are number from 1-9 and the value is the player.
 * @param  {string} player         The player who will take the next move. Can either be const PLAYER or COMPUTER.
 * @param  {number} move           The next move from 1-9.
 * @param  {number} differentiator This variable makes sure the computer goes with the solution that can be achieved with the least amount of steps. Increments with every depth.
 * @return {number}                Number representing how good or bad a move is for the given player.
 */
const miniMaxHelper = (state, player, move, differentiator) => {
  //basecase: player won
  if (isGameWon(PLAYER, makeMove(state, move, player)))
    return -100 + differentiator;

  //basecase: computer won
  if (isGameWon(COMPUTER, makeMove(state, move, player)))
    return 100 - differentiator;

  //basecase: no more steps left
  if (movesLeft(makeMove(state, move, player)).length === 0) return 0;

  //recursively explores all possible moves and minimizes for the computer or maximizes for player
  return player === COMPUTER
    ? movesLeft(makeMove(state, move, player))
        .map(value =>
          miniMaxHelper(
            makeMove(state, move, player),
            PLAYER,
            value,
            ++differentiator
          )
        )
        .reduce(
          (currentMinimum, value) => Math.min(currentMinimum, value),
          100000
        )
    : movesLeft(makeMove(state, move, player))
        .map(value =>
          miniMaxHelper(
            makeMove(state, move, player),
            COMPUTER,
            value,
            ++differentiator
          )
        )
        .reduce(
          (currentMaximum, value) => Math.max(currentMaximum, value),
          -100000
        );
};

const reduceToNextMove = (sum, item) => {
  if (item.value > sum.currentVaule) {
    sum.currentVaule = item.value;
    sum.move = item.move;
  }
  return sum;
};

/**
 * Calculates the next best move for the computer based on the current game state.
 * @param  {[key: number]: string} state          The acutal game state represented with a js 'map' where the keys are number from 1-9 and the value is the player.
 * @return {number}       The field number of the board.
 */
const getComputerMove = state =>
  movesLeft(state).length !== 0
    ? miniMax(state).reduce(reduceToNextMove, { currentVaule: -1, move: 0 })
        .move
    : -1;

export { getComputerMove, isGameWon, movesLeft, PLAYER, COMPUTER };
