import { createStore } from 'redux';
import reducer from './reducer';
import {inc, dec, random} from './actions';

const store = createStore(reducer);

document
  .getElementById('increment')
  .addEventListener('click', () => {
    store.dispatch(inc());
  });

document
  .getElementById('decrement')
  .addEventListener('click', () => {
    store.dispatch(dec());
  });

document
  .getElementById('random')
  .addEventListener('click', () => {

    const payload = Math.floor(Math.random() * 10);
    store.dispatch(random(payload));
  });

const update = () => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);

