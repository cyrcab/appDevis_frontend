import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Question from './Question';

const QuestionList = ({ items }) => {
  const renderItem = ({ item }) => {
    return <Question question={item.Question} />;
  };

  if (items) {
    return (
      <ListWrapper>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.question_id}
          horizontal="false"
        />
      </ListWrapper>
    );
  }
  return <></>;
};

const ListWrapper = styled.View`
  width: 95%;
`;

export default QuestionList;
