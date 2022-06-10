import React from 'react';
import styled from 'styled-components/native';
import AnswerForm from '../styled-components/forms/AnswerForm';

const RenderAnswerInList = ({ answers, setAnswerList }) => {
  const handleDelete = (id) => {
    setAnswerList(answers.filter((el) => el.id !== id));
  };

  if (answers[0]) {
    return (
      <Main>
        <Title>Liste des réponses possibles</Title>
        {answers.map((el, i) => (
          <InputWrapper key={i}>
            <AnswerForm
              answerId={el.id}
              answerAction={() => handleDelete(el.id)}
            />
          </InputWrapper>
        ))}
      </Main>
    );
  }
  return null;
};
const Main = styled.View`
  width: 80%;
  display: flex;
  align-items: center;
  background: red;
  padding: 2% 0;
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
`;
const Title = styled.Text`
  font-size: 20px;
  margin: 5% 0;
`;
const InputWrapper = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.7);
  width: 95%;
  padding: 3%;
  margin: 1% 0;
`;

export default RenderAnswerInList;
