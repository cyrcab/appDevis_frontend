import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../../../context/UserContext';
import { AxiosContext } from '../../../context/AxiosContext';

import PackList from '../../../components/pack/PackList';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';
import AddButton from '../../../components/styled-components/buttons/AddButton';

import EstimateButton from '../../../components/styled-components/buttons/EstimateButton';
import displayAlertError from '../../../helpers/Alert/errorAlert';

const FileCreation = ({ route }) => {
  const { user } = useContext(UserContext);
  const userName = user.firstName + ' ' + user.lastName;
  const { authAxios } = useContext(AxiosContext);

  const [formToDisplay, setFormToDisplay] = useState(null);
  const [addingAnswerIsPressed, setAddingAnswerIsPressed] = useState(false);
  const [generateButton, setGenerateButton] = useState(false);
  const [optionList, setOptionList] = useState([]);
  const [packList, setPackList] = useState([]);
  const [file, setFile] = useState({
    type: null,
    user_id: user.id,
    created_by: userName,
    customer_id: null,
    price: null,
  });
  const [customer, setCustomer] = useState({
    firstname: null,
    lastname: null,
    company: null,
    phone: null,
    mail: null,
  });
  const [displayButtons, setDisplayButtons] = useState(false);
  const [action, setAction] = useState('');

  useEffect(() => {
    if (route.params) {
      const { file: fileToUpdate } = route.params;
      setFile(fileToUpdate);
      setFormToDisplay(fileToUpdate.type === 'estimate' ? 'ESTIMATE' : 'BILL');
      setCustomer(fileToUpdate.customer);
      setDisplayButtons(true);
      setAction('UPDATE');
    } else {
      setAction('CREATE');
    }
  }, [route.params]);

  // ordre pour fetch
  // 1. fetch customer --> récupérer l'id pour le mettre dans le devis ✅
  // 2. fetch les réponses ==> pour chaque réponse, récupéréer l'id pour le mettre dans le devis en bdd
  // + somme des tous les prix pour donner un prix total sur le devis
  // 3. fetch le devis / facture

  // useEffect(() => {
  //   if (
  //     action === 'CREATE' &&
  //     customer.firstname !== null &&
  //     customer.lastname !== null &&
  //     customer.company !== null &&
  //     customer.phone !== null &&
  //     customer.mail !== null &&
  //     answerList.length > 0
  //   ) {
  //     setGenerateButton(true);
  //   }
  // }, [action, answerList.length, customer]);

  const handleCreateFile = async () => {
    try {
      const estimateCreated = authAxios.post('/api/files', file);
      if (estimateCreated) {
        setDisplayButtons(true);
      } else {
        displayAlertError('Une erreur est survenue, merci de réessayer');
      }
    } catch (error) {
      displayAlertError(error);
    }
  };

  // const handleUpdateEstimate = async () => {
  //   try {
  //     const estimateUpdated = authAxios.put(
  //       `api/files/${estimate.id}`,
  //       estimate,
  //     );
  //     if (estimateUpdated) {
  //       setDisplayButtons(true);
  //     } else {
  //       displayAlertError('Une erreur est survenue, merci de réessayer');
  //     }
  //   } catch (error) {
  //     displayAlertError(error);
  //   }
  // };

  return (
    <Main>
      <ContentWrapper>
        <ButtonWrapper>
          <FormChoice
            textLeft="Devis"
            textRight="Facture"
            actionLeft={() => {
              setFormToDisplay('ESTIMATE');
              setFile({ ...file, type: 'estimate' });
            }}
            actionRight={() => {
              setFormToDisplay('BILL');
              setFile({ ...file, type: 'bill' });
            }}
          />
        </ButtonWrapper>
        <FormContainer>
          {formToDisplay && (
            <EstimateForm
              formStyle={formToDisplay}
              customer={customer}
              setCustomer={setCustomer}
            />
          )}
        </FormContainer>
        <AnswerListWrapper>
          <TitleList>Liste des pack</TitleList>
          <PackList list={packList} setList={setPackList} />
          {/* {addingAnswerIsPressed ? (
            <AnswerEstimate
              setAddingAnswerIsPressed={setAddingAnswerIsPressed}
              answerList={answerList}
              setGenerateButton={setGenerateButton}
              setAnswerList={setAnswerList}
            />
          ) : (
            <AddButton
              text="Ajouter une réponse"
              action={() => setAddingAnswerIsPressed(!addingAnswerIsPressed)}
            />
          )} */}
        </AnswerListWrapper>
      </ContentWrapper>
      <ButtonContainer>
        <EstimateButton
          text={action === 'CREATE' ? 'Créer' : 'Modifier'}
          isActif={generateButton}
          action={handleCreateFile}
        />
      </ButtonContainer>
      {displayButtons && !file.price ? (
        <ActionButton>
          <EstimateButton text="Signer" isActif />
          <EstimateButton text="Partager" isActif />
          <EstimateButton text="Voir" isActif />
        </ActionButton>
      ) : null}
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #eeeff5;
  height: 100%;
`;
const ContentWrapper = styled.View`
  display: flex;
  align-items: center;
`;
const FormContainer = styled.View`
  width: 90%;
  margin-top: 10%;
`;
const ButtonWrapper = styled.View`
  margin-top: 5%;
  width: 90%;
`;
const AnswerListWrapper = styled.View`
  width: 90%;
  margin-top: 5%;
`;
const TitleList = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3%;
  text-align: center;
`;
const ButtonContainer = styled.View`
  width: 90%;
  margin: 5% 0 15% 0;
  align-self: center;
`;
const ActionButton = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 10%;
`;

export default FileCreation;
