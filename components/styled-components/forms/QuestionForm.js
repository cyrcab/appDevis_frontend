import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import AddButton from '../buttons/AddButton';
import RenderAnswerInList from '../../answer/RenderAnswerInList';
import fakeAnswerList from '../../../app/datas/fakeAnswerList';

const QuestionForm = (props) => {
  const { categoryId } = props;
  const [addingButtonIsClicked, setAddingButtonIsClicked] = useState(false);
  const [answerList, setAnswerList] = useState(fakeAnswerList);

  const handleAddAnswer = () => {
    setAddingButtonIsClicked(true);
    setAnswerList([...answerList, []]);
  };

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <InputWrapper>
        <QuestionContent value="" placeholder="Quelle est votre question" />
      </InputWrapper>
      {answerList && <RenderAnswerInList answers={answerList} />}
      <ButtonsWrapper>
        <AddButton text="Ajouter une réponse" action={handleAddAnswer} />
      </ButtonsWrapper>
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
`;
const ButtonsWrapper = styled.View`
  width: 80%;
  margin: 1% 0;
`;

// style parties concernant les questions
const QuestionContent = styled.TextInput`
  font-size: 20px;
  width: 100%;
`;

export default QuestionForm;
