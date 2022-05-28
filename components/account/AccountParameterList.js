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
    <Main>
      <FlatList
        data={PARAMETERS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Main>
  );
};

const Main = styled.View`
  border: 1px solid black;
  height: 60%;
`;

export default AccountParameterList;
