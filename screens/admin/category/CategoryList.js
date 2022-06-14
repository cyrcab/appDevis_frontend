import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import CarouselOfCategory from '../../../components/category/CarouselOfCategory';

import { getAllCategories } from '../../helpers/api/fetchApi';

const CategoryList = () => {
  const [listOfCategories, setListOfCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    getAllCategories().then((response) => {
      setListOfCategories(response.categories.concat({}));
      setErrors(response.errors);
    });
  }, []);

  return (
    <Main>
      <CarouselOfCategory listOfCategories={listOfCategories} />
    </Main>
  );
};

const Main = styled.SafeAreaView``;

export default CategoryList;
