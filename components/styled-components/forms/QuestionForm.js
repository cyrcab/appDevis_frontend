import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import AddButton from '../buttons/AddButton';
import RenderAnswerInList from '../../answer/RenderAnswerInList';
import CheckBox from '../CheckBox';
import DeleteButton from '../buttons/DeleteButton';
import DuoButton from '../buttons/DuoButton';

import questionAreDifferent from './saveButtonIsClickable';
import fetchQuestion from '../../../screens/helpers/api/fetchQuestion';
import displayAlertError from '../../../screens/helpers/Alert/errorAlert';

const QuestionForm = ({
  isDeletable,
  question,
  setAddingQuestionIsPressed,
}) => {
  const [answerList, setAnswerList] = useState([]);
  const [inputIsFocused, setInPutIsFocused] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [questionData, setQuestionData] = useState({
    content: null,
    has_multiple_choice: null,
    is_public: null,
  });
  const [fetchAction, setFetchAction] = useState('');

  const user = useSelector((state) => state.auth);
  const userName = user.firstName + ' ' + user.lastName;

  useEffect(() => {
    if (question) {
      setQuestionData({
        content: question.Question.content,
        has_multiple_choice: question.Question.has_multiple_choice,
        is_public: question.Question.is_public,
      });
      setIsClickable(false);
      setFetchAction('PUT');
    } else {
      setFetchAction('CREATE');
    }
  }, []);

  const randomId = Math.floor(Math.random() * 100);

  const handleAddAnswer = () => {
    setAnswerList([
      ...answerList,
      {
        id: randomId,
      },
    ]);
  };

  useEffect(() => {
    if (question) {
      if (questionAreDifferent(question.Question, questionData)) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    }
  }, [questionData]);

  const handleFetchApi = async () => {
    if (fetchAction === 'PUT') {
      fetchQuestion(
        fetchAction,
        questionData,
        user.id,
        question.Question.id,
        userName,
      ).then((response) => {
        if (response.errors) {
          displayAlertError(response.errors);
        } else {
          setIsClickable(false);
        }
      });
    }
  };

  return (
    <Main>
      <InputWrapper>
        <QuestionContent
          autoFocus={setAddingQuestionIsPressed ? true : false}
          value={questionData.content}
          onChangeText={(value) =>
            setQuestionData({ ...questionData, content: value })
          }
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
              status={questionData.is_public}
              action={() =>
                setQuestionData({
                  ...questionData,
                  is_public: !questionData.is_public,
                })
              }
            />
          </ButtonsWrapper>
          <ButtonsWrapper>
            <CheckBox
              text="Choix multiple"
              status={questionData.has_multiple_choice}
              action={() =>
                setQuestionData({
                  ...questionData,
                  has_multiple_choice: !questionData.has_multiple_choice,
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
              actionLeft={() => {
                setInPutIsFocused(false);
                setAddingQuestionIsPressed
                  ? setAddingQuestionIsPressed(false)
                  : null;
              }}
              righIsClickable={isClickable}
              actionRight={handleFetchApi}
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
