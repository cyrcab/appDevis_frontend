import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert, Text } from 'react-native';

import FirstButton from '../../../components/styled-components/FirstButton';

const UpdateMail = () => {
  const [mail, setMail] = useState({
    value: '',
    isCorrect: true,
  });
  const [isEnterMail, setIsEnterMail] = useState(false);
  // const [areTheSame, setAreTheSame] = useState(false);
  const [newMail, setNewMail] = useState('');
  const [newMailConfirmation, setNewMailConfirmation] = useState('');

  const [isFocused, setIsFocused] = useState(false);
  const marginForFocusedInput = isFocused ? 300 : 0;

  useEffect(() => {
    // c'est ici que l'on va tester si le mot de passe rentré est le bon
    // il faut néanmoins sécuriser la route histoire que n'importe qui ne puisse pas
    // modifier n'importe quel mot de passe
    if (isEnterMail) {
      console.log('password is input');
    } else {
      console.log('no password input');
    }
  }, [isEnterMail]);

  const showMailErrorAlert = () => {
    Alert.alert(
      'Mauvaise adresse mail',
      "L'adresse mail rentrée n'est pas la bonne, merci d'essayer à nouveau",
      [
        {
          text: 'ok',
          onPress: () => setMail({ ...mail, value: '' }),
          style: 'destructive',
        },
      ],
    );
  };

  const [areTheSame, setAreTheSame] = useState(false);
  const testNewPassword = () => {
    if (newMail === newMailConfirmation) {
      setAreTheSame(true);
    }
  };

  return (
    <Main>
      <Title>Changement d'adresse mail</Title>
      <InputContainer>
        <TextInput>Rentrez votre adresse mail actuelle :</TextInput>
        <Input
          value={mail.value}
          keyboardType="email-address"
          onChangeText={(text) => setMail({ ...mail, value: text })}
          clearButtonMode="while-editing"
          onEndEditing={() => {
            setIsEnterMail(true);
            !mail.isCorrect ? showMailErrorAlert() : null;
          }}
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Rentrez votre nouvelle adresse mail :</TextInput>
        <Input
          value={newMail}
          keyboardType="email-address"
          onChangeText={setNewMail}
          editable={mail.isCorrect}
          clearButtonMode="while-editing"
        />
      </InputContainer>
      <InputContainer>
        <TextInput>Confirmez votre nouvelle adresse mail :</TextInput>
        <Input
          value={newMailConfirmation}
          keyboardType="email-address"
          onChangeText={setNewMailConfirmation}
          style={{ marginBottom: marginForFocusedInput }}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => {
            setIsFocused(false);
            testNewPassword();
          }}
          editable={mail.isCorrect}
          clearButtonMode="while-editing"
        />
      </InputContainer>
      <FirstButton text="Changer" />
      {newMail && newMailConfirmation && !areTheSame ? (
        <Text>Les adresses ne concordent pas</Text>
      ) : null}
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
