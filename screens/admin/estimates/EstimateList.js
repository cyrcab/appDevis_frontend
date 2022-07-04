import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import RenderEstimateInList from '../../../components/estimate/RenderEstimateInList';

import fetchEstimate from '../../../helpers/api/fetchEstimate';

const EstimateList = () => {
  const [estimates, setEstimates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimates(estimate);
    };
    fetchData();
  }, []);

  return (
    <Main>
      {estimates.length > 0 ? (
        <RenderEstimateInList estimates={estimates} />
      ) : null}
    </Main>
  );
};

const Main = styled.ScrollView``;

export default EstimateList;
