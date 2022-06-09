import React, { useState } from 'react';
import styled from 'styled-components/native';

import QuestionList from './QuestionList';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';
import AddButton from '../styled-components/buttons/AddButton';
import AddingNewCategory from './AddingNewCategory';

const CategoryContainer = ({ category }) => {
  const { name: title, questions: items } = category;
  const [isClicked, setIsClicked] = useState(false);

  if (!title) {
    if (!isClicked) {
      return (
        <AddingButtonContainer>
          <AddButton
            text="Ajouter une catégorie"
            action={() => setIsClicked(true)}
          />
        </AddingButtonContainer>
      );
    } else {
      return (
        <AddingButtonContainer>
          <AddingNewCategory cancelButton={setIsClicked} />
        </AddingButtonContainer>
      );
    }
  }

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
  width: 100%;
  height: 80%;
  margin-top: 5%;
  border-radius: 25px;
  box-shadow: 0px 0px 2px rgba(31, 19, 0, 0.3);
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
  padding: 5% 0 0 0;
  background: #fdfdff;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  padding: 5% 3%;
  box-shadow: 0px -2px 3px rgba(31, 19, 0, 0.1);
  background: #fdfdff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const AddingButtonContainer = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 5%;
`;
const NewCatInput = styled.TextInput`
  background: #fdfdff;
  font-size: 20px;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 3%;
`;

export default CategoryContainer;
