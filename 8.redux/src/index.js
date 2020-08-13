import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { actionCreators } from './js/actions';
import store from './js/store';
import Counter from './components/Counter';
import * as serviceWorker from './serviceWorker';

const render =  () => ReactDOM.render(
  <React.StrictMode>
    <Counter
      value={store.getState().count}
      onIncrement={() => store.dispatch(actionCreators.increment())}
      onDecrement={() => store.dispatch(actionCreators.decrement())}
      onReset={() => store.dispatch(actionCreators.reset())}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
