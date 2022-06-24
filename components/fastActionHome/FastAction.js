// besoin d'un lien, titre, logo
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const FastAction = ({ title, link, logo }) => {
  const navigation = useNavigation();

  return (
    <MainContainer
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate(link);
      }}
    >
      <IconContainer>
        <Icon name={logo} size={30} color="rgba(8, 61, 119, 1)" />
      </IconContainer>
      <Title>{title}</Title>
    </MainContainer>
  );
};

const MainContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fdfdff;
  padding: 10px;
  margin-bottom: 5%;
  border: 1px solid rgba(8, 61, 119, 1);
  border-radius: 10px;
`;
const IconContainer = styled.View`
  width: 20%;
  border: 1px solid rgba(8, 61, 119, 1);
  padding: 2%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  border-radius: 10px;
`;
const Title = styled.Text`
  font-size: 18px;
  margin-left: 5%;
`;

export default FastAction;
