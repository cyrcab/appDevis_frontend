import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { getAllCategories } from '../../helpers/api/fetchApi';
import CategoryContainer from '../../../components/category/CategoryContainer';
import CategoryForm from '../../../components/styled-components/forms/CategoryForm';

const CategoryList = () => {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    getAllCategories().then((response) => {
      setListOfCategories(response.categories);
      setErrors(response.errors);
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <CategoryContainer
        category={item}
        listOfCategories={listOfCategories}
        setListOfCategories={setListOfCategories}
      />
    );
  };

  return (
    <Main>
      <FlatList
        data={listOfCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal="false"
      />
      <CategoryForm
        setListOfCategories={setListOfCategories}
        listOfCategories={listOfCategories}
      />
    </Main>
  );
};

const Main = styled.SafeAreaView``;
const Title = styled.Text``;

export default CategoryList;
