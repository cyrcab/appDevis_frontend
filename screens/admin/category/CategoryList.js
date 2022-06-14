import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import { FlatList } from 'react-native';

import { getAllCategories } from '../../helpers/api/fetchApi';
import CategoryContainer from '../../../components/category/CategoryContainer';
import CategoryForm from '../../../components/styled-components/forms/CategoryForm';
import displayAlertError from '../../helpers/Alert/errorAlert';

const CategoryList = () => {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    getAllCategories().then((response) => {
      setListOfCategories(response.categories);
      setErrors([response.errors]);
    });
  }, []);

  if (errors[0]) {
    displayAlertError(errors[0]);
  }

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

const Main = styled.SafeAreaView`
  max-height: 100%;
`;

export default CategoryList;
