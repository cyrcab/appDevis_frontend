import React from 'react';
import styled from 'styled-components/native';

import OfferCreationForm from '../../../components/offers/OfferCreationForm';

const OfferCreation = () => {
  return (
    <Main>
      <OfferCreationForm />
    </Main>
  );
};

const Main = styled.ScrollView``;

export default OfferCreation;
