import React from 'react';
import styled from 'styled-components/native';

const PackRender = ({ pack }) => {
  return (
    <Main>
      <Title>{pack.name}</Title>
    </Main>
  );
};

const Main = styled.View``;
const Title = styled.Text``;

export default PackRender;
