import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import Offer from './Offer';

const RenderOfferList = ({ elems }) => {
  const renderItem = ({ item }) => {
    return <Offer offer={item} iconName="devices" />;
  };

  if (elems[0] !== undefined) {
    return (
      <ListWrapper>
        <FlatList
          data={elems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal="false"
        />
      </ListWrapper>
    );
  }

  return <InfosText>Il n'y a pas de données à afficher</InfosText>;
};

const ListWrapper = styled.View`
  border-top-width: 1px;
`;
const InfosText = styled.Text``;

export default RenderOfferList;
