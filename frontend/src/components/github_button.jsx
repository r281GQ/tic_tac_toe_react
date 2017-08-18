import React from 'react';
import { IconButton, FontIcon } from 'material-ui';

const GithubButton = () =>
  <IconButton
    tooltipPosition="bottom-center"
    tooltip="Github"
    target="_blank"
    href="https://github.com/r281GQ/tic_tac_toe_react"
  >
    <FontIcon className="fa fa-github white" />
  </IconButton>;

export default GithubButton;
