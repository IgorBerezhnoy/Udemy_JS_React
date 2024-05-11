import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};
const heroes = createSlice(
  {
    initialState,
    name: 'heroes',
    reducers: {
      heroesFetching: (state, action) => {
        state.heroesLoadingStatus = 'loading';
      },
      heroesFetched: (state, action) => {
        state.heroes = action.payload;
        state.heroesLoadingStatus = 'idle';
      },
      heroesFetchingError: (state, action) => {
        state.heroesLoadingStatus = 'error';
      },
      deleteHeroById: (state, action) => {
        state.heroes = state.heroes.filter(hero => hero.id !== action.payload);
      },
      addHero: (state, action) => {
        state.heroes.push(action.payload);
      },
    }
  }
);
export const heroesReducer = heroes.reducer;
export const {heroesFetching, heroesFetched, heroesFetchingError, deleteHeroById, addHero} = heroes.actions;
