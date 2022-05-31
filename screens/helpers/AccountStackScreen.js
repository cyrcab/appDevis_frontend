import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../admin/Account/Account';
import UpdateMail from '../admin/Account/UpdateMail';
import UpdatePassword from '../admin/Account/UpdatePassword';

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="accountStack" component={Account} />
      <AccountStack.Screen name="updateMail" component={UpdateMail} />
      <AccountStack.Screen name="updatePass" component={UpdatePassword} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
