import React from 'react';
import styled from 'styled-components/native';

const EstimateButton = ({ text, isActif }) => {
  return (
    <Main isActif={isActif} activeOpacity={isActif ? 0.2 : 1}>
      <Text isActif={isActif}>{text}</Text>
    </Main>
  );
};

const Main = styled.TouchableOpacity`
  padding: 10px 20px;
  border: ${(props) =>
    props.isActif
      ? '2px solid rgba(8, 61, 119, 1)'
      : '2px solid rgba(31, 19, 0, 0.3)'};
  display: flex;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.isActif
      ? '2px solid rgba(8, 61, 119, 1)'
      : '2px solid rgba(31, 19, 0, 0.3)'};
`;

export default EstimateButton;
