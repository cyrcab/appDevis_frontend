import React, { createContext, useState } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    firstName: null,
    lastName: null,
    isConnected: false,
    mail: null,
    role_id: null,
    role_name: null,
  });

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export { UserContext, UserProvider };
