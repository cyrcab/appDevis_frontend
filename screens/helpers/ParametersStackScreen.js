import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des pages
import Parameters from '../admin/parameters/Parameters';

const ParamatersStack = createNativeStackNavigator();

const ParametersStackScreen = () => {
  return (
    <ParamatersStack.Navigator screenOptions={{ headerShown: false }}>
      <ParamatersStack.Screen name="parametersStack" component={Parameters} />
    </ParamatersStack.Navigator>
  );
};

export default ParametersStackScreen;
