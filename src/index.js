import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

let { inc, dec, random } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      random={() => {
        const payload = Math.floor(Math.random() * 25);
        random(payload);
      }}
    />,
    document.getElementById('root')
  );
};

store.subscribe(update);
update();


