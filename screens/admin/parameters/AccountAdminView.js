import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/parameters/ParameterList';
import DeleteButton from '../../../components/styled-components/buttons/DeleteButton';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const AccountAdminView = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  // const handleDeleteUser = async () => {
  //   const response = await deleteUser(user.id);

  //   const { errors, userDatas } = response;
  //   if (errors) {
  //     const { isDeleted } = errors;
  //     showAlertInfo(isDeleted);
  //   }
  //   if (userDatas) {
  //     const { isDeleted } = userDatas;
  //     showAlertInfo(isDeleted);
  //   }
  // };

  return (
    <Main>
      <AccountInfos user={user} />
      <AccountParameterList parameters={PARAMETERS} />
      <ButtonContainer>
        <DeleteButton text="Supprimer" />
      </ButtonContainer>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  background: #eeeff5;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ButtonContainer = styled.View`
  width: 40%;
  margin-top: 10%;
`;

export default AccountAdminView;
