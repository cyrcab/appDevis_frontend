import React from 'react';
import styled from 'styled-components/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/ParameterList';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const AccountAdminView = ({ route }) => {
  const { user } = route.params;
  return (
    <Main>
      <AccountInfos user={user} />
      <AccountParameterList parameters={PARAMETERS} />
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
`;

export default AccountAdminView;
