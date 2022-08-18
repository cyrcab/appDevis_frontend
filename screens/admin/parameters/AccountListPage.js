import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { AxiosContext } from '../../../context/AxiosContext';

import UserList from '../../../components/parameters/UserList';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import SearchBar from '../../../components/styled-components/SearchBar';

import displayAlertError from '../../../helpers/Alert/errorAlert';

const AccountListPage = () => {
  const { authAxios } = useContext(AxiosContext);
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  useEffect(() => {
    authAxios
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
      .catch((err) => displayAlertError(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedWord]);

  return (
    <Main>
      <SearchBarWrapper>
        <SearchBar value={searchedWord} setValue={setSearchedWord} />
      </SearchBarWrapper>
      <ListContainer>
        <UserList elems={userList} />
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
`;
const SearchBarWrapper = styled.View`
  width: 80%;
  margin: 5% 0;
`;

export default AccountListPage;
