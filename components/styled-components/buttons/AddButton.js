import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = ({ text, action }) => {
  return (
    <Button onPress={action}>
      <ButtonText>{text}</ButtonText>
      <Icon name="plus" size={25} color="rgba(31, 19, 0, 0.6)" />
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 10px 20px;
  background: #fdfdff;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: rgba(31, 19, 0, 0.6);
`;

export default AddButton;
