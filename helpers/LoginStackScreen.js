import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des pages
import Login from '../screens/admin/Login';
import ResetPass from '../screens/admin/ResetPass';

const LoginStack = createNativeStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#083D77',
        },
        headerTintColor: '#EFEFEF',
      }}
    >
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen
        name="Reset Password"
        component={ResetPass}
        options={{
          headerShown: true,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
