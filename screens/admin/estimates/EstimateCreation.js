import React, { useState } from 'react';
import styled from 'styled-components/native';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';
import AddButton from '../../../components/styled-components/buttons/AddButton';
import AnswerListEstimate from '../../../components/estimate/AnswerListEstimate';

const EstimateCreation = () => {
  const [formToDisplay, setFormToDisplay] = useState(null);
  // const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);
  const [answerList, setAnswerList] = useState([]);

  const handleAddAnswer = () => {
    const randomId = (Math.random() * 100).toFixed(0);

    setAnswerList([
      ...answerList,
      {
        id: randomId,
        content: '',
        price: 300,
      },
    ]);
  };

  return (
    <Main>
      <ContentWrapper>
        <ButtonWrapper>
          <FormChoice
            textLeft="Facture"
            textRight="Devis"
            actionLeft={() => setFormToDisplay('ESTIMATE')}
            actionRight={() => setFormToDisplay('BILL')}
          />
        </ButtonWrapper>
        <FormContainer>
          {formToDisplay && <EstimateForm formStyle={formToDisplay} />}
        </FormContainer>
        <AnswerListWrapper>
          <TitleList>Liste des options à ajouter</TitleList>
          <AnswerListEstimate answerList={answerList} />
        </AnswerListWrapper>
        <ButtonWrapper>
          <AddButton text="Ajouter une réponse" action={handleAddAnswer} />
        </ButtonWrapper>
      </ContentWrapper>
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #eeeff5;
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

export default EstimateCreation;
