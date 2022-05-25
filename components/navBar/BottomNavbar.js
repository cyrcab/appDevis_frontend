import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNavbar = ({ children }) => {
  console.log(children);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {children}
    </Tab.Navigator>
  );
};

export default BottomNavbar;
