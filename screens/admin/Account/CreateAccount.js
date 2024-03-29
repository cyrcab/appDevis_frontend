import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { DEFAULT_PASSWORD } from '@env';

import { AxiosContext } from '../../../context/AxiosContext';

import UserCreation from '../../../components/user/UserCreation';
import FirstButton from '../../../components/styled-components/buttons/FirstButton';

const CreateAccount = () => {
  const { authAxios } = useContext(AxiosContext);
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
        newUser.firstName !== null &&
        newUser.lastName !== null &&
        newUser.mail !== null &&
        newUser.role_id !== 'default'
      ) {
        setIsClickable(true);
      } else {
        setIsClickable(false);
      }
    };
    handleButtonStatus();
  }, [newUser.firstName, newUser.lastName, newUser.mail, newUser.role_id]);

  const handleCreateUser = async () => {
    try {
      await authAxios.post('/api/users', {
        ...newUser,
        role_id: parseInt(newUser.role_id, 10),
        password: DEFAULT_PASSWORD,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Main>
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

const Main = styled.View`
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
