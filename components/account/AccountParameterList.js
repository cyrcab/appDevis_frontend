import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import ItemInfos from './ItemInfos';

const AccountParameterList = () => {
  const PARAMETERS = [
    {
      id: 1,
      title: 'Modifier le mot de passe',
    },
    {
      id: 2,
      title: "Modifier l'adresse mail",
    },
    {
      id: 3,
      title: "Conditions d'utilisations",
    },
    {
      id: 4,
      title: 'Gestion des infos',
    },
  ];

  const renderItem = ({ item }) => {
    return <ItemInfos title={item.title} />;
  };

  return (
    <ListWrapper>
      <FlatList
        data={PARAMETERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal="false"
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  padding: 5% 0 5% 5%;
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 90%;
  height: 60%;
  align-self: center;
  border-radius: 30px;
  background: #fdfdff;
  margin-top: 5%;
`;

export default AccountParameterList;
