import React from 'react';
import styled from 'styled-components/native';
import AnswerForm from '../styled-components/forms/AnswerForm';

const RenderAnswerInList = ({ answers }) => {
  if (answers[0]) {
    return (
      <>
        {answers.map((el, i) => (
          <InputWrapper key={i}>
            <AnswerForm />
          </InputWrapper>
        ))}
      </>
    );
  }
  return null;
};
const InputWrapper = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
  width: 80%;
  padding: 3%;
  margin: 1% 0;
`;

export default RenderAnswerInList;
