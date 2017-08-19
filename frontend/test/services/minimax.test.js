import {
  getComputerMove,
  isGameWon,
  movesLeft
} from './../../src/services/minimax';

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

  it('should return 9 on board: 3P 6P', () => {
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

  it('should return 7 on board: 1P 4P', () => {
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

  it('should return 3 on board: 1C 2C', () => {
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

  it('should return 8 on board: 2C 5C', () => {
    let board = {
      1: COMPUTER,
      2: COMPUTER,
      3: PLAYER,
      4: PLAYER,
      5: COMPUTER,
      6: '',
      7: '',
      8: '',
      9: PLAYER
    };
    expect(getComputerMove(board)).toBe(8);
  });

  it('should return 6 on board: 3P 9P', () => {
    let board = {
      1: COMPUTER,
      2: '',
      3: PLAYER,
      4: '',
      5: COMPUTER,
      6: '',
      7: '',
      8: '',
      9: PLAYER
    };
    expect(getComputerMove(board)).toBe(6);
  });

  describe('movesLeft', () => {
    it('should return [2, 4, 6, 7, 8]', () => {
      const movesLeftArray = movesLeft({
        1: COMPUTER,
        2: '',
        3: PLAYER,
        4: '',
        5: COMPUTER,
        6: '',
        7: '',
        8: '',
        9: PLAYER
      });

      expect(movesLeftArray).toEqual(expect.arrayContaining([2, 4, 6, 7, 8]));
    });

    it('should return [3, 5, 6, 7, 8]', () => {
      const movesLeftArray = movesLeft({
        1: COMPUTER,
        2: COMPUTER,
        3: '',
        4: PLAYER,
        5: '',
        6: '',
        7: '',
        8: '',
        9: PLAYER
      });

      expect(movesLeftArray).toEqual(expect.arrayContaining([3, 5, 6, 7, 8]));
    });

    it('should return [1, 2, 3, 4, 5, 6]', () => {
      const movesLeftArray = movesLeft({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: COMPUTER,
        8: COMPUTER,
        9: COMPUTER
      });

      expect(movesLeftArray).toEqual(
        expect.arrayContaining([1, 2, 3, 4, 5, 6])
      );
    });
  });

  describe('isGameWon', () => {
    it('should return false', () => {
      expect(
        isGameWon(PLAYER, {
          1: COMPUTER,
          2: '',
          3: PLAYER,
          4: '',
          5: COMPUTER,
          6: '',
          7: '',
          8: '',
          9: PLAYER
        })
      ).toBeFalsy();
    });

    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: COMPUTER,
          2: COMPUTER,
          3: COMPUTER,
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: ''
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: '',
          2: '',
          3: '',
          4: COMPUTER,
          5: COMPUTER,
          6: COMPUTER,
          7: '',
          8: '',
          9: ''
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: COMPUTER,
          8: COMPUTER,
          9: COMPUTER
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: COMPUTER,
          2: '',
          3: '',
          4: COMPUTER,
          5: '',
          6: '',
          7: COMPUTER,
          8: '',
          9: ''
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: '',
          2: COMPUTER,
          3: '',
          4: '',
          5: COMPUTER,
          6: '',
          7: '',
          8: COMPUTER,
          9: ''
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: '',
          2: '',
          3: COMPUTER,
          4: '',
          5: '',
          6: COMPUTER,
          7: '',
          8: '',
          9: COMPUTER
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: COMPUTER,
          2: '',
          3: '',
          4: '',
          5: COMPUTER,
          6: '',
          7: '',
          8: '',
          9: COMPUTER
        })
      ).toBeTruthy();
    });
    it('should return true', () => {
      expect(
        isGameWon(COMPUTER, {
          1: '',
          2: '',
          3: COMPUTER,
          4: '',
          5: COMPUTER,
          6: '',
          7: COMPUTER,
          8: '',
          9: ''
        })
      ).toBeTruthy();
    });
  });
});
