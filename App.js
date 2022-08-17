import React from 'react';
import AppContainer from './AppContainer';

// import different context
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { AxiosContext } from './context/AxiosContext';

export default function App() {
  return (
    <AuthProvider>
      <AxiosContext>
        <UserProvider>
          <AppContainer />
        </UserProvider>
      </AxiosContext>
    </AuthProvider>
  );
}
