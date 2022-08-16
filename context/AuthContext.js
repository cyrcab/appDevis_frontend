import React, { createContext, useState } from 'react';
import axios from '../helpers/api/axios.config';
import displayAlertError from '../helpers/Alert/errorAlert';

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authenticated: null,
  });

  const logout = async () => {
    try {
      const response = await axios.post('/signout');

      if (response.status === 200) {
        setAuthState({
          authenticated: false,
        });
      }
    } catch (error) {
      displayAlertError(error);
    }
  };
  return (
    <Provider value={{ authState, setAuthState, logout }}>{children}</Provider>
  );
};

export { AuthContext, AuthProvider };
