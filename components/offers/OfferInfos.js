import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OfferInfos = ({ offer }) => {
  const { name, price } = offer;
  return (
    <Main>
      <IconContainer>
        <Icon name="devices" size={120} color="#1f1300" />
      </IconContainer>
      <InfoContainer>
        <TextName>{name}</TextName>
        <TextType>{price}</TextType>
      </InfoContainer>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 5%;
`;
const IconContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #1f1300;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  background-color: #fdfdff;
`;
const InfoContainer = styled.View`
  margin-top: 2%;
  display: flex;
  align-items: center;
`;
const TextName = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const TextType = styled.Text`
  font-size: 18px;
  color: #8c8787;
`;

export default OfferInfos;
