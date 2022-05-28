import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountInfos = ({ name, userRole }) => {
  return (
    <Main>
      <IconContainer>
        <Icon name="user" size={120} color="#1f1300" />
      </IconContainer>
      <InfoContainer>
        <TextName>{name}</TextName>
        <Text>ici sera le mail</Text>
        <Text>ici sera le status</Text>
      </InfoContainer>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #1f1300;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  background-color: #fdfdff;
`;
const InfoContainer = styled.View`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;
const TextName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export default AccountInfos;
