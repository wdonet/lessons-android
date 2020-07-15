This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements
Follow 6.router project first

## Steps for implement Login with Okta

### Config an Okta account

1. Go to [developer.okta.com](https://developer.okta.com) and create a free account.
  - You need to specify a valid email
  - You might need to specify the purpose of usage of your account
2. Verify your email
  - You might need to change the provisional password
3. Create a Single Page App
  - From the options pick: Single-Page App
  - On the following form change ports to 3000
  - Use logout redirect URI as `http://localhost:3000/home`
  - Check `Authorization Code` on `Grant type allowed` and click on `continue`
  - Copy the Client ID and domain, should be something like:
    - Client ID : `0okko1odkYbzy4ivX4x6`
    - Domain : `dev-462145.okta.com`

You can always check [Okta docs](https://developer.okta.com/code/react/) for more info or follow detail instructions for [creating an okta app](https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/).

### Install and configure the SDK

1. `npm i @okta/okta-react`
2. Add the following config to your `index.js`
```js
const OKTA_DOMAIN = process.env.REACT_APP_DOMAIN;
const HOST = window.location.host;
const config = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  issuer: `https://${OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `http://${HOST}/implicit/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};
```
3. Notice the REACT_APP_* env variables. They should be defined at `./.env` file with the values you 
```env
REACT_APP_CLIENT_ID=0okko1odkYbzy4ivX4x6
REACT_APP_DOMAIN=dev-562145.okta.com
```
4. Import Security from `@okta/okta-react` and use it right below `Router`.
```js
import { Security } from '@okta/okta-react';
// ...
  <Router>
    <Security {...config}>
      { /* App routes go here */ }
    </Security>
  </Router>
```

### Login Button/Link
1. Create the `Login` component
```js
import { useOktaAuth } from '@okta/okta-react';
const Login = () => {
  const { authState, authService } = useOktaAuth();
  const pathname = window.location.pathname;
  const login = () => authService.login(pathname);
  if( authState.isPending ) { 
    return <div>Checking...</div>
  } else if( !authState.isAuthenticated ) { 
    return (
      <li>
        <a onClick={login}>Login</a>
      </li>
    );
  }
  return <li><a>Logout</a></li>;
}
```
2. Import it at Header for displaying it at render
3. Add another route for the implicit callback at `index.js`
  - The route
```js
  <Route path="/implicit/callback" /><LoginCallback /></Route>
```
  - Import the callback component
```js
import LoginCallback from '@okta/okta-react/dist/LoginCallback';
```
4. Let's show username when logged in (`Login`)
```js
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then(info => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]);
  // ...
  const username = userInfo && userInfo.name;
  return <li><a>Logout {username}</a></li>;
```
5. Define a way to log out
```js
  const logout = async () => authService.logout('/home')
  return <li><a onClick={logout}>Logout {username}</a></li>;
```

**Note that**
- _You should use your full email and password for loggin in_
- _the `/home` at logout() should match with what is set for logout uri at the [Okta application config](https://login.okta.com/)_

Check the full process at Okta
- For the [login](https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/) and the [logout](https://developer.okta.com/docs/guides/sign-users-out/react/define-signout-callback/)
- For [requiring Authentication](https://developer.okta.com/docs/guides/sign-into-spa/react/require-authentication/) for specific routes
- Using a [widget](https://developer.okta.com/code/react/okta_react_sign-in_widget/)
