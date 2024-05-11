import {createSlice} from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  initialState: {
    filters: [],
    activeFilter: 'all',
  },
  name: 'filters',
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    }
  }
});
export const filtersReducer = filtersSlice.reducer;
export const {setFilters, setActiveFilter} = filtersSlice.actions;