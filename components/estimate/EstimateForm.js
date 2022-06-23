import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';

const EstimateForm = ({ formStyle }) => {
  const [input, setInput] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (formStyle === 'ESTIMATE') {
      setInput({
        clientName: "Nom de l'interlocuteur :",
        estimateCreator: 'Nom de la personne qui a créé le devis : ',
        clientNumber: 'Numéro de téléphone : ',
        companyName: "Nom de l'entreprise :",
      });
    } else {
      setInput({
        clientName: "Nom de l'interlocuteur :",
        estimateCreator: 'Nom de la personne qui a créé le devis : ',
        clientNumber: 'Numéro de téléphone : ',
        companyKey: "Siret de l'entreprise :",
        companyName: "Nom de l'entreprise :",
      });
    }
  }, [formStyle]);

  // -----------------------------------   TODO   -----------------------------------
  // Ajouter un choix pour la catégorie (pour les données)
  // Ajouter le bouton de création + création en back
  // Ajouter un bouton qui va générer et télécharger le devis / la facture

  return (
    <Main>
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
                <Input />
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
  border-radius: 30px;
  background: #fdfdff;
  width: 100%;
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
  border: 1px solid black;
  font-size: 18px;
  padding: 2%;
  margin-top: 3%;
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
