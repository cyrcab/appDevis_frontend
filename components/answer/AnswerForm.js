import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

import DuoButton from '../styled-components/buttons/DuoButton';
import fetchAnswer from '../../screens/helpers/api/fetchAnswer';
import displayAlertError from '../../screens/helpers/Alert/errorAlert';

import { answerAreDifferent } from '../saveButtonIsClickable';

const AnswerForm = ({
  setAddButtonIsPressed,
  answer,
  isDeletable,
  deleteAnswer,
  setAnswerList,
  answerList,
  questionId,
}) => {
  const [inputIsPressed, setInPutIsPressed] = useState(false);
  const [answerData, setAnswerData] = useState({
    content: null,
    question_id: questionId,
  });
  const [fetchAction, setFetchAction] = useState('');
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (answer) {
      setAnswerData({
        content: answer.content,
        price: answer.price,
        offer_id: answer.offer_id ? answer.offer_id : undefined,
      });
      setFetchAction('PUT');
    } else {
      setFetchAction('CREATE');
    }
  }, []);

  useEffect(() => {
    if (answer) {
      if (answerAreDifferent(answer, answerData)) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    } else {
      if (answerData.content !== null) {
        setIsClickable(true);
      }
    }
  }, [answerData]);

  const user = useSelector((state) => state.auth);
  const userName = user.firstName + ' ' + user.lastName;

  const handleFetchApi = () => {
    if (fetchAction === 'PUT') {
      fetchAnswer(fetchAction, answerData, answer.id, null, null, userName)
        .then((response) => {
          if (response.errors) {
            displayAlertError(response.errors);
          } else {
            setInPutIsPressed(false);
          }
        })
        .catch((err) => displayAlertError(err));
    }
    if (fetchAction === 'CREATE') {
      fetchAnswer(fetchAction, answerData, null, user.id)
        .then((response) => {
          if (response.errors) {
            displayAlertError(response.errors);
          } else {
            setAnswerList([...answerList, response.answer.answerToCreate]);
            setAddButtonIsPressed(false);
          }
        })
        .catch((err) => displayAlertError(err));
    }
  };

  return (
    <Main>
      <InputContainer>
        <AnswerContent
          value={answerData.content}
          placeholder="Ceci est une réponse"
          onChangeText={(value) =>
            setAnswerData({ ...answerData, content: value })
          }
          onFocus={() => setInPutIsPressed(true)}
        />
        {isDeletable ? (
          <IconContainer onPress={() => deleteAnswer(answer.id)}>
            <Icon name="trash" size={20} color="rgba(31, 19, 0, 0.8)" />
          </IconContainer>
        ) : null}
      </InputContainer>

      {inputIsPressed ? (
        <>
          <InputContainer>
            <AnswerContent
              value={answerData.price && answerData.price.toString()}
              keyboardType="numeric"
              placeholder="Prix (si nécessaire)"
              onChangeText={(value) =>
                setAnswerData({ ...answerData, price: parseInt(value, 10) })
              }
            />
          </InputContainer>
          <ButtonContainer>
            <DuoButton
              textRight="Sauvegarder"
              textLeft="Annuler"
              righIsClickable={isClickable}
              actionRight={handleFetchApi}
              actionLeft={() => {
                setAddButtonIsPressed(false);
                setInPutIsPressed(false);
              }}
            />
          </ButtonContainer>
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
`;

// style concernant les réponses
const IconContainer = styled.TouchableOpacity`
  width: 10%;
  margin-left: 5%;
`;
const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3%;
  margin: 2% 0;
  border: 1px solid rgba(31, 19, 0, 0.3);
`;
const AnswerContent = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;

const ButtonContainer = styled.View`
  margin-top: 2%;
`;

const Text = styled.Text`
  font-size: 18px;
`;

export default AnswerForm;
