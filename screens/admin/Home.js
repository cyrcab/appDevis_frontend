import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import FastActionList from '../../components/fastActionHome/FastActionList';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View>
        <Text style={{ fontSize: 20 }}>This is the Home Page</Text>
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
      <View style={styles.fastActionContainer}>
        <Text>Actions rapides</Text>
        <FastActionList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#EEEFF5',
    alignItems: 'center',
  },
  fastActionContainer: {
    flex: 0.5,
    marginTop: 40,
  },
});

export default Home;
