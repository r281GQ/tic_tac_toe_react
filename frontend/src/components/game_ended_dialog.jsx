import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton, Dialog } from 'material-ui';

const GameEndedDialog = ({ createNewGameHandler, isModalOpen, message }) =>
  <Dialog
    title="Tic Tac Toe"
    actions={[
      <FlatButton key={1} label="new game" onClick={createNewGameHandler} />
    ]}
    modal={true}
    open={isModalOpen}
  >
    {message}
  </Dialog>;

GameEndedDialog.propTypes = {
  createNewGameHandler: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  message: PropTypes.string
};

export default GameEndedDialog;
