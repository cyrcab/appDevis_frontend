import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import axios from '../../helpers/axios.config';

import ListElems from '../../../components/ListElems';

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
      <ListElems elems={userList} />
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
`;
const Title = styled.Text`
  font-size: 25px;
`;

export default AccountListPage;
