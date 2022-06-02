import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeleteButton = ({ text, action }) => {
  return (
    <Button onPress={action}>
      <Icon name="trash" size={30} color="#ff4d42" />
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid #ff4d42;
  padding: 10px 20px;
  background: #fdfdff;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #ff4d42;
`;

export default DeleteButton;
