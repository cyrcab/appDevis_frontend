import React from 'react';
import styled from 'styled-components/native';

import AnswerForm from './AnswerForm';

const QuestionForm = (props) => {
  const { categoryId } = props;

  return (
    <Main>
      <InputWrapper>
        <QuestionContent value="" placeholder="Quelle est votre question" />
      </InputWrapper>
      <InputWrapper>
        <AnswerForm />
      </InputWrapper>
    </Main>
  );
};

// style général

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const InputWrapper = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
  width: 80%;
  padding: 3%;
  margin-top: 2%;
`;

// style parties concernant les questions
const QuestionContent = styled.TextInput`
  font-size: 20px;
  width: 100%;
`;

export default QuestionForm;
