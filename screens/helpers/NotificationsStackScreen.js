import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des pages
import Notifications from '../admin/Notifications';

const NotifyStack = createNativeStackNavigator();

const NotificationsStackScreen = () => {
  return (
    <NotifyStack.Navigator screenOptions={{ headerShown: false }}>
      <NotifyStack.Screen name="notifyStack" component={Notifications} />
    </NotifyStack.Navigator>
  );
};

export default NotificationsStackScreen;
