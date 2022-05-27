import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { DISCONNECT } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

const Paramaters = () => {
  const dispatch = useDispatch();
  const disconnectUser = () => {
    dispatch(DISCONNECT());
  };

  return (
    <SafeAreaView>
      <View>
        <Text>This is the parameters page</Text>
        <Button onPress={disconnectUser} title="Déconnexion" />
      </View>
    </SafeAreaView>
  );
};

export default Paramaters;
