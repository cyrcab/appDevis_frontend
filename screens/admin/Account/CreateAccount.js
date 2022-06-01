import React from 'react';
import styled from 'styled-components/native';
import UserCreation from '../../../components/styled-components/forms/UserCreation';

const CreateAccount = () => {
  return (
    <Main>
      <Title>Page de création de compte</Title>
      <FormContainer>
        <UserCreation lastName="Nom" firstName="Prenom" mail="Adresse mail" />
      </FormContainer>
    </Main>
  );
};

const Main = styled.SafeAreaView`
  display: flex;
  align-items: center;
  height: 100%;
  background: #eeeff5;
`;
const FormContainer = styled.View`
  width: 80%;
  height: 60%;
`;
const Title = styled.Text``;

export default CreateAccount;
