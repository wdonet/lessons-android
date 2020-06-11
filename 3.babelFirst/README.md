## Lesson 3 : React + Babel = JSX

### Steps
1. Initiate NPM project
  - `npm init -y`
  - _Add script:_ `"babel": "babel src --out-dir dist"`
  - Add babel config `.babelrc`
  ```json
  {
    "presets": [
      "@babel/env",
      "@babel/preset-react"
    ],
    "plugins": [
      "@babel/plugin-transform-react-jsx-compat",
      "@babel/plugin-proposal-class-properties"
    ]
  }
  ```
2. Install dependencies
**For development**
```sh
npm i --save-dev @babel/cli @babel/core
npm i --save-dev @babel/preset-env @babel/preset-react
npm i --save-dev @babel/plugin-transform-react-jsx-compat
npm i --save-dev @babel/plugin-proposal-class-properties
```
**For project**
```
npm i -S @babel/polyfill
```
3. Copy `index.html` and `like_button.js` from lesson 2 to `./src` here
4. `npm run babel`
5. Change `index.html` to point to `../dist/like_button.js`
6. Open `index.html`

### Challenge
