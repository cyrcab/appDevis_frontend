import React from 'react';
import AppContainer from './AppContainer';

// import different context
import { AxiosProvider } from '../appDevis_frontend/context/AxiosContext';
import { AuthProvider } from '../appDevis_frontend/context/AuthContext';
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
