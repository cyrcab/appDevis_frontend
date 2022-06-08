import React from 'react';
import styled from 'styled-components/native';

const Question = ({content, indication }) => {
  return (
    <Main>
      <Text>{content}</Text>
    </Main>
  );
};

const Main = styled.View`
  width: 95%;
  border: 1px solid #8c8787;
  padding: 5%;
  margin-bottom: 10px;
`;
const Text = styled.Text``;

export default Question;
