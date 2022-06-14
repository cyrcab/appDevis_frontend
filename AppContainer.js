import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import de la page de connexion
import LoginStackScreen from './screens/helpers/LoginStackScreen';

// import des différentes stack de navigation
// Pages situées sur l'accueil de l'application
import EstimateCreation from './screens/admin/estimates/EstimateCreation';
import EstimateList from './screens/admin/estimates/EstimateList';
import OfferList from './screens/admin/offer/OfferList';
import CategoryList from './screens/admin/category/CategoryList';

// Pages de gestion des différents paramètres
import AccountListPage from './screens/admin/parameters/AccountListPage';
import AccountAdminView from './screens/admin/parameters/AccountAdminView';
import UpdateMail from './screens/admin/Account/UpdateMail';
import UpdatePassword from './screens/admin/Account/UpdatePassword';

// Pages de création de contenu
import CreateAccount from './screens/admin/Account/CreateAccount';
import OfferAdminView from './screens/admin/offer/OfferAdminView';
import OfferCreation from './screens/admin/offer/OfferCreation';

// import des outils pour redux
import { useSelector } from 'react-redux';

import BottomNavBar from './components/navBar/BottomNavbar';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  const user = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {user.isConnected ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#083D77',
            },
            headerTintColor: '#EFEFEF',
          }}
        >
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

          {/* Categories + questions */}
          <Stack.Screen
            name="Liste des catégories"
            component={CategoryList}
            options={{
              headerShown: true,
            }}
          />

          {/* Offers */}
          <Stack.Screen
            name="Liste des offres"
            component={OfferList}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="OfferAdminView"
            component={OfferAdminView}
            options={{
              headerShown: true,
              title: '',
            }}
          />
          <Stack.Screen
            name="OfferCreation"
            component={OfferCreation}
            options={{
              headerShown: true,
              title: '',
            }}
          />

          {/* Parameters */}

          <Stack.Screen
            name="Liste des utilisateurs"
            component={AccountListPage}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Utilisateur admin view"
            component={AccountAdminView}
            options={{ headerShown: true, title: '' }}
          />
          <Stack.Screen
            name="Changement du mail"
            component={UpdateMail}
            options={{
              headerShown: true,
              title: '',
            }}
          />
          <Stack.Screen
            name="Changement du mot de passe"
            component={UpdatePassword}
            options={{
              headerShown: true,
              title: '',
            }}
          />
          <Stack.Screen
            name="Création utilisateur"
            component={CreateAccount}
            options={{
              headerShown: true,
              title: '',
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
