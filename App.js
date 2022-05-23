import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des différentes pages utilisées par la barre de navigation
import Home from './screens/Home';
import Paramaters from './screens/Paramaters';
import Notifications from './screens/Notifications';
import Account from './screens/Account';

// import de la page de connexion
import LoginPage from './screens/Login';

// import de la page pour reset le mot de passe
import ResetPass from './screens/ResetPass';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
