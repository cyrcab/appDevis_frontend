import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  console.log(navigation);

  return (
    <NavWrapper>
      <View>
        <CategoryNavBar
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <Icon name="home" size={30} color="white" />
          <TextNavBar>Accueil</TextNavBar>
        </CategoryNavBar>
      </View>
      <View>
        <CategoryNavBar
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        >
          <Icon5 name="bell" size={30} color="white" />
          <TextNavBar>Notifications</TextNavBar>
        </CategoryNavBar>
      </View>
      <View>
        <CategoryNavBar
          onPress={() => {
            navigation.navigate('Compte');
          }}
        >
          <Icon name="user" size={30} color="white" />
          <TextNavBar>Compte</TextNavBar>
        </CategoryNavBar>
      </View>
      <View>
        <CategoryNavBar
          onPress={() => {
            navigation.navigate('Paramètres');
          }}
        >
          <Icon name="gear" size={30} color="white" />
          <TextNavBar>Paramètres</TextNavBar>
        </CategoryNavBar>
      </View>
    </NavWrapper>
  );
};

const NavWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #083d77;
  padding: 20px;
  width: 90%;
  border-radius: 50px;
  align-self: center;
`;
const CategoryNavBar = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;

const TextNavBar = styled.Text`
  font-size: 10px;
  color: #efefef;
  opacity: 0.5;
  margin-top: 5px;
`;

export default NavBar;
