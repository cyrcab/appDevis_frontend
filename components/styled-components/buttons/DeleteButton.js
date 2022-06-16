import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeleteButton = ({ text, action }) => {
  return (
    <Button onPress={action}>
      <ButtonText>{text}</ButtonText>
      <Icon name="trash" size={25} color="#ff4d42" />
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
