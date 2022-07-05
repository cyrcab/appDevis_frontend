import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { RefreshControl } from 'react-native';

import RenderEstimateInList from '../../../components/estimate/RenderEstimateInList';

import fetchEstimate from '../../../helpers/api/fetchEstimate';

const EstimateList = () => {
  const [estimateList, setEstimateList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimateList(estimate);
    };
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimateList(estimate);
      setRefreshing(false);
    };
    fetchData();
  }, []);

  return (
    <Main>
      <ListContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {estimateList.length > 0 ? (
          <RenderEstimateInList
            estimateList={estimateList}
            setEstimateList={setEstimateList}
          />
        ) : null}
      </ListContainer>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  height: 100%;
`;
const ListContainer = styled.ScrollView``;

export default EstimateList;
