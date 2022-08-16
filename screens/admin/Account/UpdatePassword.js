import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert, Text } from 'react-native';

import FirstButton from '../../../components/styled-components/buttons/FirstButton';

const UpdatePassword = () => {
  const [password, setPassword] = useState({
    value: '',
    isCorrect: true,
  });
  const [isEnterPass, setIsEnterPass] = useState(false);
  // const [areTheSame, setAreTheSame] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const [isFocused, setIsFocused] = useState(false);
  const marginForFocusedInput = isFocused ? 300 : 0;

  useEffect(() => {
    // c'est ici que l'on va tester si le mot de passe rentré est le bon
    // il faut néanmoins sécuriser la route histoire que n'importe qui ne puisse pas
    // modifier n'importe quel mot de passe
    if (isEnterPass) {
      console.log('password is input');
    } else {
      console.log('no password input');
    }
  }, [isEnterPass]);

  const showPassErrorAlert = () => {
    Alert.alert(
      'Mauvais mot de passe',
      "Le mot de passe rentré n'est pas bon, merci de le saisir à nouveau",
      [
        {
          text: 'ok',
          onPress: () => setPassword({ ...password, value: '' }),
          style: 'destructive',
        },
      ],
    );
  };

  const [areTheSame, setAreTheSame] = useState(false);
  const testNewPassword = () => {
    if (newPassword === newPasswordConfirmation) {
      setAreTheSame(true);
    }
  };

  return (
    <Main>
      <Title>Changement de mot de passe</Title>
      <InputContainer>
        <TextInput>Rentrez votre mot de passe :</TextInput>
        <Input
          value={password.value}
          onChangeText={(text) => setPassword({ ...password, value: text })}
          secureTextEntry={true}
          clearButtonMode="while-editing"
          onEndEditing={() => {
            setIsEnterPass(true);
            !password.isCorrect ? showPassErrorAlert() : null;
          }}
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Rentrez votre nouveau mot de passe :</TextInput>
        <Input
          value={newPassword}
          onChangeText={setNewPassword}
          editable={password.isCorrect}
          clearButtonMode="while-editing"
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Rentrez votre nouveau mot de passe :</TextInput>
        <Input
          value={newPasswordConfirmation}
          onChangeText={setNewPasswordConfirmation}
          style={{ marginBottom: marginForFocusedInput }}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => {
            setIsFocused(false);
            testNewPassword();
          }}
          editable={password.isCorrect}
          clearButtonMode="while-editing"
        />
      </InputContainer>
      <ButtonContainer>
        <FirstButton text="Changer" isClickable={true} style={style.button} />
      </ButtonContainer>
      {newPassword && newPasswordConfirmation && !areTheSame ? (
        <Text>Les mots de passes ne concordent pas</Text>
      ) : null}
    </Main>
  );
};

const style = {
  button: {
    colorActive: '#083D77',
    colorInactive: '#EFEFEF',
  },
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
const ButtonContainer = styled.View`
  width: 30%;
  height: 8%;
`;

export default UpdatePassword;
