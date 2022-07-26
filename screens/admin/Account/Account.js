import React from 'react';
import styled from 'styled-components/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/parameters/ParameterList';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const Account = () => {
  return (
    <Main>
      <AccountInfos />
      <AccountParameterList parameters={PARAMETERS} />
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
`;

export default Account;
