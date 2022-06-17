import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AnswerForm from './AnswerForm';

import AddButton from '../styled-components/buttons/AddButton';
import fetchAnswer from '../../screens/helpers/api/fetchAnswer';
import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';
import displayAlertError from '../../screens/helpers/Alert/errorAlert';

const RenderAnswerInList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);

  useEffect(() => {
    fetchAnswer('GET', null, null, null, questionId)
      .then((response) => response.answer)
      .then((answer) => setAnswerList(answer))
      .catch((err) => err);
  }, []);

  const handleDelete = (id) => {
    fetchAnswer('DELETE', null, id)
      .then((response) => {
        if (response.answer) {
          setAnswerList(answerList.filter((el) => el.id !== id));
        }
        if (response.errors) {
          displayAlertError(response.errors);
        }
      })
      .catch((err) => displayAlertError(err));
  };

  if (questionId) {
    return (
      <Main>
        <Title>Liste des réponses possibles</Title>
        {answerList.map((el, i) => (
          <InputWrapper key={i}>
            <AnswerForm
              answer={el}
              isDeletable={true}
              setAddButtonIsPressed={setAddButtonIsPressed}
              deleteAnswer={(id) =>
                deleteConfirmation('ANSWER', () => handleDelete(id))
              }
            />
          </InputWrapper>
        ))}
        {addButtonIsPressed ? (
          <InputWrapper>
            <AnswerForm
              setAddButtonIsPressed={setAddButtonIsPressed}
              isDeletable={false}
            />
          </InputWrapper>
        ) : (
          <ButtonWrapper>
            <AddButton
              text="Ajouter une réponse"
              action={() => setAddButtonIsPressed(true)}
            />
          </ButtonWrapper>
        )}
      </Main>
    );
  }
  return null;
};
const Main = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
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
  width: 90%;
  padding: 3%;
  margin: 1% 0;
`;
const ButtonWrapper = styled.View`
  width: 90%;
`;

export default RenderAnswerInList;
