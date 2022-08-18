import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import displayAlertError from '../../helpers/Alert/errorAlert';
import OptionList from '../option/OptionList';

import { AxiosContext } from '../../context/AxiosContext';

const PackRender = ({ pack, setList, list }) => {
  const { authAxios } = useContext(AxiosContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleDeletePack = () => {
    authAxios
      .delete(`/api/packs/${pack.id}`)
      .then((res) => res.data)
      .then((packDeleted) =>
        setList(list.filter((el) => el.id !== packDeleted.id)),
      )
      .catch((err) => displayAlertError(err));
  };

  return (
    <Main>
      <Header>
        <TitleContainer onPress={() => setIsVisible(!isVisible)}>
          <Title>{pack.name}</Title>
          <Icon name={isVisible ? 'chevron-up' : 'chevron-down'} size={25} />
        </TitleContainer>
        <TrashContainer onPress={handleDeletePack}>
          <Icon name="trash" size={25} color="red" />
        </TrashContainer>
      </Header>
      {isVisible ? (
        <OptionContainer>
          <OptionList pack={pack} />
        </OptionContainer>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  border: 1px solid #1f1300;
  padding: 10px 20px;
  margin: 1% 0;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TitleContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;
const TrashContainer = styled.TouchableOpacity``;
const Title = styled.Text`
  font-size: 20px;
`;
const OptionContainer = styled.View``;

export default PackRender;
