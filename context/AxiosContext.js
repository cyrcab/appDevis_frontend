import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { saveItem } from '../helpers/secureStore';
import { API_URL } from '@env';

const AxiosContext = createContext();
const { Provider } = AxiosContext;

const AxiosProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: 'http://192.168.1.11:5001',
  });

  const publicAxios = axios.create({
    baseURL: 'http://192.168.1.11:5001',
  });

  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${authContext.getAccessToken()}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  const refreshAuthLogic = async (failedRequest) => {
    const data = {
      refreshToken: authContext.authState.refreshToken,
    };

    const option = {
      method: 'POST',
      data,
      url: 'http://192.168.1.11:5001/api/refreshToken',
    };

    return axios(option)
      .then(async (tokenRefreshResponse) => {
        failedRequest.response.config.headers.authorization =
          'Bearer ' + tokenRefreshResponse.data.accessToken;

        authContext.setAuthState({
          ...authContext.authState,
          accessToken: tokenRefreshResponse.accessToken,
          authenticatedUserId: tokenRefreshResponse.data.userId,
        });

        await saveItem(
          '_token',
          JSON.stringify({
            accessToken: tokenRefreshResponse.data.accessToken,
            authenticatedUserId: tokenRefreshResponse.data.userId,
            refreshToken: authContext.authState.refreshToken,
          }),
        );

        return Promise.resolve();
      })
      .catch((e) => {
        authContext.setAuthState({
          accessToken: null,
          refreshToken: null,
        });
      });
  };

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  return <Provider value={{ authAxios, publicAxios }}>{children}</Provider>;
};

export { AxiosContext, AxiosProvider };
