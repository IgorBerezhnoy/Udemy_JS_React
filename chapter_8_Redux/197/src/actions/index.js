import {deleteHeroById, heroesFetched, heroesFetching, heroesFetchingError} from '../components/heroesList/heroesSlice';
import {setFilters} from '../components/heroesFilters/filtersSlice';

export const deleteHeroThunk = (request, id) => async (dispatch) => {
  const res = await request('http://localhost:3001/heroes/' + id, 'DELETE',);
  debugger
  if (res) {
    dispatch(deleteHeroById(id));
  }

};
export const fetchFilters = (request) => async (dispatch) => {
  dispatch(heroesFetching());
  request('http://localhost:3001/filters')
    .then(data => {
      dispatch(setFilters(data));
    })
    .catch(() => dispatch(heroesFetchingError()));


};
export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
    .then(data => {
      dispatch(heroesFetched(data));
    })
    .catch(() => dispatch(heroesFetchingError()));

};

