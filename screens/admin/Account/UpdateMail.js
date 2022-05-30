import React from 'react';
import { View, Text } from 'react-native';

import FirstButton from '../../../components/styled-components/FirstButton';
const UpdateMail = () => {
  return (
    <View>
      <Text>Page pour update les mails</Text>
      <FirstButton text="Changer" />
    </View>
  );
};

export default UpdateMail;
