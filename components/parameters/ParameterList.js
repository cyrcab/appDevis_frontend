import React from 'react';
import styled from 'styled-components/native';

import ItemInfos from '../account/ItemInfos';

const ParameterList = ({ parameters }) => {
  return (
    <ListWrapper>
      {parameters.length > 0
        ? parameters.map((el, i) => (
            <ItemInfos
              key={i}
              title={el.title}
              link={el.link}
              autorisedRole={el.authorised_role}
            />
          ))
        : null}
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
  border-radius: 10px;
  background: #fdfdff;
  margin-top: 5%;
`;

export default ParameterList;
