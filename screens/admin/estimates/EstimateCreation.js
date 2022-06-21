import React, { useState } from 'react';
import styled from 'styled-components/native';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';

const EstimateCreation = () => {
  const [formToDisplay, setFormToDisplay] = useState(null);

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

export default EstimateCreation;
