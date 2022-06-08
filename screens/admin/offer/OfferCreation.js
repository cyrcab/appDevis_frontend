import React from 'react';
import styled from 'styled-components/native';

import OfferCreationForm from '../../../components/styled-components/forms/OfferCreationForm';

const OfferCreation = () => {
  return (
    <Main>
      <OfferCreationForm />
    </Main>
  );
};

const Main = styled.ScrollView``;

export default OfferCreation;
