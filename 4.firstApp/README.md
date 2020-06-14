README.md

# Steps
For building a first React App from scratch

### Initial Structure
- `npm init -y`
- Create folder
  - `public`
    - `index.html` with target div and **the script linking to the bundle**
    - here goes any other asset
  - `src`
    - here goes the components
- For GIT do `git init` and use `.gitignore` to exclude `node_modules` and `dist` folders

### Babel
For making JS code transformations
1. `npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`
2. Create `.babelrc` like:
```json
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

_A few words about the presets:_
- `babel/preset-env` transforms ES6+ into traditional JS
- `babel/preset-react` transforms JSX

### Webpack
For using loaders, processing different files to bundle and prepare the dev server.
- `npm i --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader`
- Create `webpack.config.js` like:
```js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js", // where to start building
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // test & exclude for matching files
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",  // loader to transform files
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // css-loader requires style-loader
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {  //  where to put our bundled code
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",  // where to serve files by the web-server
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true  // needed for the Hot Module Replacement
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
```

### React
- `npm i -S react react-dom`
- Create `./src/index.js` like
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(<App />, document.getElementById("root"));
```
- Create `./src/App.js` like
```js
import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default App;
```
- Create `./src/App.css` like
```css
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

### `package.json`
- Add to script `dev`: `webpack-dev-server --mode development`
- `npm run dev`
- Try http://localhost:3000/ (should load index.html content)

### Hot Module Reloading
Tell what to replace using `react-hot-loader` as regular dependency. It safely do not run on production.
- `npm i -S react-hot-loader`
- Import react-hot-loader in App.js
```js
// ...
import {hot} from "react-hot-loader";
// ...
export default hot(module)(App);
```
## Challenge
Built files never show up in your `dist` directory. All files are served from memory directly.  For generating those do:
- `webpack --mode development` - you can add it as `build` script at `package.json`
