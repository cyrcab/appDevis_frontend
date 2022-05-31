import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from '../../helpers/axios.config';

import ListElems from '../../../components/ListElems';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import SearchBar from '../../../components/styled-components/SearchBar';

const AccountListPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => response.data)
      .then((data) => setUserList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Main>
      <Title>Ceci est la page de paramètres des comptes</Title>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <ListContainer>
        <ListElems elems={userList} />
      </ListContainer>
      <ButtonWrapper>
        <AddButton text="Ajouter un utilisateur" />
      </ButtonWrapper>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 25px;
`;
const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 5%;
`;
const ListContainer = styled.View`
  max-height: 70%;
  height: 50%;
`;
const SearchBarWrapper = styled.View`
  width: 80%;
  margin: 5% 0;
`;

export default AccountListPage;
