import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AccountInfos = ({ user }) => {
  const { mail, role_name, firstName, lastName } = user;

  const nameToDisplay = firstName + ' ' + lastName;

  return (
    <Main>
      <IconContainer>
        <Icon name="user" size={120} color="#1f1300" />
      </IconContainer>
      <InfoContainer>
        <TextName>{mail}</TextName>
        <Text>{nameToDisplay.toUpperCase()}</Text>
        <Text>{role_name ? role_name : user.Role.Name}</Text>
      </InfoContainer>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
  background: #eeeff5;
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
