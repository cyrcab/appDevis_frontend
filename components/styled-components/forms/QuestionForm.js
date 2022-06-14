import React, { useState } from 'react';
import styled from 'styled-components/native';

import AddButton from '../buttons/AddButton';
import RenderAnswerInList from '../../answer/RenderAnswerInList';
import CheckBox from '../CheckBox';
import DeleteButton from '../buttons/DeleteButton';
import DuoButton from '../buttons/DuoButton';

const QuestionForm = (props) => {
  const { isDeletable } = props;
  const [answerList, setAnswerList] = useState([]);
  const [inputIsFocused, setInPutIsFocused] = useState(false);
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
    <Main>
      <InputWrapper>
        <QuestionContent
          value={question.content}
          onChangeText={(value) => setQuestion({ ...question, content: value })}
          onFocus={() => setInPutIsFocused(true)}
          placeholder="Quelle est votre question"
        />
      </InputWrapper>
      {inputIsFocused ? (
        <OtherOptions>
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
          {isDeletable ? (
            <DeleteButtonWrapper>
              <DeleteButton text="Supprimer la question" />
            </DeleteButtonWrapper>
          ) : null}
          <SaveButtonWrapper>
            <DuoButton
              textLeft="Cancel"
              textRight="Save"
              actionLeft={() => setInPutIsFocused(false)}
              righIsClickable={false}
            />
          </SaveButtonWrapper>
        </OtherOptions>
      ) : null}
    </Main>
  );
};

// style général

const Main = styled.ScrollView``;
const OtherOptions = styled.View`
  margin-bottom: 100%;
  height: 100%;
`;
const InputWrapper = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 3%;
  margin: 1% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ButtonsWrapper = styled.View`
  margin: 1% 0;
`;
const DeleteButtonWrapper = styled.View`
  margin: 1% 0;
`;
const SaveButtonWrapper = styled.View`
  height: 15%;
`;

// style parties concernant les questions
const QuestionContent = styled.TextInput`
  font-size: 20px;
  width: 100%;
`;
export default QuestionForm;
