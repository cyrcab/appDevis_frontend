import React, { useState } from 'react';
import styled from 'styled-components/native';

import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';

import QuestionList from './QuestionList';
import QuestionForm from '../styled-components/forms/QuestionForm';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';
import { deleteCategory } from '../../screens/helpers/api/fetchApi';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoryContainer = ({
  category,
  setListOfCategories,
  listOfCategories,
}) => {
  const { name: title, id } = category;
  const [titleIsPressed, setTitleIsPressed] = useState(false);
  const [addingQuestionIsPressed, setAddingQuestionIsPressed] = useState(false);

  const listOfQuestion = category.Category_has_Question;

  const handleDeleteCategory = async () => {
    await deleteCategory(id);
    setListOfCategories(listOfCategories.filter((el) => el.id !== id));
  };

  return (
    <Main>
      <TitleSection onPress={() => setTitleIsPressed(!titleIsPressed)}>
        <Title>{title}</Title>
        <Delete
          onPress={() => deleteConfirmation('CATEGORY', handleDeleteCategory)}
        >
          <Icon name="delete" size={20} />
        </Delete>
      </TitleSection>
      {titleIsPressed ? (
        <>
          <QuestionSection>
            <QuestionList items={listOfQuestion} />
          </QuestionSection>
          <ButtonWrapper>
            {addingQuestionIsPressed ? (
              <>
                <QuestionForm
                  isDeletable={false}
                  setAddingQuestionIsPressed={setAddingQuestionIsPressed}
                />
              </>
            ) : (
              <AddingQuestion
                action={() =>
                  setAddingQuestionIsPressed(!addingQuestionIsPressed)
                }
              />
            )}
          </ButtonWrapper>
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  background: #fdfdff;
`;
const TitleSection = styled.TouchableOpacity`
  padding: 5% 3%;
  background: #f092ff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Delete = styled.TouchableOpacity``;
const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const QuestionSection = styled.View`
  background: #fdfdff;
  display: flex;
  align-items: center;
  margin-top: 3%;
`;

const ButtonWrapper = styled.View`
  width: 95%;
  margin-bottom: 3%;
`;

export default CategoryContainer;
