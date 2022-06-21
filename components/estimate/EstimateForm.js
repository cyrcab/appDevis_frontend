import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

const EstimateForm = ({ formStyle }) => {
  const [input, setInput] = useState({});

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
  // Faire le style des différents inputs
  // Ajouter un bouton qui affiche ou non le formulaire pour les infos générales
  // Ajouter un bouton qui affiche ou non l'ajout des réponses + ajout du prix correspondant
  // Ajouter le bouton de création + création en back
  // Ajouter un bouton qui va générer et télécharger le devis / la facture
  // Ajouter un choix pour la catégorie (pour les données)

  return (
    <Main>
      <EstimateInfos>
        {Object.entries(input).map(([key, value]) => {
          return (
            <InputContainer>
              <Label>{value}</Label>
              <Input />
            </InputContainer>
          );
        })}
      </EstimateInfos>
    </Main>
  );
};

const Main = styled.View`
  border: 1px solid #1f1300;
  padding: 5% 5%;
  border-radius: 30px;
  background: #fdfdff;
  width: 100%;
  height: 100%;
`;
const EstimateInfos = styled.View`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  padding: 3%;
`;
const Input = styled.TextInput``;
const Label = styled.Text``;

export default EstimateForm;
