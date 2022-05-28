import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import AccountInfos from '../../components/account/AccountInfos';
import AccountParameterList from '../../components/account/AccountParameterList';

import { useSelector } from 'react-redux';

const Account = () => {
  const user = useSelector((state) => state.auth);

  return (
    <SafeAreaView>
      <View>
        <AccountInfos name={user.userName} />
        <AccountParameterList />
        <Text>This is the Account page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Account;
