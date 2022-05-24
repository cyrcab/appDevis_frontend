import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import FastActionList from '../../components/fastActionHome/FastActionList';

import NavBar from '../../components/navBar/NavBar';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
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
      <View style={styles.fastActionContainer}>
        <Text>Actions rapides</Text>
        <FastActionList />
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

const HomeContainer = styled.View``;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#EEEFF5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fastActionContainer: {
    flex: 0.5,
    marginTop: 40,
  },
});

export default Home;
