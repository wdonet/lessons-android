import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../js/actions';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    count: state.count,
  }
}
const { increment, decrement, reset } = actionCreators;
const mapDispatchToProps = { increment, decrement, reset };

const Counter = props => {
  console.log('props', props);
  const { count, increment, decrement, reset } = props;
  return (
    <div id="counter">
      <h1>{count}</h1>
      <div id="actions">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);