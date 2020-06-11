## Lesson 1 : React on static HTML

### Steps
1. Create a simple HTML page
2. Use [CDN links](https://reactjs.org/docs/cdn-links.html) for adding scripts for react and react dom
3. Add a `<div>` tag using id `root`.  Do this inside `<body>` tag
```js
<div id="root"></div>
```
4. Creact a script tag after body for rendering the first React component created.
```js
<script type="text/javascript">
  ReactDOM.render(
    React.createElement('div', null, 'Hello World'),
    document.getElementById('root'),
  );
</script>
```
_Notice the first parameter of `render()`. That is the component creation.  Also the root id used to get the HTML element as the second parameter_

### Challenges:
Given that the `React.createElement()` receives as arguments:
  - Type, the html type
  - [props], an array of properties
  - [...children], an array of children.  More HTML elements or React components

1. Change `World` to be inside a `<strong>` tag.
2. Use props to send the word `World` as property from the outter react element.
3. Create a list of names using `<ul>` and `<li>` tags.