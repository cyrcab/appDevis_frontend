import React, { useContext } from 'react';
import styled from 'styled-components/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/parameters/ParameterList';
import { UserContext } from '../../../context/UserContext';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const Account = () => {
  const { user } = useContext(UserContext);

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

export default Account;
