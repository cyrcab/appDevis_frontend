import React from 'react';
import styled from 'styled-components/native';

import OfferCreationForm from '../../../components/styled-components/forms/OfferCreationForm';
import OfferInfos from '../../../components/offers/OfferInfos';

const OfferAdminView = ({ route }) => {
  const offer = route.params;

  return (
    <Main>
      <OfferInfos offer={offer} />
      <OfferCreationForm offer={offer} />
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #eeeff5;
`;

export default OfferAdminView;
