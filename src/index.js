import { createStore } from 'redux';



// Action is an object which should have a 'type' property
// If action has an unknown type, reducer must return state as received
// If action has an undefined type, reducer must return initial state
const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};


const store = createStore(reducer);

document
  .getElementById('increment')
  .addEventListener('click', ()=>{
    store.dispatch({type: 'INC'});
  });

document
  .getElementById('decrement')
  .addEventListener('click', ()=>{
    store.dispatch({type: 'DEC'});
  });

const update = () =>{
  document
  .getElementById('counter')
  .innerHTML = store.getState();
};

store.subscribe(update);

