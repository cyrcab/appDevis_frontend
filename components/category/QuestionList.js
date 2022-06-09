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
    <ListWrapper>
      <FlatList
        data={fakeQuestionList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal="false"
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  width: 95%;
`;

export default QuestionList;
