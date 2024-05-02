import {useDispatch, useSelector} from 'react-redux';
import {Counter} from './Counter';
import {dec, inc, rand} from '../actions';


export const CounterContainer = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <Counter
      count={count}
      dec={() => dispatch(dec())}
      inc={() => dispatch(inc())}
      rand={() => dispatch(rand())}/>
  );
};

// const mapStateToProps = (state) => ({
//   count: state.count
// });
//
//
// export const CounterContainer = connect(mapStateToProps, {dec, inc, rand})(Counter);