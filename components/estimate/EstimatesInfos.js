import React, { useState } from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

const EstimatesInfos = ({ estimate }) => {
  const { Category, Customer } = estimate;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Main>
      <Header>
        <TitleContainer onPress={() => setIsOpen(!isOpen)}>
          <Text>{Customer.company} </Text>
          <ChevronContainer>
            {isOpen ? (
              <Icon name="down" size={20} />
            ) : (
              <Icon name="right" size={20} />
            )}
          </ChevronContainer>
        </TitleContainer>
        <DeleteButtonContainer>
          <Icon name="delete" size={25} />
        </DeleteButtonContainer>
      </Header>
      {isOpen && (
        <Body>
          <InfosContainer>
            <TextTitle>Type :</TextTitle>
            <Text>{estimate.type === 'estimate' ? 'Devis' : 'Facture'}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Catégorie :</TextTitle>
            <Text>{Category.name}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Prix total :</TextTitle>
            <Text>{estimate.price}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Nom du client :</TextTitle>
            <Text>{Customer.firstname + ' ' + Customer.lastname}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Catégorie :</TextTitle>
            <Text>{Category.name}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Mail du client :</TextTitle>
            <Text>{Customer.mail}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Numéro du client :</TextTitle>
            <Text>{Customer.phone}</Text>
          </InfosContainer>
        </Body>
      )}
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 1);
`;
const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3%;
  background: #f092ff;
`;
const TitleContainer = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ChevronContainer = styled.View``;
const Text = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
const InfosContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
const DeleteButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.View`
  background: #fdfdff;
  padding: 5% 3%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(31, 19, 0, 0.3);
`;

export default EstimatesInfos;
