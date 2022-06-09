import React from 'react';
import styled from 'styled-components/native';

const Question = ({ content, indication }) => {
  return (
    <Main>
      <QuestionContent>{content}</QuestionContent>
      <AnswerNbr>4 réponses possibles</AnswerNbr>
    </Main>
  );
};

const Main = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid rgba(31, 19, 0, 0.3);
  margin-bottom: 10px;
  padding: 3%;
`;
const QuestionContent = styled.Text`
  font-size: 18px;
`;
const AnswerNbr = styled.Text`
  color: #ff9b42;
`;

export default Question;
