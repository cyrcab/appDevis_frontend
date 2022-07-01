import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

const EstimateForm = ({ formStyle, customer, setCustomer }) => {
  const [input, setInput] = useState({});
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (formStyle === 'ESTIMATE') {
      setInput({
        firstname: "Prénom de l'interlocuteur :",
        lastname: "Nom de l'interlocuteur :",
        mail: "Mail de l'interlocuteur :",
        phone: 'Numéro de téléphone : ',
        company: "Nom de l'entreprise :",
      });
    } else {
      setInput({
        firstname: "Prénom de l'interlocuteur :",
        lastname: "Nom de l'interlocuteur :",
        phone: 'Numéro de téléphone : ',
        mail: "Mail de l'interlocuteur :",
        company: "Nom de l'entreprise :",
      });
    }
  }, [formStyle]);

  return (
    <Main isFocus={isFocus}>
      <DisplayInfos onPress={() => setIsOpen(!isOpen)}>
        <Text>Infos générales du devis</Text>
        <IconContainer>
          <Icon name={isOpen ? 'eye-off' : 'eye'} size={20} />
        </IconContainer>
      </DisplayInfos>
      {isOpen ? (
        <EstimateInfos>
          {Object.entries(input).map(([key, value]) => {
            return (
              <InputContainer key={key}>
                <Label>{value}</Label>
                <Input
                  onFocus={() => setIsFocus(true)}
                  onEndEditing={() => setIsFocus(false)}
                  value={customer[key]}
                  onChangeText={(text) =>
                    setCustomer({ ...customer, [key]: text })
                  }
                />
              </InputContainer>
            );
          })}
        </EstimateInfos>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  border: 1px solid #1f1300;
  padding: 5% 5%;
  background: #fdfdff;
  width: 100%;
  border-radius: 5px;
  margin-bottom: ${(props) => (props.isFocus ? '60%' : '0')};
`;
const EstimateInfos = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10%;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 3%;
`;
const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #1f1300;
  font-size: 18px;
  padding: 2%;
  margin-top: 1%;
`;
const Label = styled.Text`
  font-size: 18px;
`;
const Text = styled.Text`
  margin-right: 10%;
  font-size: 18px;
`;
const DisplayInfos = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
`;
const IconContainer = styled.View``;

export default EstimateForm;
