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
  listOfQuestion,
  setListOfQuestion,
  setAddingQuestionIsPressed,
  categoryId,
}) => {
  const [answerList, setAnswerList] = useState([]);
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
      if (questionAreDifferent(question, questionData)) {
        setIsClickable(true);
      } else {
        setIsClickable(true);
      }
    } else {
      if (questionData.content !== null) {
        setIsClickable(true);
      }
    }
  }, [questionData]);

  const handleFetchApi = async () => {
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

const Main = styled.View`
  display: flex;
  align-items: center;
`;
const OtherOptions = styled.View`
  background: #fdfdff;
  padding: 3%;
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
