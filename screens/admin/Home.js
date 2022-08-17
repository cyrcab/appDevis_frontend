import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AxiosContext } from '../../context/AxiosContext';
import { UserContext } from '../../context/UserContext';

// import des composants
import FastActionList from '../../components/fastActionHome/FastActionList';

const Home = () => {
  const { authAxios } = useContext(AxiosContext);
  const { user, setUser } = useContext(UserContext);

  const checkConnectedUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      const data = JSON.parse(value);

      const userConnected = await authAxios.get(`/api/users/${data.user_id}`);
      setUser({
        ...user,
        ...userConnected.data,
      });
    } catch (error) {
      await AsyncStorage.removeItem('@storage_Key');
    }
  };

  useEffect(() => {
    checkConnectedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
