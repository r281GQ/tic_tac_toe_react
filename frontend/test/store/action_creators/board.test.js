import thunk from 'redux-thunk';
import createMockStore from 'redux-mock-store';

const middleWares = [thunk];
const store = createMockStore(middleWares)({
  board: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  },
  settings: {
    playerSign: 'x',
    computerSign: 'o',
    isCalculating: false,
    isModalOpen: false,
    message: ''
  }
});
