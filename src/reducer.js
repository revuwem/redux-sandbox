// Action is an object which should have a 'type' property
// If action has an unknown type, reducer must return state as received
// If action has an undefined type, reducer must return initial state
const reducer = (state = 0, action) => {

    switch (action.type) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RANDOM':
        return state + action.payload;
      default:
        return state;
    }
};

export default reducer;