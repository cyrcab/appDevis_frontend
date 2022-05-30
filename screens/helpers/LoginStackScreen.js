import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des pages
import Login from '../admin/Login';
import ResetPass from '../admin/ResetPass';

const LoginStack = createNativeStackNavigator();
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: true }}>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Reset Password" component={ResetPass} />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
