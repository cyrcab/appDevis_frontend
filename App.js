import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import des différentes pages utilisées par la barre de navigation
import { HomeStackScreen } from './screens/admin/Home';
// import Paramaters from './screens/admin/Paramaters';
// import Notifications from './screens/admin/Notifications';
// import Account from './screens/admin/Account';

// // import de la page de connexion
import LoginPage from './screens/admin/Login';

// // import de la page pour reset le mot de passe
// import ResetPass from './screens/admin/ResetPass';

import BottomNavBar from './components/navBar/BottomNavbar';

const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();

export default function App() {
  const fakeUser = {
    isSignedIn: true,
  };

  return (
    <NavigationContainer>
      {fakeUser.isSignedIn ? (
        <BottomNavBar>
          <Tab.Screen name="Home" component={HomeStackScreen} />
        </BottomNavBar>
      ) : (
        <LoginStack.Navigator>
          <LoginStack.Screen name="Login" component={LoginPage} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
}
