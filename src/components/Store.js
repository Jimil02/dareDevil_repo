import { createStore } from 'redux';

// defining the initial state and reducer
const initialState = {
  inputValue: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};
//creating a redux store here
const store = createStore(reducer);

export default store;
