import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from 'material-ui';

import GithubButton from './github_button';
import NewGameButton from './new_game_button';

const Header = ({ createNewGameHandler }) =>
  <AppBar
    title="Tic Tac Toe"
    className="header"
    iconElementLeft={<GithubButton />}
    iconElementRight={
      <NewGameButton createNewGameHandler={createNewGameHandler} />
    }
  />;

Header.propTypes = {
  createNewGameHandler: PropTypes.func.isRequired
};

export default Header;
