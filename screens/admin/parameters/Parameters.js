import React from 'react';
import { DISCONNECT } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import ParameterList from '../../../components/ParameterList';
import LogoutButton from '../../../components/styled-components/LogoutButton';
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
const Button = styled.TouchableOpacity`
  background: #fdfdff;
  padding: 10px;
  border-radius: 20px;
  margin-top: 5%;
  width: 50%;
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  margin-right: 10px;
  font-weight: 600;
`;

export default Paramaters;
