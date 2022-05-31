import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import des pages
import Parameters from '../admin/parameters/Parameters';
import AccountListPage from '../admin/parameters/AccountListPage';
import AccountAdminView from '../admin/parameters/AccountAdminView';

const ParamatersStack = createNativeStackNavigator();

const ParametersStackScreen = () => {
  return (
    <ParamatersStack.Navigator screenOptions={{ headerShown: false }}>
      <ParamatersStack.Screen name="parametersStack" component={Parameters} />
      <ParamatersStack.Screen
        name="Liste des utilisateurs"
        component={AccountListPage}
      />
      <ParamatersStack.Screen
        name="Utilisateur admin view"
        component={AccountAdminView}
      />
    </ParamatersStack.Navigator>
  );
};

export default ParametersStackScreen;
