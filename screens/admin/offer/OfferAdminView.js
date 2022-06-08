import React from 'react';
import styled from 'styled-components/native';

import OfferModificationForm from '../../../components/styled-components/forms/OfferModificationForm';

const OfferAdminView = ({ route }) => {
  const offer = route.params;

  return (
    <Main>
      <TitleWrapper>
        <Title>Modifications de l'offre</Title>
      </TitleWrapper>
      <OfferModificationForm offer={offer} />
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #eeeff5;
`;
const TitleWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const Title = styled.Text`
  font-weight: 600;
  font-size: 30px;
`;

export default OfferAdminView;
