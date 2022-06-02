import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from '../../helpers/axios.config';
import { useNavigation } from '@react-navigation/native';

import ListElems from '../../../components/ListElems';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import SearchBar from '../../../components/styled-components/SearchBar';

const AccountListPage = () => {
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => response.data)
      .then((data) => {
        if (searchedWord !== '') {
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
      <SearchBarWrapper>
        <SearchBar value={searchedWord} setValue={setSearchedWord} />
      </SearchBarWrapper>
      <ListContainer>
        <ListElems elems={userList} />
        <ButtonWrapper>
          <AddButton
            text="Ajouter un utilisateur"
            action={() => navigation.navigate('Création utilisateur')}
          />
        </ButtonWrapper>
      </ListContainer>
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
const ButtonWrapper = styled.View`
  align-self: center;
  width: 70%;
  margin-top: 5%;
`;
const ListContainer = styled.View`
  height: 70%;
  width: 100%;
  border-bottom-width: 1px;
`;
const SearchBarWrapper = styled.View`
  width: 80%;
  margin: 5% 0;
`;

export default AccountListPage;
