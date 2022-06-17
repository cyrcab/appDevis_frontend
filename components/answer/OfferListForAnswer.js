import React, { useState } from 'react';
import styled from 'styled-components/native';

const OfferListForAnswer = ({ offerList }) => {
  const [offerIsSelected, setOfferIsSelected] = useState(false);

  return (
    <Main>
      <Title>Choix de l'offre</Title>
      <ListContainer>
        {offerList.map((el, i) => (
          <OfferContainer
            key={i}
            offerIsSelected={offerIsSelected}
            onPress={() => setOfferIsSelected(!offerIsSelected)}
          >
            <Name>{el.name}</Name>
            <Content>{el.description}</Content>
          </OfferContainer>
        ))}
      </ListContainer>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
`;

const ListContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
`;

const OfferContainer = styled.TouchableOpacity`
  width: 49%;
  padding: 3%;
  background: ${(props) => (props.offerIsSelected ? '#B5C3D2' : '#fdfdff')};
  border: 1px solid rgba(31, 19, 0, 0.3);
  margin-top: 2%;
`;
const Name = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10%;
`;
const Content = styled.Text`
  font-size: 14px;
  text-align: center;
`;

const Title = styled.Text``;

export default OfferListForAnswer;
