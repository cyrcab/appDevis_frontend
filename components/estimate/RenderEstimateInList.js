import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import EstimatesInfos from './EstimatesInfos';

const RenderEstimateInList = ({ estimateList, setEstimateList }) => {
  const renderItem = ({ item }) => {
    return (
      <EstimatesInfos
        file={item}
        setEstimateList={setEstimateList}
        estimateList={estimateList}
      />
    );
  };

  return (
    <Main>
      <FlatList
        data={estimateList}
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
