import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { PureApp } from './../../src/containers/app';

const muiTheme = getMuiTheme();

/*eslint no-undef: "off"*/
injectTapEventPlugin();

describe('App integration test', () => {
  it('should render', () => {
    const spyNewGame = sinon.spy();
    const spyMakeHumanMove = sinon.spy();

    const component = mount(
      <PureApp
        board={{
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: '',
          7: '',
          8: '',
          9: ''
        }}
        makeHumanMove={spyMakeHumanMove}
        playerSign="x"
        computerSign="o"
        isCalculating={false}
        isModalOpen={false}
        message=""
        newGame={spyNewGame}
      />,
      {
        context: { muiTheme },
        childContextTypes: { muiTheme: PropTypes.object }
      }
    );

    expect(component).toHaveLength(1);
  });
});
