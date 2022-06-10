import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AnswerForm = () => {
  return (
    <Main>
      <InputContainer>
        <AnswerContent placeholder="Ceci est une réponse" />
        <IconContainer>
          <Icon name="trash" size={20} color="rgba(31, 19, 0, 0.8)" />
        </IconContainer>
      </InputContainer>
    </Main>
  );
};

const Main = styled.View``;

// style concernant les réponses
const IconContainer = styled.TouchableOpacity`
  width: 10%;
  margin-left: 5%;
`;
const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AnswerContent = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;
const Text = styled.Text`
  font-size: 18px;
`;

export default AnswerForm;
