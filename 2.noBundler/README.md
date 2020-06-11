## Lesson 2 : React on static HTML

### Steps
1. Create a simple HTML page with [CDN links](https://reactjs.org/docs/cdn-links.html) and a `<div>` with id `root`
2. Add a script for including like_button.js, then create it
3. Create a class inheriting from `React.Component`
4. Have initial state with `liked` on false
```js
state = {
  liked: false,
}
```
5. Add a `render()` function returning any html you want
6. select root container and use it for ReactDOM
```
const container = document.querySelector('#root');
ReactDOM.render(React.createElement(LikeButton), container)
```
7. Now render a button with onclick prop to change state so that `liked` becomes `true` on user click 

### Challenge
1. Make a change to that when `liked` is true, it shows a text describing it's clicked
2. Make the button toggles