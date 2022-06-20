import React from 'react';
import FastAction from './FastAction';

import styled from 'styled-components/native';

const FastActionList = () => {
  return (
    <MainContainer>
      <FastAction
        title="Liste des devis"
        logo="th-list"
        link="Liste des devis"
      />
      <FastAction title="Faire un devis" logo="plus" link="Création de devis" />
      <FastAction
        title="Liste des catégories"
        logo="flask"
        link="Liste des catégories"
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;

export default FastActionList;
