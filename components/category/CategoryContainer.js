import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import deleteConfirmation from '../../screens/helpers/Alert/deleteConfirmation';

import { deleteCategory } from '../../screens/helpers/api/fetchApi';
import Icon from 'react-native-vector-icons/AntDesign';

const CategoryContainer = ({
  category,
  setListOfCategories,
  listOfCategories,
}) => {
  const navigation = useNavigation();
  const { name: title, id } = category;

  const handleDeleteCategory = async () => {
    await deleteCategory(id);
    setListOfCategories(listOfCategories.filter((el) => el.id !== id));
  };

  return (
    <Main>
      <TitleSection
        onPress={() =>
          navigation.push('Category', {
            id,
          })
        }
      >
        <Title>{title}</Title>
        <Delete
          onPress={() => deleteConfirmation('CATEGORY', handleDeleteCategory)}
        >
          <Icon name="delete" size={20} />
        </Delete>
      </TitleSection>
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

export default CategoryContainer;
