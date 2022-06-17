import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import DuoButton from '../styled-components/buttons/DuoButton';
import fetchOffer from '../../screens/helpers/api/fetchOffer';
import OfferListForAnswer from './OfferListForAnswer';
import displayAlertError from '../../screens/helpers/Alert/errorAlert';
import CheckBox from '../styled-components/CheckBox';

const AnswerForm = ({
  setAddButtonIsPressed,
  answer,
  isDeletable,
  deleteAnswer,
}) => {
  const [inputIsPressed, setInPutIsPressed] = useState(false);
  const [answerData, setAnswerData] = useState({
    content: null,
    price: null,
    offer_id: null,
  });
  const [addingOffer, setAddingOffer] = useState(false);
  const [offerList, setOfferList] = useState([]);

  useEffect(() => {
    if (answer) {
      setAnswerData({ content: answer.content, price: answer.price });
    }
    fetchOffer('GET')
      .then((response) => {
        setOfferList(response.offer);
        return response;
      })
      .then((response) => {
        if (response.errors) {
          displayAlertError(response.errors);
        }
      })
      .catch((err) => displayAlertError(err));
  }, []);

  return (
    <Main>
      <InputContainer>
        <AnswerContent
          value={answerData.content}
          placeholder="Ceci est une réponse"
          onFocus={() => setInPutIsPressed(true)}
        />
        {isDeletable ? (
          <IconContainer onPress={() => deleteAnswer(answer.id)}>
            <Icon name="trash" size={20} color="rgba(31, 19, 0, 0.8)" />
          </IconContainer>
        ) : null}
      </InputContainer>

      {inputIsPressed ? (
        <>
          <CheckBox
            text="Rajouter une offre"
            action={() => setAddingOffer(!addingOffer)}
          />
          {addingOffer ? <OfferListForAnswer offerList={offerList} /> : null}
          <InputContainer>
            <AnswerContent
              value={answerData.price && answerData.price.toString()}
              keyboardType="numeric"
              placeholder="Prix (si nécessaire)"
            />
          </InputContainer>
          <ButtonContainer>
            <DuoButton
              textRight="Sauvegarder"
              textLeft="Annuler"
              actionLeft={() => {
                setAddButtonIsPressed(false);
                setInPutIsPressed(false);
              }}
            />
          </ButtonContainer>
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  width: 100%;
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
  margin: 2% 0;
  border: 1px solid rgba(31, 19, 0, 0.3);
`;
const AnswerContent = styled.TextInput`
  width: 90%;
  font-size: 18px;
`;

const ButtonContainer = styled.View`
  margin-top: 2%;
`;

const Text = styled.Text`
  font-size: 18px;
`;

export default AnswerForm;
