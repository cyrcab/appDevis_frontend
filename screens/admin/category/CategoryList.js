import React from 'react';
import styled from 'styled-components/native';

import CategoryContainer from '../../../components/category/CategoryContainer';

const CategoryList = () => {
  return (
    <Main>
      <CategoryParameters>
        <CategoryContainer />
      </CategoryParameters>
    </Main>
  );
};

const Main = styled.View`
  height: 100%;
`;
const CategoryParameters = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const Title = styled.Text``;

export default CategoryList;
