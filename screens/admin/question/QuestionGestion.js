import React from 'react';
import styled from 'styled-components/native';

import QuestionForm from '../../../components/styled-components/forms/QuestionForm';

const QuestionGestion = ({ route }) => {
  const { categoryId, questionData } = route.params;

  return (
    <Main>
      <QuestionForm categoryId={categoryId} questionData={questionData} />
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #e5e5e5;
`;

export default QuestionGestion;
