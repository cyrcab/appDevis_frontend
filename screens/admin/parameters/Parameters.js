import React from 'react';
import { DISCONNECT } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import ParameterList from '../../../components/parameters/ParameterList';
import LogoutButton from '../../../components/styled-components/buttons/LogoutButton';
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
      <LogoutButton onPress={disconnectUser} />
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
