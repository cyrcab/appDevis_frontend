import React from 'react';
import styled from 'styled-components/native';

import QuestionsCreationForm from '../../../components/styled-components/forms/QuestionsCreationForm';

const CreateQuestion = () => {
  return (
    <Main>
      <QuestionsCreationForm />
    </Main>
  );
};

const Main = styled.ScrollView``;
const Title = styled.Text``;

export default CreateQuestion;
