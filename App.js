import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import des différentes pages utilisées par la barre de navigation
import HomeStackScreen from './screens/helpers/HomeStackScreen';
// import Paramaters from './screens/admin/Paramaters';
// import Notifications from './screens/admin/Notifications';
// import Account from './screens/admin/Account';

// // import de la page de connexion
import LoginStackScreen from './screens/helpers/LoginStackScreen';

// // import de la page pour reset le mot de passe
// import ResetPass from './screens/admin/ResetPass';

import BottomNavBar from './components/navBar/BottomNavbar';

const Tab = createBottomTabNavigator();

export default function App() {
  const fakeUser = {
    isSignedIn: false,
  };

  return (
    <NavigationContainer>
      {fakeUser.isSignedIn ? (
        <BottomNavBar>
          <Tab.Screen name="Home" component={HomeStackScreen} />
        </BottomNavBar>
      ) : (
        <LoginStackScreen />
      )}
    </NavigationContainer>
  );
}
