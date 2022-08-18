import React from 'react';
import styled from 'styled-components/native';

import RenderUsersInList from './RenderUsersInList';

const UserList = ({ elems }) => {
  if (elems[0] !== undefined) {
    return (
      <ListWrapper>
        {elems.length > 0
          ? elems.map((el, i) => (
              <RenderUsersInList key={i} user={el} iconName="user" />
            ))
          : null}
      </ListWrapper>
    );
  }

  return <InfosText>Il n'y a pas de données à afficher</InfosText>;
};

const ListWrapper = styled.View`
  border-top-width: 1px;
  border-color: rgba(31, 19, 0, 0.3);
`;
const InfosText = styled.Text``;

export default UserList;
