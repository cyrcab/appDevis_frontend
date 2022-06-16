import React from 'react';
import styled from 'styled-components/native';
import { deleteUser } from '../../helpers/api/fetchApi';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AccountInfos from '../../../components/account/AccountInfos';
import AccountParameterList from '../../../components/parameters/ParameterList';
import DeleteButton from '../../../components/styled-components/buttons/DeleteButton';

import { PARAMETERS } from '../../../app/datas/accountParametersList';

const AccountAdminView = ({ route }) => {
  const navigation = useNavigation();
  const { user } = route.params;

  const handleDeleteUser = async () => {
    const response = await deleteUser(user.id);

    const { errors, userDatas } = response;
    if (errors) {
      const { isDeleted } = errors;
      showAlertInfo(isDeleted);
    }
    if (userDatas) {
      const { isDeleted } = userDatas;
      showAlertInfo(isDeleted);
    }
  };

  const showAlertInfo = (condition) => {
    if (condition === true) {
      return Alert.alert(
        "L'utilisateur a bien été supprimé ✅",
        "L'utilisateur a été supprimé avec succès.",
        [
          {
            text: 'Suivant',
            onPress: () => navigation.navigate('Liste des utilisateurs'),
            style: 'default',
          },
        ],
      );
    } else {
      return Alert.alert(
        'Utilisateur introuvable ❌',
        "L'utilisateur a peut être déjà été supprimé",
        [
          {
            text: 'Suivant',
            onPress: () => navigation.navigate('Liste des utilisateurs'),
            style: 'default',
          },
        ],
      );
    }
  };

  const deleteConfirmation = () => {
    Alert.alert(
      "Suppression d'un utilisateur",
      'Vous êtes sur le point de supprimer un utilisateur, voulez-vous continuer ?',
      [
        {
          text: 'Annuler',
          onPress: () => Alert.alert("L'utilisateur n'a pas été supprimé"),
          style: 'cancel',
        },
        {
          text: 'Continuer',
          onPress: () => handleDeleteUser(),
        },
      ],
    );
  };

  return (
    <Main>
      <AccountInfos user={user} />
      <AccountParameterList parameters={PARAMETERS} />
      <ButtonContainer>
        <DeleteButton text="Supprimer" action={deleteConfirmation} />
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
