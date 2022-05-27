import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import de la page de connexion
import LoginStackScreen from './screens/helpers/LoginStackScreen';

// import des différentes stack de navigation
import EstimateCreation from './screens/admin/estimates/EstimateCreation';
import EstimateList from './screens/admin/estimates/EstimateList';
import OfferList from './screens/admin/offer/OfferList';
import CategoryList from './screens/admin/category/CategoryList';

import BottomNavBar from './components/navBar/BottomNavbar';

import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  const user = useSelector((state) => state.auth);

  console.log(user);
  return (
    <NavigationContainer>
      {user.isConnected ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="App devis" component={BottomNavBar} />
          <Stack.Screen
            name="Création de devis"
            component={EstimateCreation}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Liste des devis"
            component={EstimateList}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Liste des catégories"
            component={CategoryList}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="Liste des offres"
            component={OfferList}
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
};

export default AppContainer;
