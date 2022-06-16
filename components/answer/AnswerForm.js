import React, { useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import DuoButton from '../styled-components/buttons/DuoButton';

const AnswerForm = ({ setAddButtonIsPressed }) => {
  const [inputIsPressed, setInPutIsPressed] = useState(false);

  return (
    <Main>
      <InputContainer>
        <AnswerContent
          autoFocus={true}
          placeholder="Ceci est une réponse"
          onFocus={() => setInPutIsPressed(true)}
        />
        <IconContainer>
          <Icon name="trash" size={20} color="rgba(31, 19, 0, 0.8)" />
        </IconContainer>
      </InputContainer>
      {inputIsPressed ? (
        <>
          <DuoButton
            textRight="Sauvegarder"
            textLeft="Annuler"
            actionLeft={() => setAddButtonIsPressed(false)}
          />
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  width: 90%;
`;

// style concernant les réponses
const IconContainer = styled.TouchableOpacity`
  width: 10%;
  margin-left: 5%;
`;
const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3%;
  margin-bottom: 2%;
  border: 1px solid rgba(31, 19, 0, 0.3);
`;
const AnswerContent = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;
const Text = styled.Text`
  font-size: 18px;
`;

export default AnswerForm;
