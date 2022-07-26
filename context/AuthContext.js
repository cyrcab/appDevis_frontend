import React, { createContext, useState } from 'react';
import { deleteItem } from '../helpers/secureStore';

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
    authenticatedUserId: null,
  });

  const logout = async () => {
    await deleteItem('_token');
    setAuthState({
      accessToken: null,
      refreshToken: null,
      authenticated: false,
      authenticatedUserId: null,
    });
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider value={{ authState, setAuthState, getAccessToken, logout }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
