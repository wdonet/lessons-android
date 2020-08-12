This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions for building your first Redux App

### Installation
1. `npx create-react-app 8.redux`
2. Once you get into the folder: `npm i redux`
3. `npm start`

### Actions Redux
1. Action types
```js
const actionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
};
```
2. Action creators
```js
const actionCreators = {
  increment: () => ({type: actionTypes.increment}),
  decrement: () => ({type: actionTypes.decrement}),
};
```
3. Action maps
```js
const actionsMap = {
  [actionsTypes.increment]: (state, action) => {
		return { count: state.count + 1 }
  },
  [actionsTypes.decrement]: (state, action) => {
		return { count: state.count - 1 }
  },
};
```

### Store
Create `./js/store.js`
```js
import { createStore } from 'redux';
import { actionsMap } from './actions';

const defaultstate = { count: 0 };

const reducer = (state = defaultState, action) => {
	const reducerFn = actionsMap[action.type];
  if (reducerFn) {
    return reducerFn(state, action);
  }
  return state;
};

export default createStore(reducer);
```

### Render
1. Create `./components/Counter.jsx` component
```jsx
import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
  return (
    <div id="counter">
      <h1>{value}</h1>
      <div id="actions">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
```
2. Use store, actionCreators and Counter at `index.js`
```js
import { actionCreators } from './js/actions';
import store from './js/store';
import Counter from './components/Counter';

const render =  () => ReactDOM.render(
  <React.StrictMode>
      <Counter
        value={store.getState().count}
        onIncrement={() => store.dispatch(actionCreators.increment())}
        onDecrement={() => store.dispatch(actionCreators.decrement())}
      />
  </React.StrictMode>,
  document.getElementById('root');
);

render();
store.subscribe(render);
```
3.Change the look a bit
```css
#counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
}

#actions {
  display: flex;
  flex-direction: row;
}
```

### Challenge
Do the reset button to take value to zero (0).
