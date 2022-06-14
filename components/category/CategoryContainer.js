import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';

import QuestionList from './QuestionList';
import AddingQuestion from '../styled-components/buttons/AddingQuestion';
import { deleteCategory } from '../../screens/helpers/api/fetchApi';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoryContainer = ({
  category,
  setListOfCategories,
  listOfCategories,
}) => {
  const navigation = useNavigation();
  const { name: title, id } = category;
  const [titleIsPressed, setTitleIsPressed] = useState(false);

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
            <AddingQuestion
              action={() =>
                navigation.push('QuestionGestion', {
                  categoryId: id,
                })
              }
            />
          </ButtonWrapper>
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
  height: 100%;
  ${'' /* margin-top: 1%; */}
  box-shadow: 0px 0px 2px rgba(255, 255,255, 1);
`;
const TitleSection = styled.TouchableOpacity`
  padding: 5% 3%;
  background: #f092ff;
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
`;

const ButtonWrapper = styled.View`
  padding: 5% 3%;
  box-shadow: 0px -10px 22px rgba(255, 255, 255, 0.7);
  background: #fdfdff;
`;

export default CategoryContainer;
