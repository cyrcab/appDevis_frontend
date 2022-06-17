import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import AddButton from '../styled-components/buttons/AddButton';
import RenderAnswerInList from '../answer/RenderAnswerInList';
import CheckBox from '../styled-components/CheckBox';
import DeleteButton from '../styled-components/buttons/DeleteButton';
import DuoButton from '../styled-components/buttons/DuoButton';

import {questionAreDifferent} from '../saveButtonIsClickable';
import fetchQuestion from '../../screens/helpers/api/fetchQuestion';
import displayAlertError from '../../screens/helpers/Alert/errorAlert';
import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';

const QuestionForm = ({
  isDeletable,
  question,
  listOfQuestion,
  setListOfQuestion,
  setAddingQuestionIsPressed,
  categoryId,
}) => {
  const [inputIsFocused, setInPutIsFocused] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [questionData, setQuestionData] = useState({
    category_id: categoryId,
    content: null,
    has_multiple_choice: false,
    is_public: false,
  });
  const [fetchAction, setFetchAction] = useState('');

  const user = useSelector((state) => state.auth);
  const userName = user.firstName + ' ' + user.lastName;

  useEffect(() => {
    if (question) {
      setQuestionData({
        content: question.content,
        has_multiple_choice: question.has_multiple_choice,
        is_public: question.is_public,
      });
      setIsClickable(false);
      setFetchAction('PUT');
    } else {
      setFetchAction('CREATE');
    }
  }, []);

  useEffect(() => {
    if (question) {
      if (questionAreDifferent(question, questionData)) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    } else {
      if (questionData.content !== null) {
        setIsClickable(true);
      }
    }
  }, [questionData]);

  const handleFetchApi = () => {
    if (fetchAction === 'PUT') {
      fetchQuestion(
        fetchAction,
        questionData,
        user.id,
        null,
        question.id,
        userName,
      ).then((response) => {
        if (response.errors) {
          displayAlertError(response.errors);
        } else {
          setIsClickable(false);
        }
      });
    }
    if (fetchAction === 'CREATE') {
      fetchQuestion(fetchAction, questionData, user.id)
        .then((response) => response.question)
        .then((question) => {
          setListOfQuestion([...listOfQuestion, question.questionToCreate]);
          setAddingQuestionIsPressed(false);
        })
        .catch((errors) => console.log(errors));
    }
  };

  const handleDeteleQuestion = async () => {
    await fetchQuestion('DELETE', null, null, null, question.id);
    setListOfQuestion(listOfQuestion.filter((el) => el.id !== question.id));
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
          <RenderAnswerInList questionId={question ? question.id : null} />
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
              <DeleteButton
                text="Supprimer la question"
                action={() => {
                  deleteConfirmation('QUESTION', handleDeteleQuestion);
                }}
              />
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

const Main = styled.View`
  display: flex;
  align-items: center;
`;
const OtherOptions = styled.View`
  width: 100%;
  margin-bottom: 200%;
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
const SaveButtonWrapper = styled.View``;

// style parties concernant les questions
const QuestionContent = styled.TextInput`
  font-size: 20px;
  width: 100%;
`;
export default QuestionForm;
