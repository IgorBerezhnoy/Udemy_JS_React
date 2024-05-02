import {connect} from 'react-redux';
import {Counter} from './Counter';
import {dec, inc, rand}  from '../actions';

const mapStateToProps = (state) => ({
  count: state.count
});


export const CounterContainer = connect(mapStateToProps, {dec, inc, rand})(Counter);