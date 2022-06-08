import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { createUser } from '../../helpers/api/fetchApi';

import UserCreation from '../../../components/styled-components/forms/UserCreation';
import FirstButton from '../../../components/styled-components/buttons/FirstButton';

const CreateAccount = () => {
  const navigation = useNavigation();
  const [newUser, setNewUser] = useState({
    mail: null,
    firstName: null,
    password: null,
    lastName: null,
    role_id: null,
  });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const handleButtonStatus = () => {
      if (
        (newUser.firstName &&
          newUser.lastName &&
          newUser.mail &&
          newUser.role_id) !== null
      ) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    };
    handleButtonStatus();
  }, [newUser.firstName, newUser.lastName, newUser.mail, newUser.role_id]);

  const handleCreateUser = async () => {
    const response = await createUser(newUser);

    const { errors, userDatas } = response;
    if (errors) {
      const { isCreated } = errors;
      showAlertInfo(isCreated);
    }
    if (userDatas) {
      const { isCreated } = userDatas;
      showAlertInfo(isCreated);
    }
  };

  const showAlertInfo = (condition) => {
    if (condition === true) {
      return Alert.alert(
        "L'utilisateur a bien été créé ✅",
        "L'utilisateur a été créé avec succès, un mail avec ses indentifiants de connexion vient de lui être envoyé",
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
        'Le mail est déjà utilisé ❌',
        "Merci d'essayer à nouveau avec un mail qui n'est pas encore utilisé",
        [
          {
            text: 'Cancel',
            onPress: () => setNewUser({ ...newUser, mail: null }),
            style: 'default',
          },
        ],
      );
    }
  };

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormContainer>
        <UserCreation newUser={newUser} setNewUser={setNewUser} />
      </FormContainer>
      <ButtonContainer>
        <FirstButton
          text="Créer"
          isClickable={isClickable}
          action={handleCreateUser}
        />
      </ButtonContainer>
    </Main>
  );
};

const Main = styled.KeyboardAvoidingView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #eeeff5;
`;
const FormContainer = styled.View`
  width: 80%;
  height: 70%;
`;
const ButtonContainer = styled.View`
  margin-top: 10%;
  width: 50%;
  height: 8%;
`;

export default CreateAccount;
