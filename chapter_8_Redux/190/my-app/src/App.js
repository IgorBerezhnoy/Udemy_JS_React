import './App.css';
import {createStore} from 'redux';

function App() {
  const initialState = {count: 0};
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INC': {
        return {...state, count: state.count + 1};
      }
      case 'DEC': {
        return {...state, count: state.count - 1};
      }
      case 'RAND': {
        return {...state, count: state.count * action.payload};
      }
      default: {
        return state;
      }
    }
  };
  const store = createStore(
    reducer
  );
  let count = store.getState().count;
  store.subscribe(() => {
    count = store.getState().count;
    console.log(store.getState());

  });


  store.dispatch({type: 'INC'});
  store.dispatch({type: 'INC'});


  let inc = () => ({type: 'INC'});
  let dec = () => ({type: 'DEC'});
  let rand = (payload) => ({type: 'RAND', payload});
  return (
    <div>
      <div>{store.getState().count}</div>
      <button onClick={() => store.dispatch(inc())}>INC</button>
      <button onClick={() => store.dispatch(dec())}>DEC</button>
      <button onClick={() => store.dispatch(rand(Math.floor(Math.random() * 2)))}>RAND</button>
    </div>
  );
}

export default App;
