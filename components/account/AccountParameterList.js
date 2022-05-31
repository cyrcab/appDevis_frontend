import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import ItemInfos from './ItemInfos';

import { PARAMETERS } from './datas/parametersList';

const AccountParameterList = () => {
  const renderItem = ({ item }) => {
    return <ItemInfos title={item.title} link={item.link} />;
  };

  return (
    <ListWrapper>
      <FlatList
        data={PARAMETERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal="false"
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  padding: 5% 0 5% 5%;
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 90%;
  height: 50%;
  align-self: center;
  border-radius: 30px;
  background: #fdfdff;
  margin-top: 5%;
`;

export default AccountParameterList;
