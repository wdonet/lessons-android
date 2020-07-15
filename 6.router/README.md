This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
Follow 5.ticTacToeGame project first

## Steps for the React Router

### Setup the router

1. `npm i -S react-router-dom`
2. Import the library
```js
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
```

#### Use router on `ReactDOM.render()` as follow:
- The Header
```jsx
  <Router>
    <Header />
    <hr/>
    <Switch>
      <Route path="/gato"><Game /></Route>
      <Route path="/pacman"><Pacman /></Route>
      <Route path="/home"><Home /></Route>
      <Route path="*"><NotFound /></Route>
    </Switch>
    <hr/>
    <Footer />
  </Router>
```

- The Footer
```jsx
const Footer = () => {
  return (
    <nav>
      <h1>Footer</h1>
      <div>Contact information  cell. 278728637 </div>
    </nav>
  );
};
```

- The Pacman component (simple and basic)
```jsx
const Pacman = props => <h1 className="my-pacman one two" style={{border: '1px solid'}}>PACMAN</h1>;
```

- The Not found component for every url not resolved
```jsx
import { useLocation } from "react-router-dom";
const NotFound = props => {
  const { pathname } = useLocation();
  return (
    <>
      <h3>404: Not Found</h3>
      <p>Unable to find <code>{pathname}</code></p>
      <p>Please go back <Link to="/home">Home</Link></p>
    </>
  );
};
```

- The Home component for 
```jsx
import { useRouteMatch } from 'react-router-dom';
const Home = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <h1> WELCOME </h1>
      <div>
        <strong>Check the Games</strong>
        <ul>
          <li>
            <Link to={`${url}/tictactoe`}>TicTacToe Game</Link>
            <Link to={`/tictactoe`}>[Play Now]</Link>
          </li>
          <li><Link to={`${url}/pacman`}>Pacman Game (pending)</Link></li>
        </ul>
        <em>Select one to see description</em>
        <Switch>
          <Route path={`${path}/:gameName`}>
            <GameDescriptor />
          </Route>
        </Switch>
      </div>
    </>
  );
};
```

- The GameDescriptor component for the game descriptions 
```jsx
import { useParams } from 'react-router-dom';
const GameDescriptor = () => {
  const { gameName } = useParams();
  return (
    <>
      <h3>{gameName}</h3>
      <p>Lorem ipsum Lorem ipsum Lorem i</p>
    </>
  );
};
```

### Implement those new components
```jsx
const Header = props => {
  return (
    <nav>
      <ul>
        {btnLogin}
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tictactoe">TicTacToe</Link></li>
        <li><Link to="/pacman">Pacman</Link></li>
      </ul>
    </nav>
  );
}
```

### Run
1. Just run `npm start`
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Steps for unit testing

### Using jest-dom
1. Config the tests:
  - Create a `./components/__test__` folder
  - Add the following to `./src/setupTests.js`

```js
import '@testing-library/jest-dom/extend-expect';
```
_`jest-dom` adds custom jest matchers for asserting on DOM nodes_

2. Create a `1.Pacman.spec.jsx` file
```js
import { render } from '@testing-library/react';
import Pacman from '../Pacman';
describe('<Pacman>', () => {
  test('should render an h1 tag', () => {
    const { getByText } = render(<Pacman />);
    const pacmanHtmlElement = getByText(/PAC/i)
    expect(pacmanHtmlElement).toBeInTheDocument();
    expect(pacmanHtmlElement).toHaveClass('my-pacman');
  });

  test('should render styling', () => {
    const { getByText } = render(<Pacman />);
    const pacmanHtmlElement = getByText(/PAC/i)
    expect(pacmanHtmlElement).toHaveTextContent('PACMAN');
    expect(pacmanHtmlElement).toHaveStyle('border: 1px solid');
  })
});
```
3. `npm test`
4. Check more matchers at https://github.com/testing-library/jest-dom

### Firing events
Now create `2.Square.spec.jsx` and run `npm test -- --coverage` to check code coverage

```jsx
  it('should fire click event', () => {
    let clicked = false;
    const clickFn = () => {
      clicked = true;
    }
    const { container } = render(<Square onClick={clickFn} value={'X'} />);
    const btn = container.querySelector('button');
    expect(btn).toHaveTextContent('X');
    fireEvent.click(btn);
    expect(clicked).toBe(true);
  })
```
Challenge: Do the same with `Winner` component.

Check the intro of this library https://testing-library.com/docs/react-testing-library/intro

### Snapshots

1. `npm i react-test-renderer`
2. Create `3.Game.spec.jsx` and import renderer
```
import renderer from 'react-test-renderer';
```
3. Mock components and create snapshot with the rest
```js
jest.mock('../Board.jsx', () => 'mock-board-tag')
jest.mock('../Winner.jsx', () => 'mock-winner-tag')
```
4. Use renderer to render `Game` component and then generate the snapshot
```js
  test('should render correctly', () => {
    const tree = renderer.create(<Game/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
```
Once you run the test a new folder `__snapshots__` will be created automatically with the snapshot.  Check it out.

Challenge: Do the same with `Home` component.

Check more info at https://jestjs.io/blog/2016/07/27/jest-14.html
