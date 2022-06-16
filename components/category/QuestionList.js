import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import QuestionForm from '../styled-components/forms/QuestionForm';

const QuestionList = ({ items }) => {
  const [listOfQuestion, setListOfQuestion] = useState(items);

  const renderItem = ({ item }) => {
    return <QuestionForm isDeletable={true} question={item} />;
  };

  if (items) {
    return (
      <ListWrapper>
        <FlatList
          data={listOfQuestion}
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
