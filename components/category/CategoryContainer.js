import React from 'react';
import styled from 'styled-components/native';

import QuestionList from './QuestionList';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';

const CategoryContainer = ({ title, items }) => {
  return (
    <Main>
      <TitleSection>
        <Title>{title}</Title>
      </TitleSection>
      <QuestionSection>
        <QuestionList items={items} />
      </QuestionSection>
      <ButtonWrapper>
        <AddingQuestion />
      </ButtonWrapper>
    </Main>
  );
};

const Main = styled.View`
  width: 90%;
  height: 100%;
  margin-top: 0;
  border-radius: 25px;
  box-shadow: 0px 0px 4px rgba(31, 19, 0, 0.3);
`;
const TitleSection = styled.View`
  padding: 5% 3%;
  background: #f092ff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const QuestionSection = styled.View`
  padding: 5% 0;
  background: #fdfdff;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  padding: 5% 3%;
  background: #fdfdff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export default CategoryContainer;
