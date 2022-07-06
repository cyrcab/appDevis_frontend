import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import fetchAnswer from '../../helpers/api/fetchAnswer';
import Icon from 'react-native-vector-icons/Feather';

const AnswerEstimate = ({
  answer,
  answerList,
  setAnswerList,
  setAddingAnswerIsPressed,
  setGenerateButton,
}) => {
  const user = useSelector((state) => state.auth);
  const [inputIsPressed, setInputIsPressed] = useState(false);
  const [answerData, setAnswerData] = useState({
    content: null,
    price: null,
    user_id: null,
  });

  useEffect(() => {
    if (answer) {
      setAnswerData({
        content: answer.content,
        price: answer.price,
      });
    }
  }, [answer]);

  const handleAddingAnswer = () => {
    setAnswerList([...answerList, { ...answerData, user_id: user.id }]);
    setInputIsPressed(false);
    setGenerateButton(true);
    setAddingAnswerIsPressed(false);
  };

  const handleUpdateAnswer = () => {
    if (
      answerData.content !== answer.content ||
      answerData.price !== answer.price
    ) {
      setGenerateButton(true);
      fetchAnswer('PUT', answerData, answer.id).then((response) => {
        if (response.answer) {
          setAnswerList(
            answerList.map((el) =>
              el.id === response.answer.answer.id
                ? { ...el, ...response.answer.answer }
                : el,
            ),
          );
          setInputIsPressed(false);
          setAddingAnswerIsPressed(false);
        }
      });
    } else {
      setInputIsPressed(false);
      setGenerateButton(false);
    }
  };

  const handleDeleteAnswer = async () => {
    await fetchAnswer('DELETE', answerData, answer.id)
      .then((response) => {
        if (response.answer) {
          setAnswerList(
            answerList.filter((el) => el.id !== response.answer.id),
          );
          setInputIsPressed(false);
          setAddingAnswerIsPressed(false);
        }
      })
      .then(() => handleUpdateAnswer());
  };

  const testInput = () => {
    if (answerData.content && answerData.price) {
      return true;
    }
    return false;
  };

  return (
    <Main>
      <InputContent
        value={answerData.content}
        onChangeText={(text) => setAnswerData({ ...answerData, content: text })}
        isPressed={inputIsPressed}
        onFocus={() => setInputIsPressed(true)}
        placeholder="Option à rajouter"
      />
      <InputPrice
        value={answerData.price && answerData.price.toString()}
        onChangeText={(text) =>
          setAnswerData({ ...answerData, price: parseInt(text, 10) })
        }
        isPressed={inputIsPressed}
        onFocus={() => setInputIsPressed(true)}
        onEndEditing={
          answer && testInput() ? handleUpdateAnswer : handleAddingAnswer
        }
        placeholder="Prix"
      />
      <DeleteButton onPress={handleDeleteAnswer}>
        <Icon name="x" size={20} color="#8c8787" />
      </DeleteButton>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3%;
`;
const InputContent = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 65%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isPressed ? '60%' : '0')};
`;
const InputPrice = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 25%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isPressed ? '60%' : '0')};
`;
const DeleteButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default AnswerEstimate;
