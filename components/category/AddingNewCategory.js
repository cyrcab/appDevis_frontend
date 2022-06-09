import React from 'react';
import styled from 'styled-components/native';

const AddingNewCategory = ({ cancelButton }) => {
  return (
    <Main>
      <InputContainer>
        <NewCatInput placeholder="test" />
      </InputContainer>
      <ActionContainer>
        <Button onPress={() => cancelButton(false)}>
          <ActionTextCancel>Retour</ActionTextCancel>
        </Button>
        <Button>
          <ActionText>Ajouter</ActionText>
        </Button>
      </ActionContainer>
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  display: flex;
  align-items: center;
  padding: 5% 0;
  border-radius: 15px;
  box-shadow: 0px 0px 2px rgba(31, 19, 0, 0.3);
`;
const InputContainer = styled.View`
  width: 90%;
`;
const NewCatInput = styled.TextInput`
  font-size: 20px;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 3%;
`;
const ActionContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3%;
`;
const Button = styled.TouchableOpacity``;
const ActionText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #083d77;
`;
const ActionTextCancel = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #ff4d42;
`;

export default AddingNewCategory;
