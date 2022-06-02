import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RenderUsersInList = ({ user, iconName }) => {
  const navigation = useNavigation();

  return (
    <Main>
      <IconWrapper>
        <Icon name={iconName} size={50} />
      </IconWrapper>
      <InfosSection>
        <InfoName>
          {user.firstName} {user.lastName}
        </InfoName>
        <Role>{user.Role.Name}</Role>
        <EstimateNumber>
          {user._count.Estimate === 0
            ? 'Pas encore de devis effectué'
            : `${user._count.Estimate} devis effectués`}
        </EstimateNumber>
      </InfosSection>
      <Params
        onPress={() =>
          navigation.navigate('Utilisateur admin view', {
            user: user,
          })
        }
      >
        <Icon name="ellipsis-h" size={30} />
      </Params>
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

export default RenderUsersInList;
