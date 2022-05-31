import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { DISCONNECT } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import ParameterList from '../../../components/ParameterList';
import { PARAMETERS } from '../../../app/datas/parametersList';

const Paramaters = () => {
  const dispatch = useDispatch();
  const disconnectUser = () => {
    dispatch(DISCONNECT());
  };

  return (
    <Main>
      <Title>Paramètres de l'application</Title>
      <ParameterList parameters={PARAMETERS} />
      <View>
        <Button onPress={disconnectUser} title="Déconnexion" />
      </View>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30%;
`;

export default Paramaters;
