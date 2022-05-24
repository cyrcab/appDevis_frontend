import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des différentes pages utilisées par la barre de navigation
import Home from './screens/admin/Home';
import Paramaters from './screens/admin/Paramaters';
import Notifications from './screens/admin/Notifications';
import Account from './screens/admin/Account';

// import de la page de connexion
import LoginPage from './screens/admin/Login';

// import de la page pour reset le mot de passe
import ResetPass from './screens/admin/ResetPass';

// import des pages pour les actions rapides
import EstimateList from './screens/admin/estimates/EstimateList';
import OfferList from './screens/admin/offer/OfferList';
import CategoryList from './screens/admin/category/CategoryList';
import EstimateCreation from './screens/admin/estimates/EstimateCreation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   headerLeft: () => {
          //     HeaderBackButton: 'disabled';
          //   },
          // }}
        />
        <Stack.Screen name="Paramètres" component={Paramaters} />
        <Stack.Screen name="Compte" component={Account} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Reset Password" component={ResetPass} />
        <Stack.Screen name="Liste des devis" component={EstimateList} />
        <Stack.Screen name="Création de devis" component={EstimateCreation} />
        <Stack.Screen name="Liste des catégories" component={CategoryList} />
        <Stack.Screen name="Liste des offres" component={OfferList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
