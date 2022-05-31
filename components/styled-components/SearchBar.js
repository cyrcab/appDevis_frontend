import React from 'react';
import styled from 'styled-components/native';
styled;
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <Main>
      <InputSearch placeholder="Rechercher" />
      <IconContainer>
        <Icon name="search" size={30} color="#8c8787" />
      </IconContainer>
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const InputSearch = styled.TextInput`
  font-size: 18px;
  width: 90%;
`;
const IconContainer = styled.View`
  width: 10%;
  display: flex;
  align-items: flex-end;
`;

export default SearchBar;
