import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import AddButton from '../buttons/AddButton';
import RenderAnswerInList from '../../answer/RenderAnswerInList';
import fakeAnswerList from '../../../app/datas/fakeAnswerList';
import CheckBox from '../CheckBox';
import DeleteButton from '../buttons/DeleteButton';

const QuestionForm = (props) => {
  const { categoryId } = props;
  const [answerList, setAnswerList] = useState(fakeAnswerList);

  const handleAddAnswer = () => {
    setAnswerList([...answerList, []]);
  };
  const handleDeleteQuestion () => {
    
  }

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <InputWrapper>
        <QuestionContent value="" placeholder="Quelle est votre question" />
      </InputWrapper>
      {answerList && <RenderAnswerInList answers={answerList} />}
      <ButtonsWrapper>
        <CheckBox text="Question privée" />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <AddButton text="Ajouter une réponse" action={handleAddAnswer} />
      </ButtonsWrapper>
      <DeleteButtonWrapper>
        <DeleteButton text="Supprimer la question" />
      </DeleteButtonWrapper>
    </Main>
  );
};

// style général

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 8%;
`;
const InputWrapper = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
  width: 80%;
  padding: 3%;
  margin: 1% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonsWrapper = styled.View`
  width: 80%;
  margin: 1% 0;
`;
const DeleteButtonWrapper = styled.View`
  width: 80%;
  margin: 1% 0;
`;

// style parties concernant les questions
const QuestionContent = styled.TextInput`
  font-size: 20px;
  width: 100%;
`;
const Text = styled.Text`
  font-size: 18px;
`;

export default QuestionForm;
