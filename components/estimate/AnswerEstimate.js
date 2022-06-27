import React, { useState } from 'react';
import styled from 'styled-components/native';

const AnswerEstimate = ({ content, price, newAnswer, setNewAnswer }) => {
  const [answer, setAnswer] = useState({
    content,
    price,
  });
  const [inputIsPressed, setInputIsPressed] = useState(false);

  return (
    <Main>
      <InputContent
        value={answer.content}
        onChangeText={(text) => setAnswer({ ...answer, content: text })}
        isPressed={inputIsPressed}
        onFocus={() => setInputIsPressed(true)}
        onEndEditing={() => setInputIsPressed(false)}
      />
      <InputPrice
        value={answer.price && answer.price.toString()}
        onChangeText={(text) => setAnswer({ ...answer, price: text })}
        isPressed={inputIsPressed}
        onFocus={() => setInputIsPressed(true)}
        onEndEditing={() => setInputIsPressed(false)}
      />
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
  margin-bottom: ${(props) => (props.isPressed ? '30%' : '0')};
`;
const InputPrice = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 15%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isPressed ? '30%' : '0')};
`;

export default AnswerEstimate;
