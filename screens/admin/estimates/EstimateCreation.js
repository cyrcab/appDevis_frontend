import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components/native';

import axios from '../../../helpers/api/axios.config';
import { UserContext } from '../../../context/UserContext';

import PackList from '../../../components/pack/PackList';

import FormChoice from '../../../components/styled-components/buttons/FormChoice';
import EstimateForm from '../../../components/estimate/EstimateForm';

import EstimateButton from '../../../components/styled-components/buttons/EstimateButton';
import displayAlertError from '../../../helpers/Alert/errorAlert';

const FileCreation = ({ route }) => {
  const { user } = useContext(UserContext);

  const [formToDisplay, setFormToDisplay] = useState(null);
  const [generateButton, setGenerateButton] = useState(false);
  const [packList, setPackList] = useState([]);
  const [file, setFile] = useState({
    type: route.params ? route.params.file.type : null,
    user_id: user.id,
    reduction: route.params ? route.params.file.reduction : null,
    pack: {
      connect: [],
    },
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
      setPackList(fileToUpdate.pack);
      setFormToDisplay(fileToUpdate.type === 'estimate' ? 'ESTIMATE' : 'BILL');
      setCustomer(fileToUpdate.customer);
      setDisplayButtons(true);
      setAction('UPDATE');
    } else {
      setAction('CREATE');
    }
  }, [route.params]);

  useEffect(() => {
    const json = packList.map((el) => `{"id" : ${el.id}}`);
    const obj = json.map((el) => JSON.parse(el));
    setFile({ ...file, pack: { connect: obj } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packList]);

  console.log(file);

  useEffect(() => {
    if (
      action === 'CREATE' &&
      customer.firstname !== null &&
      customer.lastname !== null &&
      customer.company !== null &&
      customer.phone !== null &&
      customer.mail !== null &&
      packList.length > 0
    ) {
      setGenerateButton(true);
    } else if (action === 'UPDATE') {
      setGenerateButton(true);
    }
  }, [
    action,
    customer.company,
    customer.firstname,
    customer.lastname,
    customer.mail,
    customer.phone,
    packList.length,
  ]);

  const handleCreateFile = async () => {
    try {
      const newCustomer = await axios.post('/api/customers', customer);
      if (newCustomer.data) {
        const newFile = await axios.post('/api/files', {
          ...file,
          customer_id: newCustomer.data.id,
        });

        if (!newFile) {
          displayAlertError(
            "Une erreur s'est produite lors de la création du fichier",
          );
        }
      } else {
        displayAlertError("Une erreur s'est produite ");
      }
    } catch (error) {
      displayAlertError(error);
    }
    setDisplayButtons(true);
  };

  const handleUpdateEstimate = async () => {
    try {
      const estimateUpdated = axios.put(`api/files/${route.params.file.id}`, {
        ...file,
        reduction: parseFloat(file.reduction),
      });
      if (estimateUpdated) {
        setDisplayButtons(true);
      } else {
        displayAlertError('Une erreur est survenue, merci de réessayer');
      }
    } catch (error) {
      displayAlertError(error);
    }
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
        </AnswerListWrapper>
        <InputContainer>
          <Input
            placeholder="Ajouter une réduction"
            onChangeText={(text) => setFile({ ...file, reduction: text })}
            value={file.reduction !== 0 ? file.reduction : null}
          />
        </InputContainer>
      </ContentWrapper>
      <ButtonContainer>
        <EstimateButton
          text={action === 'CREATE' ? 'Créer' : 'Modifier'}
          isActif={generateButton}
          action={action === 'CREATE' ? handleCreateFile : handleUpdateEstimate}
        />
      </ButtonContainer>
      {displayButtons && !file.price ? (
        <ActionButton>
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
const InputContainer = styled.View`
  width: 90%;
`;
const Input = styled.TextInput`
  margin: 2% 0;
  font-size: 15px;
  border: 1px solid rgba(31, 19, 0, 0.3);
  background: #fdfdff;
  padding: 2% 5%;
  font-weight: 600;
  border-radius: 5px;
`;

export default FileCreation;
