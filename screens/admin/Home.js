import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FastActionList from '../../components/fastActionHome/FastActionList';

import EstimateList from './estimates/EstimateList';
import OfferList from './offer/OfferList';
import CategoryList from './category/CategoryList';
import EstimateCreation from './estimates/EstimateCreation';

// import NavBar from '../../components/navBar/NavBar';

export const Home = ({ navigation }) => {
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
        <Subtitle>Actions rapides</Subtitle>
        <FastActionList />
      </FastActionContainer>
      {/* <NavBar /> */}
    </HomeContainer>
  );
};

const HomeContainer = styled.SafeAreaView`
  backgroundcolor: '#EEEFF5';
  display: flex;
  flex-direction: column;
`;

const FastActionContainer = styled.View`
  height: 60%;
  ${'' /* border: 1px solid black; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin-left: 3%;
`;

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Accueil" component={Home} />
      <HomeStack.Screen name="Liste des devis" component={EstimateList} />
      <HomeStack.Screen name="Création de devis" component={EstimateCreation} />
      <HomeStack.Screen name="Liste des catégories" component={CategoryList} />
      <HomeStack.Screen name="Liste des offres" component={OfferList} />
    </HomeStack.Navigator>
  );
};
