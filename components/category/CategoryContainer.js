import React from 'react';
import styled from 'styled-components/native';

import QuestionList from './QuestionList';

const CategoryContainer = () => {
  return (
    <Main>
      <TitleSection>
        <Title>Graphisme</Title>
      </TitleSection>
      <QuestionSection>
        <QuestionList />
      </QuestionSection>
    </Main>
  );
};

const Main = styled.View`
  width: 85%;
  max-height: 95%;
`;
const TitleSection = styled.View`
  background: #f092ff;
  height: 30%;
  padding: 5% 4%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const QuestionSection = styled.View`
  background: #fdfdff;
  height: 70%;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default CategoryContainer;
