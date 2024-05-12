import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';


const heroesAdapter = createEntityAdapter();


const heroes = createSlice(
  {
    initialState: heroesAdapter.getInitialState({
      heroesLoadingStatus: 'idle',
    }),
    name: 'heroes',
    reducers: {
      addHero: (state, action) => {
        heroesAdapter.addOne(state, action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchHeroes.pending, (state) => {
          state.heroesLoadingStatus = 'loading';
        })
        .addCase(fetchHeroes.rejected, (state) => {
          state.heroesLoadingStatus = 'error';
        })
        .addCase(fetchHeroes.fulfilled, (state, action) => {
          state.heroesLoadingStatus = 'idle';
          heroesAdapter.setAll(state, action.payload);
        })
        .addCase(deleteHeroThunk
          .fulfilled, (state, {meta: {arg}}) => {
          heroesAdapter.removeOne(state, arg.id);
        })
        .addDefaultCase(() => {
        });

    }
  }
);


export const fetchHeroes = createAsyncThunk(
  'heroes/fetchHeroes',
  async () => {
    const {request} = useHttp();
    return await request('http://localhost:3001/heroes');
  });
export const deleteHeroThunk = createAsyncThunk(
  'heroes/deleteHeroThunk',
  async ({id}) => {
    const {request} = useHttp();
    return await request('http://localhost:3001/heroes/' + id, 'DELETE');
  });


export const heroesReducer = heroes.reducer;
export const {addHero} = heroes.actions;
export const {selectAll} = heroesAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
  state => state.filters.activeFilter,
  selectAll,
  (activeFilter, heroes) => {
    if (activeFilter === 'all') {
      return heroes;
    } else {
      return heroes.filter(el => el.element === activeFilter);
    }
  });