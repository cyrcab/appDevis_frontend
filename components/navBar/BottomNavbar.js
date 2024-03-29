import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../screens/admin/Home';
import AccountStackScreen from '../../helpers/AccountStackScreen';
import ParametersStackScreen from '../../helpers/ParametersStackScreen';

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#083D77',
        },
        headerTintColor: '#EFEFEF',
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          const iconName = {
            Accueil: 'home',
            Notifications: 'bell',
            Compte: 'user',
            Paramètres: 'gear',
          };
          return <Icon name={iconName[route.name]} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#EFEFEF',
        tabBarStyle: {
          backgroundColor: '#083D77',
          paddingTop: 10,
        },
        tabBarInactiveTintColor: '#486381',
      })}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          title: 'App Devis',
          tabBarLabel: 'Accueil',
        }}
      />
      <Tab.Screen name="Compte" component={AccountStackScreen} />
      <Tab.Screen name="Paramètres" component={ParametersStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavbar;
