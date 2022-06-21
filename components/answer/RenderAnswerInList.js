import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AnswerForm from './AnswerForm';
import Icon from 'react-native-vector-icons/FontAwesome';

import AddButton from '../styled-components/buttons/AddButton';
import fetchAnswer from '../../helpers/api/fetchAnswer';
import deleteConfirmation from '../../helpers/Alert/deleteConfirmation';
import displayAlertError from '../../helpers/Alert/errorAlert';

const RenderAnswerInList = ({ questionId }) => {
  const [answerList, setAnswerList] = useState([]);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  useEffect(() => {
    fetchAnswer('GET', null, null, null, questionId)
      .then((response) => response.answer)
      .then((answer) => setAnswerList(answer))
      .catch((err) => err);
  }, []);

  const handleDelete = async (id) => {
    await fetchAnswer('DELETE', null, id);
  };

  if (questionId) {
    return (
      <Main>
        {displayAnswer ? (
          <DisplayAnswerView onPress={() => setDisplayAnswer(false)}>
            <Title>Cacher les réponses</Title>
            <Icon name="eye-slash" size={20} />
          </DisplayAnswerView>
        ) : (
          <DisplayAnswerView onPress={() => setDisplayAnswer(true)}>
            <Title>Afficher les réponses ({answerList.length})</Title>
            <Icon name="eye" size={20} />
          </DisplayAnswerView>
        )}
        {displayAnswer &&
          answerList.map((el, i) => (
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
            {displayAnswer && (
              <AddButton
                text="Ajouter une réponse"
                action={() => setAddButtonIsPressed(true)}
              />
            )}
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
const DisplayAnswerView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 20px;
  margin: 5% 2%;
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
