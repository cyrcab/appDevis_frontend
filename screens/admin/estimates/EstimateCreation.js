import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import AnswerListEstimate from '../../../components/estimate/AnswerListEstimate';
import CategoryChoice from '../../../components/estimate/CategoryChoice';
import EstimateButton from '../../../components/styled-components/buttons/EstimateButton';

import AnswerEstimate from '../../../components/estimate/AnswerEstimate';
import handleFetchEstimate from './function/handleFetchEstimate';

const EstimateCreation = ({ route }) => {
  const user = useSelector((state) => state.auth);
  const userName = user.firstName + ' ' + user.lastName;
  const [formToDisplay, setFormToDisplay] = useState(null);
  const [addingAnswerIsPressed, setAddingAnswerIsPressed] = useState(false);
  const [generateButton, setGenerateButton] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const [estimate, setEstimate] = useState({
    category_id: null,
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
      const { estimate: estimateToUpdate } = route.params;
      setEstimate(estimateToUpdate);
      setFormToDisplay(
        estimateToUpdate.type === 'estimate' ? 'ESTIMATE' : 'BILL',
      );
      setCustomer(estimateToUpdate.Customer);
      setAnswerList(
        estimateToUpdate.Estimate_has_Answer.map((el) => ({
          ...el.Answer,
        })),
      );
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

  useEffect(() => {
    if (
      customer.firstname !== null &&
      customer.lastname !== null &&
      customer.company !== null &&
      customer.phone !== null &&
      customer.mail !== null &&
      estimate.category_id !== null &&
      answerList.length > 0
    ) {
      setGenerateButton(true);
    }
  }, [answerList.length, customer, estimate.category_id]);

  const handleCreateEstimate = () => {
    const estimateIsCreated = handleFetchEstimate(
      customer,
      answerList,
      user.id,
      estimate,
    );
    if (estimateIsCreated) {
      setDisplayButtons(true);
    }
  };
  const handleUpdateEstimate = () => {
    console.log('update');
  };

  return (
    <Main>
      <ContentWrapper>
        <ButtonWrapper>
          <FormChoice
            textLeft="Devis"
            textRight="Facture"
            actionLeft={() => {
              setFormToDisplay('ESTIMATE');
              setEstimate({ ...estimate, type: 'estimate' });
            }}
            actionRight={() => {
              setFormToDisplay('BILL');
              setEstimate({ ...estimate, type: 'bill' });
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
        <SelectorContainer>
          <CategoryChoice estimate={estimate} setEstimate={setEstimate} />
        </SelectorContainer>
        <AnswerListWrapper>
          <TitleList>Liste des options à ajouter</TitleList>
          <AnswerListEstimate
            answerList={answerList}
            setAnswerList={setAnswerList}
            setAddingAnswerIsPressed={setAddingAnswerIsPressed}
          />
          {addingAnswerIsPressed ? (
            <AnswerEstimate
              setAddingAnswerIsPressed={setAddingAnswerIsPressed}
              answerList={answerList}
              setAnswerList={setAnswerList}
            />
          ) : (
            <AddButton
              text="Ajouter une réponse"
              action={() => setAddingAnswerIsPressed(!addingAnswerIsPressed)}
            />
          )}
        </AnswerListWrapper>
      </ContentWrapper>
      <ButtonContainer>
        <EstimateButton
          text={action === 'CREATE' ? 'Créer' : 'Modifier'}
          isActif={generateButton}
          action={
            action === 'CREATE' ? handleCreateEstimate : handleUpdateEstimate
          }
        />
      </ButtonContainer>
      {displayButtons && (
        <ActionButton>
          <EstimateButton text="Signer" isActif />
          <EstimateButton text="Partager" isActif />
          <EstimateButton text="Voir" isActif />
        </ActionButton>
      )}
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
const SelectorContainer = styled.View`
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

export default EstimateCreation;
