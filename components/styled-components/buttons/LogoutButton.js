import React from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const LogoutButton = ({ onPress }) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>Déconnexion</ButtonText>
      <Icon name="logout" size={20} />
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  background: #fdfdff;
  padding: 15px;
  border-radius: 30px;
  margin-top: 5%;
  width: 50%;
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  margin-right: 10px;
  font-weight: 600;
`;

export default LogoutButton;
