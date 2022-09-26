import React, { createContext, useState } from 'react';
import displayAlertError from '../helpers/Alert/errorAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    authenticated: true,
  });

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
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
