import React from 'react';
import styled from 'styled-components/native';

const AnswerEstimate = ({ content, price }) => {
  return (
    <Main>
      <InputContent value={content} />
      <InputPrice value={price && price.toString()} />
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
`;
const InputPrice = styled.TextInput`
  border: 1px solid black;
  padding: 3%;
  background: #fdfdff;
  width: 15%;
`;

export default AnswerEstimate;
