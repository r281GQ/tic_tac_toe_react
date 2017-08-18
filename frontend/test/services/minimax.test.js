import { getComputerMove } from './../../src/services/minimax';

const PLAYER = 'PLAYER';
const COMPUTER = 'COMPUTER';
const fullBoard = {
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

describe('minimax test', () => {
  it('should return -1 if board is full', () => {
    expect(getComputerMove(fullBoard)).toBe(-1);
  });

  it('should return 9 if board is full', () => {
    let board = {
      1: PLAYER,
      2: COMPUTER,
      3: PLAYER,
      4: COMPUTER,
      5: '',
      6: PLAYER,
      7: '',
      8: '',
      9: ''
    };
    expect(getComputerMove(board)).toBe(9);
  });

  it('should return 7 if board is full', () => {
    let board = {
      1: PLAYER,
      2: COMPUTER,
      3: PLAYER,
      4: PLAYER,
      5: '',
      6: '',
      7: '',
      8: '',
      9: COMPUTER
    };
    expect(getComputerMove(board)).toBe(7);
  });


  it('should return 3 if board is full', () => {
    let board = {
      1: COMPUTER,
      2: COMPUTER,
      3: '',
      4: PLAYER,
      5: '',
      6: '',
      7: '',
      8: '',
      9: PLAYER
    };
    expect(getComputerMove(board)).toBe(3);
  });
});
