import React from 'react';
import styled from 'styled-components/native';

import AnswerEstimate from './AnswerEstimate';

const AnswerListEstimate = ({ answerList, newAnswer, setNewAnswer }) => {
  return (
    <Main>
      {answerList &&
        answerList.map((el, i) => (
          <AnswerEstimate
            content={el.content}
            price={el.price}
            key={i}
            newAnswer={newAnswer}
            setNewAnswer={setNewAnswer}
          />
        ))}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
`;

export default AnswerListEstimate;
