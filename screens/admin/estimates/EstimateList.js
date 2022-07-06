import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components/native';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RenderEstimateInList from '../../../components/estimate/RenderEstimateInList';

import fetchEstimate from '../../../helpers/api/fetchEstimate';

const EstimateList = () => {
  const navigation = useNavigation();
  const [estimateList, setEstimateList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimateList(estimate);
    };
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const fetchData = async () => {
      const { estimate } = await fetchEstimate('GET');
      setEstimateList(estimate);
      setRefreshing(false);
    };
    fetchData();
  }, []);

  return (
    <Main>
      <ListContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {estimateList ? (
          <RenderEstimateInList
            estimateList={estimateList}
            setEstimateList={setEstimateList}
          />
        ) : (
          <NoEstimateContainer>
            <TextContainer>
              <Text>Il n'y a pas encore de devis effectués</Text>
            </TextContainer>
            <ButtonToNavigate
              onPress={() => navigation.navigate('Création de devis')}
            >
              <NavigationText>Faire un devis</NavigationText>
            </ButtonToNavigate>
          </NoEstimateContainer>
        )}
      </ListContainer>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  height: 100%;
`;
const ListContainer = styled.ScrollView``;
const Text = styled.Text`
  font-size: 18px;
`;
const NavigationText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: #083d77;
`;
const NoEstimateContainer = styled.View`
  display: flex;
  align-items: center;
`;
const ButtonToNavigate = styled.TouchableOpacity`
  margin-top: 3%;
`;
const TextContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10%;
`;

export default EstimateList;
