import { createStore } from 'redux';
import { actionsMap } from './actions';

const defaultState = { count: 0 };

const reducer = (state = defaultState, action) => {
	const reducerFn = actionsMap[action.type];
  if (reducerFn) {
    return reducerFn(state, action);
  }
  return state;
};

export default createStore(reducer);
