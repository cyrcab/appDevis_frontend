import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import axios from '../../../helpers/api/axios.config';

import RenderOfferList from '../../../components/offers/RenderOfferList';
import SearchBar from '../../../components/styled-components/SearchBar';
import AddButton from '../../../components/styled-components/buttons/AddButton';

import displayAlertError from '../../../helpers/Alert/errorAlert';

const OfferList = () => {
  const navigation = useNavigation();
  const [offerList, setOfferList] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');

  useEffect(() => {
    axios
      .get('/api/offers')
      .then((response) => response.data)
      .then((data) => {
        if (searchedWord !== '') {
          setOfferList(
            data.filter(
              (e) =>
                e.name.includes(searchedWord.toLowerCase()) ||
                e.description.includes(searchedWord.toUpperCase()),
            ),
          );
        } else {
          setOfferList(data);
        }
      })
      .catch((err) => displayAlertError(err));
  }, [searchedWord]);

  return (
    <Main>
      <SearchBarWrapper>
        <SearchBar value={searchedWord} setValue={setSearchedWord} />
      </SearchBarWrapper>
      <ListContainer>
        <RenderOfferList elems={offerList} />
        <ButtonWrapper>
          <AddButton
            text="Ajouter une offre"
            action={() => navigation.navigate('OfferCreation')}
          />
        </ButtonWrapper>
      </ListContainer>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
`;
const ButtonWrapper = styled.View`
  align-self: center;
  width: 70%;
  margin-top: 5%;
`;
const ListContainer = styled.View`
  height: 70%;
  width: 100%;
  border-bottom-width: 1px;
`;
const SearchBarWrapper = styled.View`
  width: 80%;
  margin: 5% 0;
`;

export default OfferList;
