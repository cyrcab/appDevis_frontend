import React from 'react';
import styled from 'styled-components/native';

import AnswerEstimate from './AnswerEstimate';

const AnswerListEstimate = ({ answerList }) => {
  return (
    <Main>
      {answerList &&
        answerList.map((el) => (
          <AnswerEstimate content={el.content} price={el.price} key={el.id} />
        ))}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
`;
const Text = styled.Text``;

export default AnswerListEstimate;
