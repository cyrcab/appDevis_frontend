import React from 'react';
import styled from 'styled-components/native';

import EstimatesInfos from './EstimatesInfos';

const RenderEstimateInList = ({ estimateList, setEstimateList }) => {
  return (
    <Main>
      {estimateList.length > 0
        ? estimateList.map((el, i) => (
            <EstimatesInfos
              key={i}
              file={el}
              setEstimateList={setEstimateList}
              estimateList={estimateList}
            />
          ))
        : null}
    </Main>
  );
};

const Main = styled.View``;

export default RenderEstimateInList;
