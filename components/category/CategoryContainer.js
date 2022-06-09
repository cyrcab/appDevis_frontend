import React from 'react';
import styled from 'styled-components/native';

import QuestionList from './QuestionList';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';

const CategoryContainer = () => {
  return (
    <Main>
      <TitleSection>
        <Title>Graphisme</Title>
      </TitleSection>
      <QuestionSection>
        <QuestionList />
      </QuestionSection>
      <ButtonWrapper>
        <AddingQuestion />
      </ButtonWrapper>
    </Main>
  );
};

const Main = styled.View`
  width: 85%;
  max-height: 95%;
  background: #fdfdff;
  border-radius: 25px;
  box-shadow: 0px 0px 4px rgba(31,19,0,0.3);
`;
const TitleSection = styled.View`
  background: #f092ff;
  padding: 5% 4%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const QuestionSection = styled.View`
  max-height: 100%;
  display: flex;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const ButtonWrapper = styled.View`
  padding: 5% 3%;
  width: 55%;
`;

export default CategoryContainer;
