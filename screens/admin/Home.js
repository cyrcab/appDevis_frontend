import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// import des composants
import FastActionList from '../../components/fastActionHome/FastActionList';

const Home = () => {
  return (
    <HomeContainer>
      <View>
        <Text>This is the Home Page</Text>
      </View>
      <FastActionContainer>
        <Subtitle>Actions rapides</Subtitle>
        <FastActionList />
      </FastActionContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin: 2% 2%;
`;

export default Home;
