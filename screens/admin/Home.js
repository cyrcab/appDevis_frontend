import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import FastActionList from '../../components/fastActionHome/FastActionList';

import NavBar from '../../components/navBar/NavBar';

const Home = ({ navigation }) => {
  return (
    <HomeContainer>
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
      <FastActionContainer>
        <Text>Actions rapides</Text>
        <FastActionList />
      </FastActionContainer>
      <NavBar />
    </HomeContainer>
  );
};

const HomeContainer = styled.SafeAreaView`
  backgroundcolor: '#EEEFF5';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FastActionContainer = styled.View`
  height: 60%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
