import React, { createContext, useState } from 'react';
import axios from '../helpers/api/axios.config';
import displayAlertError from '../helpers/Alert/errorAlert';

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: null,
  });

  const logout = async () => {
    try {
      const response = await axios.post('/signout');

      if (response.status === 200) {
        setAuthState({
          accessToken: null,
          refreshToken: null,
          authenticated: false,
        });
      }
    } catch (error) {
      displayAlertError(error);
    }
  };

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider value={{ authState, setAuthState, logout, getAccessToken }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
