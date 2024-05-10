const initialState = {

  filters: [],
  activeFilter: 'all',
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS': {
      return {
        ...state,
        filters: action.payload
      };

    }
    case 'SET_ACTIVE_FILTER': {
      return {
        ...state,
        activeFilter: action.payload
      };
    }
    default:
      return state;
  }
};

