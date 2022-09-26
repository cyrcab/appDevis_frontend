import React, { createContext, useState } from 'react';

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    firstName: 'Cyril',
    lastName: 'Cabrolier',
    mail: 'exemple@mail.fr',
    role_id: '1',
  });

  return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export { UserContext, UserProvider };
