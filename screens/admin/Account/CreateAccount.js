import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import UserCreation from '../../../components/styled-components/forms/UserCreation';
import FirstButton from '../../../components/styled-components/buttons/FirstButton';
import { Platform } from 'react-native';

const CreateAccount = () => {
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

  return (
    <Main behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormContainer>
        <UserCreation newUser={newUser} setNewUser={setNewUser} />
      </FormContainer>
      <ButtonContainer>
        <FirstButton
          text="Créer"
          isClickable={isClickable}
          action={() => console.log('lol')}
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
const ErrorInfos = styled.Text``;

export default CreateAccount;
