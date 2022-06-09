import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddButton = ({ text, action }) => {
  return (
    <Button onPress={action}>
      <ContentContainer>
        <Icon name="plus" size={30} />
        <ButtonText>{text}</ButtonText>
      </ContentContainer>
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
const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
`;

export default AddButton;
