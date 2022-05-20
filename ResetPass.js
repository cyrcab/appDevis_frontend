import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ResetPass = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Rentrez votre mail ici : </Text>
        <TextInput />
      </View>
    </SafeAreaView>
  );
};

export default ResetPass;
