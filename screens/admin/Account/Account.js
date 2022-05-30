import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/account/AccountParameterList';

const Account = () => {
  const user = useSelector((state) => state.auth);

  return (
    <Main>
      <View>
        <AccountInfos user={user} />
        <AccountParameterList />
      </View>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
`;

export default Account;
