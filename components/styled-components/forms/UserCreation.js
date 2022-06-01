import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

const UserCreation = ({ lastName, firstName, mail }) => {
  const [selectRole, setSelectRole] = useState();

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
      <SelectWrapper>
        <TitleWrapper>Role de l'utilisateur</TitleWrapper>
        <Picker
          selectedValue={selectRole}
          onValueChange={(itemValue, itemIndex) => setSelectRole(itemValue)}
        >
          <Picker.Item label="Sélectionnez un role" value="aucune" />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Commercial" value="commercial" />
          <Picker.Item label="consultant" value="consultant" />
        </Picker>
      </SelectWrapper>
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

const TitleWrapper = styled.Text`
  font-size: 22px;
  text-align: center;
`;
const SelectWrapper = styled.View`
  padding: 15px;
  margin-top: 5%;
`;

export default UserCreation;
