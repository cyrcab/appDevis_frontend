import React from 'react';
import AppContainer from './AppContainer';

// import different context
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </AuthProvider>
  );
}
