import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from '../../helpers/axios.config';

import ListElems from '../../../components/ListElems';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import SearchBar from '../../../components/styled-components/SearchBar';

const AccountListPage = () => {
  const [userList, setUserList] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => response.data)
      .then((data) => {
        if (searchedWord !== '') {
          console.log(searchedWord);
          setUserList(
            data.filter(
              (e) =>
                e.firstName.includes(searchedWord.toLowerCase()) ||
                e.firstName.includes(searchedWord.toUpperCase()) ||
                e.lastName.includes(searchedWord.toLowerCase()) ||
                e.lastName.includes(searchedWord.toUpperCase()),
            ),
          );
        } else {
          setUserList(data);
        }
      })
      .catch((err) => console.log(err));
  }, [searchedWord]);

  return (
    <Main>
      <Title>Utilisateurs</Title>
      <SearchBarWrapper>
        <SearchBar value={searchedWord} setValue={setSearchedWord} />
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
  margin-top: 3%;
`;
const ButtonWrapper = styled.View`
  width: 70%;
`;
const ListContainer = styled.View`
  height: 60%;
`;
const SearchBarWrapper = styled.View`
  width: 80%;
  margin: 5% 0;
`;

export default AccountListPage;
