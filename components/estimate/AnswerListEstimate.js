import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import AnswerEstimate from './AnswerEstimate';

const AnswerListEstimate = ({ answerList, setAnswerList }) => {
  const renderItem = ({ item }) => {
    return (
      <AnswerEstimate
        answer={item}
        setAnswerList={setAnswerList}
        answerList={answerList}
      />
    );
  };

  if (answerList) {
    return (
      <Main>
        <FlatList
          data={answerList}
          renderItem={renderItem}
          keyExtractor={(item, i) => item.id || i}
          horizontal="false"
        />
      </Main>
    );
  }
  return <></>;
};

const Main = styled.View`
  width: 100%;
`;

export default AnswerListEstimate;
