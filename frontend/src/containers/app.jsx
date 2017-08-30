import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import * as actions from './../store/action_creators/board';
import ProgressBar from './../components/progress_bar';
import GameEndedDialog from './../components/game_ended_dialog';
import Board from './../components/board';
import Header from './../components/header';
import Logo from './../../../assets/icon.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this._createNewGame = this._createNewGame.bind(this);
    this._makeHumanMove = this._makeHumanMove.bind(this);
  }

  _makeHumanMove(number) {
    return () => {
      this.props.makeHumanMove(number);
      this.props.checkForGameState();
      this.props.makeComputerMove();
      this.props.checkForGameState();
    };
  }

  _createNewGame() {
    this.props.newGame();
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tic Tac Toe</title>
          <link rel="icon" href={`${Logo}`} />
        </Helmet>
        <Header createNewGameHandler={this._createNewGame} />
        <GameEndedDialog
          isModalOpen={this.props.isModalOpen}
          createNewGameHandler={this._createNewGame}
          message={this.props.message}
        />
        <ProgressBar isCalculating={this.props.isCalculating} />
        <Board
          board={this.props.board}
          makeHumanMove={this._makeHumanMove}
          playerSign={this.props.playerSign}
          computerSign={this.props.computerSign}
        />
      </div>
    );
  }
}

App.propTypes = {
  board: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
    6: PropTypes.string,
    7: PropTypes.string,
    8: PropTypes.string,
    9: PropTypes.string
  }).isRequired,
  makeHumanMove: PropTypes.func.isRequired,
  makeComputerMove: PropTypes.func.isRequired,
  checkForGameState: PropTypes.func.isRequired,
  playerSign: PropTypes.string.isRequired,
  computerSign: PropTypes.string.isRequired,
  isCalculating: PropTypes.bool,
  newGame: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  message: PropTypes.string
};

const mapStateToProps = state => {
  return {
    board: state.board.board,
    isCalculating: state.board.settings.isCalculating,
    playerSign: state.board.settings.playerSign,
    computerSign: state.board.settings.computerSign,
    isModalOpen: state.board.settings.isModalOpen,
    message: state.board.settings.message
  };
};

export default connect(mapStateToProps, actions)(App);
export { App as PureApp };
