import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { getAllCategories } from '../../helpers/api/fetchApi';
import CategoryContainer from '../../../components/category/CategoryContainer';

const CategoryList = () => {
  const [listOfCategories, setListOfCategories] = useState([]);
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
    </Main>
  );
};

const Main = styled.SafeAreaView`
  height: 100%;
`;
const Title = styled.Text``;

export default CategoryList;
