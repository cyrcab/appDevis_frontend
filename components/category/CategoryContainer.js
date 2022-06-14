import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';

import QuestionList from './QuestionList';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';
import AddButton from '../styled-components/buttons/AddButton';
import AddingNewCategory from './AddingNewCategory';
import { deleteCategory } from '../../screens/helpers/api/fetchApi';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoryContainer = ({ category }) => {
  const navigation = useNavigation();
  const { name: title, id } = category;
  const [isClicked, setIsClicked] = useState(false);

  const listOfQuestion = category.Category_has_Question;

  if (!title) {
    if (!isClicked) {
      return (
        <AddingButtonContainer>
          <AddButton
            text="Ajouter une catégorie"
            action={() => {
              setIsClicked(true);
            }}
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

  const handleDeleteCategory = async () => {
    await deleteCategory(id);
  };

  return (
    <Main>
      <TitleSection>
        <Title>{title}</Title>
        <Delete
          onPress={() => deleteConfirmation('CATEGORY', handleDeleteCategory)}
        >
          <Icon name="delete" size={20} />
        </Delete>
      </TitleSection>
      <QuestionSection>
        <QuestionList items={listOfQuestion} />
      </QuestionSection>
      <ButtonWrapper>
        <AddingQuestion
          action={() =>
            navigation.push('QuestionGestion', {
              categoryId: id,
            })
          }
        />
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

export default CategoryContainer;
