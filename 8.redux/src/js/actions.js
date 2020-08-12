export const actionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  reset: 'RESET',
};

export const actionCreators = {
  increment: () => ({type: actionTypes.increment}),
  decrement: () => ({type: actionTypes.decrement}),
  reset: () => ({type: actionTypes.reset}),
};

export const actionsMap = {
  [actionTypes.increment]: (state, action) => {
		return { count: state.count + 1 }
  },
  [actionTypes.decrement]: (state, action) => {
		return { count: state.count - 1 }
  },
  [actionTypes.reset]: (state, action) => {
		return { count: 0 }
  },
};