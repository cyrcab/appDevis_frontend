import React, { useContext } from 'react';
import styled from 'styled-components/native';

import ParameterList from '../../../components/parameters/ParameterList';
import LogoutButton from '../../../components/styled-components/buttons/LogoutButton';
import displayAlertError from '../../../helpers/Alert/errorAlert';
import { PARAMETERS } from '../../../app/datas/parametersList';
import { AuthContext } from '../../../context/AuthContext';

const Paramaters = () => {
  const authContext = useContext(AuthContext);

  const handleDeconnectUser = async () => {
    try {
      authContext.logout();
    } catch (error) {
      displayAlertError(error);
    }
  };
  return (
    <Main>
      <Title>Paramètres de l'application</Title>
      <ParameterList parameters={PARAMETERS} />
      <LogoutButton onPress={handleDeconnectUser} />
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
