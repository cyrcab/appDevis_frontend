import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import QuestionForm from './QuestionForm';

const QuestionList = ({ listOfQuestion, setListOfQuestion }) => {
  const renderItem = ({ item }) => {
    return (
      <QuestionForm
        isDeletable={true}
        question={item}
        listOfQuestion={listOfQuestion}
        setListOfQuestion={setListOfQuestion}
      />
    );
  };

  if (listOfQuestion) {
    return (
      <ListWrapper>
        <FlatList
          data={listOfQuestion}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal="false"
        />
      </ListWrapper>
    );
  }
  return <></>;
};

const ListWrapper = styled.View`
  width: 95%;
  background: #e5e5e5;
`;

export default QuestionList;
