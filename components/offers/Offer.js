import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Offer = ({ offer, iconName }) => {
  const navigation = useNavigation();

  return (
    <Main>
      <IconWrapper>
        <Icon name={iconName} size={50} />
      </IconWrapper>
      <InfosSection>
        <InfoName>{offer.name}</InfoName>
        <Role>{offer.price}</Role>
      </InfosSection>
      {/* <Params
        onPress={() =>
          navigation.navigate('Utilisateur admin view', {
            offer: offer,
          })
        }
      >
        <Icon name="ellipsis-h" size={30} />
      </Params> */}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom-width: 1px;
`;
const IconWrapper = styled.View`
  width: 20%;
`;
const InfoName = styled.Text`
  align-self: flex-start;
  font-weight: 600;
`;
const EstimateNumber = styled.Text`
  color: #ff9b42;
  font-weight: 600;
`;
const Role = styled.Text`
  align-self: flex-start;
  color: #8c8787;
`;
const InfosSection = styled.View`
  width: 70%;
  display: flex;
`;
const Params = styled.TouchableOpacity`
  width: 30%;
`;

export default Offer;
