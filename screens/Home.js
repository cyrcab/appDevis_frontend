import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is the Home Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Paramaters page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
          <Text>Compte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Paramètres')}>
          <Text>Paramètres</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
