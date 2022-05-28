import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemInfos = ({ title }) => {
  return (
    <TouchableWrapper>
      <Main>
        <Content>{title}</Content>
        <Icon name="chevron-right" size={25} color="#A8A39A" />
      </Main>
    </TouchableWrapper>
  );
};

const Main = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const Content = styled.Text`
  font-size: 20px;
`;
const TouchableWrapper = styled.View`
  width: 90%;
  border-bottom-width: 2px;
  border-bottom-color: lightgrey;
`;

export default ItemInfos;
