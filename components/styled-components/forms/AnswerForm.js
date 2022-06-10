import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AnswerForm = () => {
  return (
    <AnswerContainer>
      <AnswerContent placeholder="Ceci est une réponse" />
      <IconContainer>
        <Icon name="trash" size={20} />
      </IconContainer>
    </AnswerContainer>
  );
};

// style concernant les réponses
const IconContainer = styled.TouchableOpacity`
  width: 10%;
  margin-left: 5%;
`;
const AnswerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AnswerContent = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;

export default AnswerForm;
