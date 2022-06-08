import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Question from './Question';
import fakeQuestionList from '../../app/datas/fakeQuestion';

const QuestionList = () => {
  const renderItem = ({ item }) => {
    return <Question content={item.content} />;
  };

  return (
    <FlatList
      data={fakeQuestionList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal="false"
    />
  );
};

const ListWrapper = styled.View``;

export default QuestionList;
