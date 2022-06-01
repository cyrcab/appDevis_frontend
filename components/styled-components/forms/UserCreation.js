import React from 'react';
import styled from 'styled-components/native';

const UserCreation = ({ lastName, firstName, mail }) => {
  return (
    <Main>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder={lastName}
          placeholderTextColor="#1f1300"
        />
      </InputContainer>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder={firstName}
          placeholderTextColor="#1f1300"
        />
      </InputContainer>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder={mail}
          placeholderTextColor="#1f1300"
        />
      </InputContainer>
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  width: 100%;
  height: 100%;
  border: 1px solid #1f1300;
  border-radius: 30px;
  padding: 20px;
`;
const InputContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #8c8787;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Input = styled.TextInput`
  font-size: 18px;
  height: 70%;
  width: 100%;
`;

export default UserCreation;
