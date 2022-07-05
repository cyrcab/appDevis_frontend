import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import fetchAnswer from '../../helpers/api/fetchAnswer';
// import DeleteButton from '../../components/styled-components/buttons/DeleteButton';

const AnswerEstimate = ({
  answer,
  answerList,
  setAnswerList,
  setAddingAnswerIsPressed,
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
    setAddingAnswerIsPressed(false);
  };

  const handleUpdateAnswer = () => {
    fetchAnswer('PUT', answerData, answer.id).then((response) => {
      if (response.answer) {
        setAnswerList(
          answerList.map((el) =>
            el.id === response.answer.id ? response.answer : el,
          ),
        );
        setInputIsPressed(false);
        setAddingAnswerIsPressed(false);
      }
    });
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
      {/* <ButtonContainer>
        <DeleteButton action={handleDeleteAnswer} />
      </ButtonContainer> */}
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3%;
`;
const InputContent = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 80%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isPressed ? '60%' : '0')};
`;
const InputPrice = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 15%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isPressed ? '60%' : '0')};
`;

export default AnswerEstimate;
