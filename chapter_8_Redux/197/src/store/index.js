import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {heroes} from '../reducers/heroes';
import {filters} from '../reducers/filters';

const stringMiddleware = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({type: action});
  }
  return next(action);
};


const store = createStore(combineReducers({
      heroes,
      filters
    }),
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, stringMiddleware))
// applyMiddleware(stringMiddleware)
// , compose(enhancer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
  )
;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;