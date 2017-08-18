import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

const Board = ({ board, makeHumanMove, playerSign, computerSign }) =>
  <div className="board__vertical__container">
    <div className="board__horizontal__container">
      {_.toArray(
        _.mapValues(board, (boardElement, key) =>
          <div
            className="main__item__container"
            key={key}
            onClick={makeHumanMove(key)}
          >
            <div className="main__item__paper">
              {boardElement === 'PLAYER'
                ? playerSign
                : boardElement === 'COMPUTER' ? computerSign : null}
            </div>
          </div>
        )
      )}
    </div>
  </div>;

Board.propTypes = {
  board: PropTypes.shape({
    1: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    2: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    3: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    4: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    5: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    6: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    7: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    8: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired,
    9: PropTypes.oneOf(['', 'PLAYER', 'COMPUTER']).isRequired
  }).isRequired,
  makeHumanMove: PropTypes.func.isRequired,
  playerSign: PropTypes.string.isRequired,
  computerSign: PropTypes.string.isRequired
};

export default Board;
