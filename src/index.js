import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

let {inc, dec, random} = bindActionCreators(actions, dispatch);

document
  .getElementById('increment')
  .addEventListener('click', inc);

document
  .getElementById('decrement')
  .addEventListener('click', dec);

document
  .getElementById('random')
  .addEventListener('click', () => {

    const payload = Math.floor(Math.random() * 10);
    random(payload);
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);

