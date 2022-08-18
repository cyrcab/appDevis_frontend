import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../context/UserContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const ItemInfos = ({ title, link, autorisedRole }) => {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <TouchableWrapper>
      <Main
        onPress={() =>
          user.role_id === autorisedRole ? navigation.navigate(link) : null
        }
      >
        <Content>{title}</Content>
        <Icon name="chevron-right" size={25} color="#A8A39A" />
      </Main>
    </TouchableWrapper>
  );
};

const Main = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const Content = styled.Text`
  font-size: 20px;
`;
const TouchableWrapper = styled.View`
  width: 90%;
  border-bottom-width: 2px;
  border-bottom-color: lightgrey;
`;

export default ItemInfos;
