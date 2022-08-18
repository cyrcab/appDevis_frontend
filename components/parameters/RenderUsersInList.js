import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RenderUsersInList = ({ user, iconName }) => {
  const navigation = useNavigation();
  const [roleToDisplay, setRoleToDisplay] = useState();

  useEffect(() => {
    if (user.role_id === 1) {
      setRoleToDisplay('Super Administrateur');
    } else if (user.role_id === 2) {
      setRoleToDisplay('Administrateur');
    } else {
      setRoleToDisplay('Invité');
    }
  }, [user.role_id]);

  return (
    <Main>
      <IconWrapper>
        <Icon name={iconName} size={50} />
      </IconWrapper>
      <InfosSection>
        <InfoName>
          {user.firstName} {user.lastName}
        </InfoName>
        <Role>{roleToDisplay && roleToDisplay}</Role>
      </InfosSection>
      <Params
        onPress={() =>
          navigation.push('Utilisateur admin view', {
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
  border-color: rgba(31, 19, 0, 0.3);
  background: #fdfdff;
`;
const IconWrapper = styled.View`
  width: 20%;
`;
const InfoName = styled.Text`
  align-self: flex-start;
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
