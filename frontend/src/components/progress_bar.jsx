import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui';

const ProgressBar = ({ isCalculating }) =>
  isCalculating
    ? <div className="progress">
        <LinearProgress mode="indeterminate" color="#7c4dff" />
      </div>
    : <div className="progress__absent" />;

ProgressBar.propTypes = {
  isCalculating: PropTypes.bool
};

export default ProgressBar;
