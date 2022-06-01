import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddButton = ({ text, action }) => {
  return (
    <Button onPress={action}>
      <Icon name="plus" size={30} />
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid #1f1300;
  padding: 10px 20px;
  background: #fdfdff;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export default AddButton;
