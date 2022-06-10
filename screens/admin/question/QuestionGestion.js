import React from 'react';
import styled from 'styled-components/native';

import QuestionForm from '../../../components/styled-components/forms/QuestionForm';

const QuestionGestion = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <Main>
      <QuestionForm categoryId={categoryId} />
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #e5e5e5;
`;
const Title = styled.Text``;

export default QuestionGestion;
