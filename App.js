import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import des différentes pages utilisées par la barre de navigation
import EstimateCreation from './screens/admin/estimates/EstimateCreation';

// // import de la page de connexion
import LoginStackScreen from './screens/helpers/LoginStackScreen';

// // import de la page pour reset le mot de passe
// import ResetPass from './screens/admin/ResetPass';

import BottomNavBar from './components/navBar/BottomNavbar';

const Stack = createNativeStackNavigator();

export default function App() {
  const fakeUser = {
    isSignedIn: true,
  };

  return (
    <NavigationContainer>
      {fakeUser.isSignedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="App devis" component={BottomNavBar} />
          <Stack.Screen
            name="Création de devis"
            component={EstimateCreation}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      ) : (
        <LoginStackScreen />
      )}
    </NavigationContainer>
  );
}
