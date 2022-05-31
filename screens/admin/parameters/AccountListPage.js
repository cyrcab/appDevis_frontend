import React from 'react';
import styled from 'styled-components/native';

const AccountListPage = () => {
  return (
    <Main>
      <Title>Ceci est la page de paramètres des comptes</Title>
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
