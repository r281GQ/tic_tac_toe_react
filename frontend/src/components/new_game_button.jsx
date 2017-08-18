import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, FontIcon } from 'material-ui';

const NewGameButton = ({ createNewGameHandler }) =>
  <IconButton
    tooltipPosition="bottom-center"
    tooltip="New game"
    onClick={createNewGameHandler}
  >
    <FontIcon className="fa fa-plus-circle white" />
  </IconButton>;

NewGameButton.propTypes = {
  createNewGameHandler: PropTypes.func.isRequired
};

export default NewGameButton;
