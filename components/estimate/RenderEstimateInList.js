import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import EstimatesInfos from './EstimatesInfos';

const RenderEstimateInList = ({ estimates }) => {
  const renderItem = ({ item }) => {
    return <EstimatesInfos estimate={item} />;
  };

  return (
    <Main>
      <FlatList
        data={estimates}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal="false"
      />
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
`;

export default RenderEstimateInList;
