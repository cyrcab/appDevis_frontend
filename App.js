import React from 'react';
import AppContainer from './AppContainer';

// import different context
import { AxiosProvider } from './context/AxiosContext';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <UserProvider>
          <AppContainer />
        </UserProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}
