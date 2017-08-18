import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './containers/app';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
/*eslint no-undef: "off" */
const DOCUMENT_ROOT = document.getElementById('root');
import './index.css';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  DOCUMENT_ROOT
);
