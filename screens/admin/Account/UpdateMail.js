import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import FirstButton from '../../../components/styled-components/FirstButton';

const UpdateMail = () => {
  const [password, setPassword] = useState({
    value: '',
    isCorrect: false,
  });
  const [isEnterPass, setIsEnterPass] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const [isFocused, setIsFocused] = useState(false);
  const marginForFocusedInput = isFocused ? 300 : 0;

  useEffect(() => {
    // c'est ici que l'on va tester si le mot de passe rentré est le bon
    // il faut néanmoins sécuriser la route histoire que n'importe qui ne puisse pas
    // modifier n'importe quel mot de passe
    if (isEnterPass) {
      console.log('password is in input');
    } else {
      console.log('no password in input');
    }
  }, [isEnterPass]);

  return (
    <Main>
      <Title>Changement de mot de passe</Title>
      <InputContainer>
        <TextInput>Rentrez votre mot de passe :</TextInput>
        <Input
          value={password.value}
          onChangeText={(text) => setPassword({ ...password, value: text })}
          secureTextEntry={true}
          onEndEditing={() => setIsEnterPass(true)}
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Rentrez votre nouveau mot de passe :</TextInput>
        <Input
          value={newPassword}
          onChangeText={setNewPassword}
          editable={password.isCorrect}
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Rentrez votre nouveau mot de passe :</TextInput>
        <Input
          value={newPasswordConfirmation}
          onChangeText={setNewPasswordConfirmation}
          style={{ marginBottom: marginForFocusedInput }}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          editable={password.isCorrect}
        />
      </InputContainer>
      <FirstButton text="Changer" />
    </Main>
  );
};

const Main = styled.View`
  height: 100%;
  background: #eeeff5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.View`
  width: 70%;
  margin-bottom: 6%;
`;
const Input = styled.TextInput`
  font-size: 20px;
  padding: 10px;
  background: #fdfdff;
  border: 2px solid black;
  margin-top: 10px;
`;
const TextInput = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20%;
  width: 60%;
  text-align: center;
`;

export default UpdateMail;
