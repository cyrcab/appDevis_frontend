import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AnswerForm from './AnswerForm';

import AddButton from '../styled-components/buttons/AddButton';
import fetchAnswer from '../../helpers/api/fetchAnswer';
import deleteConfirmation from '../../helpers/Alert/deleteConfirmation';
import displayAlertError from '../../helpers/Alert/errorAlert';

const RenderAnswerInList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);
  const [answerToDelete, setAnswerToDelete] = useState(0);

  useEffect(() => {
    fetchAnswer('GET', null, null, null, questionId)
      .then((response) => response.answer)
      .then((answer) => setAnswerList(answer))
      .catch((err) => err);
  }, []);

  const handleDelete = async (id) => {
    await fetchAnswer('DELETE', null, id);
    setAnswerToDelete(id);
  };
  
  if (questionId) {
    return (
      <Main>
        <Title>Liste des réponses possibles</Title>
        {answerList
          .filter((el) => el.id !== answerToDelete)
          .map((el, i) => (
            <InputWrapper key={i}>
              <AnswerForm
                answer={el}
                isDeletable={true}
                setAddButtonIsPressed={setAddButtonIsPressed}
                setAnswerList={setAnswerList}
                answerList={answerList}
                deleteAnswer={(id) =>
                  deleteConfirmation('ANSWER', () => handleDelete(id))
                }
                questionId={questionId}
              />
            </InputWrapper>
          ))}
        {addButtonIsPressed ? (
          <InputWrapper>
            <AnswerForm
              setAddButtonIsPressed={setAddButtonIsPressed}
              isDeletable={false}
              setAnswerList={setAnswerList}
              answerList={answerList}
              questionId={questionId}
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
