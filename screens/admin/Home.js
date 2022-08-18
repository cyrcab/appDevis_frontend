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
      <TextPresentationContainer>
        <TextPresentation>Bonjour {user?.firstName}</TextPresentation>
      </TextPresentationContainer>
      <FastActionContainer>
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
  margin-top: 10%;
  height: 60%
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextPresentation = styled.Text`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-top: 5%;
`;

const TextPresentationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Home;
