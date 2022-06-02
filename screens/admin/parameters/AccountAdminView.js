import React from 'react';
import styled from 'styled-components/native';
import deleteUser from '../../helpers/deleteUser';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/ParameterList';
import DeleteButton from '../../../components/styled-components/buttons/DeleteButton';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const AccountAdminView = ({ route }) => {
  const { user } = route.params;

  const handleDeleteUser = async () => {
    const response = await deleteUser(user.id);

    const { errors, userDatas } = response;
    if (errors) {
      const { isDeleted } = errors;
      console.log({ isCreated: isDeleted, ...errors });
    }
    if (userDatas) {
      const { isDeleted } = userDatas;
      console.log({ isCreated: isDeleted, ...userDatas });
    }
  };

  return (
    <Main>
      <AccountInfos user={user} />
      <AccountParameterList parameters={PARAMETERS} />
      <ButtonContainer>
        <DeleteButton text="Supprimer" action={handleDeleteUser} />
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
  width: 50%;
  margin-top: 10%;
`;

export default AccountAdminView;
