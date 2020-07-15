import React, { useState, useEffect} from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { authState, authService } = useOktaAuth();
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

  const pathname = window.location.pathname;
  const username = userInfo && userInfo.name;
  const login = () => authService.login(pathname);
  const logout = async () => authService.logout('/home')
  if( authState.isPending ) { 
    return <div>Checking...</div>
  } else if( !authState.isAuthenticated ) { 
    return (
      <li>
        <a onClick={login} className="link">Login</a>
      </li>
    );
  }
  return <li><a onClick={logout} className="link">Logout {username}</a></li>;
}

export default Login;