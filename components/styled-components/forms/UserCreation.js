import React from 'react';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

const UserCreation = ({ newUser, setNewUser }) => {
  const { lastName, firstName, mail, role_id } = newUser;

  return (
    <Main>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder="Nom"
          autoCapitalize="words"
          placeholderTextColor="#1f1300"
          value={lastName}
          onChangeText={(input) => setNewUser({ ...newUser, lastName: input })}
        />
      </InputContainer>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder="Prénom"
          autoCapitalize="words"
          placeholderTextColor="#1f1300"
          value={firstName}
          onChangeText={(input) => setNewUser({ ...newUser, firstName: input })}
        />
      </InputContainer>
      <InputContainer>
        <Input
          clearButtonMode="while-editing"
          autoCorrect={false}
          placeholder="Mail"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#1f1300"
          value={mail}
          onChangeText={(input) => setNewUser({ ...newUser, mail: input })}
        />
      </InputContainer>
      <SelectWrapper>
        <TitleWrapper>Role de l'utilisateur</TitleWrapper>
        <Picker
          numberOfLines={2}
          selectedValue={role_id}
          onValueChange={(itemValue, itemIndex) =>
            setNewUser({ ...newUser, role_id: itemValue })
          }
        >
          <Picker.Item label="Sélectionnez un role" value={null} />
          <Picker.Item label="Admin" value={1} />
          <Picker.Item label="Commercial" value={2} />
          <Picker.Item label="consultant" value={3} />
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
  height: 12%;
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
  margin-top: 10%;
  padding: 0 10%;
`;

export default UserCreation;
