
const initialState = {count: 0};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC': {
      return {...state, count: state.count + 1};
    }
    case 'DEC': {
      return {...state, count: state.count - 1};
    }
    case 'RAND': {
      return {...state, count:  action.payload};
    }
    default: {
      return state;
    }
  }
};