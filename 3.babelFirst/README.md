## Lesson 3 : React + Babel = JSX

### Steps
1. Initiate NPM project
  - `npm init -y`
  - _Add script:_ `"watch": "npx babel --watch src --out-dir dist --presets react-app/prod"`
2. Install dependencies
```sh
npm i babel-cli@6 babel-preset-react-app@3
```
3. Copy `index.html` and `like_button.js` from lesson 2 to `./src` here
4. `npm run watch`
5. Change `index.html` to point to `../dist/like_button.js`
6. Open `index.html`

### Challenge
1. Change `React.createElement()` by JSX