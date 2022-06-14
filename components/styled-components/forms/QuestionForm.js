import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';

import AddButton from '../buttons/AddButton';
import RenderAnswerInList from '../../answer/RenderAnswerInList';
import CheckBox from '../CheckBox';
import DeleteButton from '../buttons/DeleteButton';
import FirstButton from '../buttons/FirstButton';

const QuestionForm = (props) => {
  const { questionData } = props;
  const [answerList, setAnswerList] = useState([]);
  const randomId = Math.floor(Math.random() * 100);

  const [question, setQuestion] = useState({
    is_public: null,
    content: null,
    modified_by: null,
    indication: null,
    has_multiple_choice: null,
  });

  const handleAddAnswer = () => {
    setAnswerList([
      ...answerList,
      {
        id: randomId,
      },
    ]);
  };

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <InputWrapper>
        <QuestionContent
          value={question.content}
          onChangeText={(value) => setQuestion({ ...question, content: value })}
          placeholder="Quelle est votre question"
        />
      </InputWrapper>
      {answerList && (
        <RenderAnswerInList
          answers={answerList}
          setAnswerList={setAnswerList}
        />
      )}
      <ButtonsWrapper>
        <AddButton text="Ajouter une réponse" action={handleAddAnswer} />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <CheckBox
          text="Question privée"
          status={question.is_public}
          action={() =>
            setQuestion({ ...question, is_public: !question.is_public })
          }
        />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <CheckBox
          text="Choix multiple"
          action={() =>
            setQuestion({
              ...question,
              has_multiple_choice: !question.is_public,
            })
          }
        />
      </ButtonsWrapper>
      <DeleteButtonWrapper>
        <DeleteButton text="Supprimer la question" />
      </DeleteButtonWrapper>
      <SaveButtonWrapper>
        <FirstButton
          text="Save"
          isClickable={question.content !== null ? true : false}
        />
      </SaveButtonWrapper>
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
const SaveButtonWrapper = styled.View`
  width: 60%;
  height: 15%;
  margin-top: 30%;
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
