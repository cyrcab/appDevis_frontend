import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import PackRender from './PackRender';

import AddButton from '../styled-components/buttons/AddButton';

const PackList = ({ list }) => {
  const renderItem = ({ item }) => {
    <PackRender pack={item} />;
  };

  return (
    <ListContainer>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
      />
    </ListContainer>
  );
};

const ListContainer = styled.View``;

export default PackList;
