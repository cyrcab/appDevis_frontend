import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import RenderUsersInList from './RenderUsersInList';

const UserList = ({ elems }) => {
  const renderItem = ({ item }) => {
    return <RenderUsersInList user={item} iconName="user" />;
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

export default UserList;
