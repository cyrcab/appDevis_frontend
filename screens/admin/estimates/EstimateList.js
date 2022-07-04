import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import RenderEstimateInList from '../../../components/estimate/RenderEstimateInList';

import fetchEstimate from '../../../helpers/api/fetchEstimate';

const EstimateList = () => {
  const [estimateList, setEstimateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimateList(estimate);
    };
    fetchData();
  }, []);

  return (
    <Main>
      {estimateList.length > 0 ? (
        <RenderEstimateInList
          estimateList={estimateList}
          setEstimateList={setEstimateList}
        />
      ) : null}
    </Main>
  );
};

const Main = styled.ScrollView``;

export default EstimateList;
