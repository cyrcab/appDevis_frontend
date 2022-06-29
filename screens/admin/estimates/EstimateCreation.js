import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import AnswerListEstimate from '../../../components/estimate/AnswerListEstimate';
import CategoryChoice from '../../../components/estimate/CategoryChoice';
import EstimateButton from '../../../components/styled-components/buttons/EstimateButton';

import fetchCustomer from '../../../helpers/api/fetchCustomer';
import fetchAnswer from '../../../helpers/api/fetchAnswer';
import AnswerEstimate from '../../../components/estimate/AnswerEstimate';
import fetchEstimate from '../../../helpers/api/fetchEstimate';

const EstimateCreation = () => {
  const user = useSelector((state) => state.auth);
  const [formToDisplay, setFormToDisplay] = useState(null);
  const [addingAnswerIsPressed, setAddingAnswerIsPressed] = useState(false);
  const [generateButton, setGenerateButton] = useState(false);
  const [answerList, setAnswerList] = useState([]);
  const [estimate, setEstimate] = useState({
    category_id: null,
    type: null,
    user_id: user.id,
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

  const handleFetchEstimate = async () => {
    try {
      const idCustomer = await fetchCustomer('CREATE', customer);
      const answerCount = await fetchAnswer(
        'CREATE',
        [answerList],
        null,
        user.id,
      );
      const newEstimate = await fetchEstimate('CREATE', {
        ...estimate,
        customer_id: idCustomer.customer.id,
        price: answerList.reduce((acc, cur) => acc + cur.price, 0),
      });
      const newAnswers = await fetchAnswer(
        'GETLAST',
        null,
        null,
        null,
        null,
        null,
        answerCount.answer.count,
      );
      const answerIdList = newAnswers.answer.map((answer) => answer.id);
      const nbrJointure = await fetchAnswer(
        'CREATE_LINK',
        null,
        null,
        null,
        null,
        null,
        null,
        newEstimate.estimate.id,
        answerIdList,
      );
      if (nbrJointure.answer) {
        setDisplayButtons(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <Main>
      <ContentWrapper>
        <ButtonWrapper>
          <FormChoice
            textLeft="Facture"
            textRight="Devis"
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
          text="Générer"
          isActif={generateButton}
          action={handleFetchEstimate}
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
  margin: 5% 0 2% 0;
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
