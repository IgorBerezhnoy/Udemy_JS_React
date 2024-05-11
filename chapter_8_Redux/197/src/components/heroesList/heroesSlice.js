import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};
const heroes = createSlice(
  {
    initialState,
    name: 'heroes',
    reducers: {

      addHero: (state, action) => {
        state.heroes.push(action.payload);
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
          state.heroes = action.payload;
          state.heroesLoadingStatus = 'idle';
        })
        .addCase(deleteHeroThunk
          .fulfilled, (state, {meta: {arg}}) => {
          state.heroes = state.heroes.filter(hero => hero.id !== arg.id);
        })
        .addDefaultCase(()=>{})

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
