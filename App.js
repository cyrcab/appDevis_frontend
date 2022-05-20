import { NavigationContainer } from '@react-navigation/native';

// Import des différentes pages utilisées par la barre de navigation
import Home from './screens/Home';
import Paramaters from './screens/Paramaters';
import Notifications from './screens/Notifications';
import Account from './screens/Account';

// import de la page de connexion
import LoginPage from './screens/Login';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Paramètres" component={Paramaters} />
        <Stack.Screen name="Compte" component={Account} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
