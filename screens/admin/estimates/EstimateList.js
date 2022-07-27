import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components/native';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AxiosContext } from '../../../context/AxiosContext';

import RenderEstimateInList from '../../../components/estimate/RenderEstimateInList';
import SearchBar from '../../../components/styled-components/SearchBar';

const EstimateList = () => {
  const { authAxios } = useContext(AxiosContext);
  const navigation = useNavigation();
  const [estimateList, setEstimateList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchedWord, setSearchedWord] = useState('');

  const fetchData = useCallback(async () => {
    await authAxios
      .get('/api/files')
      .then((res) => res.data)
      .then((estimate) => {
        if (searchedWord !== '') {
          setEstimateList(
            estimate.filter(
              (e) =>
                e.customer.company.includes(searchedWord.toLowerCase()) ||
                e.customer.company.includes(searchedWord.toUpperCase()),
            ),
          );
        } else {
          setEstimateList(estimate);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedWord]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <ListContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FilterContainer>
          <SearchContainer>
            {/* recherche par le nom de la boîte */}
            <SearchBar value={searchedWord} setValue={setSearchedWord} />
          </SearchContainer>
        </FilterContainer>
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
const ListContainer = styled.ScrollView`
  box-shadow: 0px 3px 5px rgba(31, 19, 0, 0.3);
`;
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
const SearchContainer = styled.View`
  width: 90%;
`;
const FilterContainer = styled.View`
  width: 100%;
  ${'' /* height: 10%; */}
  margin: 5% 0;
  display: flex;
  align-items: center;
`;

export default EstimateList;
