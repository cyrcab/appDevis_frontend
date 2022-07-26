import React, { useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { AxiosContext } from '../../context/AxiosContext';
import displayAlertError from '../../helpers/Alert/errorAlert';

// import des composants
import FastActionList from '../../components/fastActionHome/FastActionList';

const Home = () => {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(AxiosContext);

  const loadUser = useCallback(async () => {
    try {
      const { authenticatedUserId: userId } = authContext.authState;
      const userDatas = await authAxios.get(`/api/users/${userId}`);

      if (!userDatas) {
        displayAlertError(
          'Une erreur inconnue est survenue, merci de réessayer plus tard',
        );
      }
      userContext.setUser(userDatas.data);
    } catch (error) {
      displayAlertError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <HomeContainer>
      <FastActionContainer>
        <Subtitle>Actions rapides</Subtitle>
        <FastActionList />
      </FastActionContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.SafeAreaView`
  backgroundcolor: '#EEEFF5';
  display: flex;
  flex-direction: column;
`;

const FastActionContainer = styled.View`
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: 600;
  margin: 2% 2%;
`;

export default Home;
