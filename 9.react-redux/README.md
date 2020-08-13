This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions for building your first Redux App

### Requirements
Follow `8.redux` project

### Installation
1. `npx create-react-app 9.react-redux` or use previous at `8.redux` folder
2. Once you get into the folder: `npm i react-redux`
3. `npm start`

### Provider at `./index.js`
```js
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
### Simplify `App.js`
```js
import Counter from './components/Counter';

function App() {
  return (
    <Counter />
  );
}
```

### Add `connect()` at `Counter.jsx`
```jsx
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
```

### Challenge
1. Does it work using `<Counter />` component directly at `index.js`?.
2. Add input text to let user specify increment size and then use it at increment/decrement to change `count` through a handler fn().