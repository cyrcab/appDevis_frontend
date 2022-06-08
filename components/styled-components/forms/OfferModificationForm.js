import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import FirstButton from '../buttons/FirstButton';
import { updateOffer } from '../../../screens/helpers/api/fetchApi';
import { Alert } from 'react-native';

const OfferModificationForm = ({ offer }) => {
  const user = useSelector((state) => state.auth);

  const userName = user.firstName + ' ' + user.lastName;

  const [offerDatas, setOfferDatas] = useState({
    name: offer.name,
    price: offer.price,
    description: offer.description,
  });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (
      offer.price !== offerDatas.price ||
      offer.name !== offerDatas.name ||
      offer.description !== offerDatas.description
    ) {
      setIsClickable(true);
    } else {
      setIsClickable(false);
    }
  }, [offer, offerDatas]);

  const handleUpdateOffer = async () => {
    const response = await updateOffer(offer.id, offerDatas, userName);

    const { errors, userDatas } = response;
    if (errors) {
      const { isCreated } = errors;
      showAlertInfo(isCreated);
      console.log(errors);
    }
    if (userDatas) {
      const { isCreated } = userDatas;
      showAlertInfo(isCreated);
    }
  };

  const showAlertInfo = (condition) => {
    if (!condition) {
      return Alert.alert(
        'Une erreur est survenue',
        "Merci de réessayer avec d'autre données",
        [
          {
            text: 'Cancel',
            onPress: () =>
              setOfferDatas({
                name: offer.name,
                price: offer.price,
                description: offer.description,
              }),
            style: 'default',
          },
        ],
      );
    }
  };

  const { firstName, lastName } = offer.User;

  const userCreator = firstName + ' ' + lastName;

  return (
    <Main>
      <InputsWrapper>
        <InputContainer>
          <Label>Prix du pack :</Label>
          <Input
            value={offerDatas.price.toString()}
            onChangeText={(price) =>
              setOfferDatas({ ...offerDatas, price: parseInt(price, 10) })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label>Nom du pack :</Label>
          <Input
            value={offerDatas.name}
            onChangeText={(price) =>
              setOfferDatas({ ...offerDatas, name: price })
            }
          />
        </InputContainer>
        <InputContainer>
          <Label>Description du pack :</Label>
          <Input
            value={offerDatas.description}
            multiline={true}
            onChangeText={(description) =>
              setOfferDatas({ ...offerDatas, description: description })
            }
          />
        </InputContainer>
        {offer.updated_at && (
          <OtherInfosContainer>
            <Label>Dernière modification : </Label>
            <InputInfos>{offer.updated_at.slice(0, 10)}</InputInfos>
          </OtherInfosContainer>
        )}
        {offer.modified_by && (
          <OtherInfosContainer>
            <Label>Dernière modification : </Label>
            <InputInfos>{offer.modified_by}</InputInfos>
          </OtherInfosContainer>
        )}
        <OtherInfosContainer>
          <Label>Créé par : </Label>
          <InputInfos>{userCreator}</InputInfos>
        </OtherInfosContainer>
        <OtherInfosContainer>
          <Label>Créée le : </Label>
          <InputInfos>{offer.created_at.slice(0, 10)}</InputInfos>
        </OtherInfosContainer>
      </InputsWrapper>
      <ButtonWrapper>
        <FirstButton
          text="Modifier"
          isClickable={isClickable}
          action={handleUpdateOffer}
        />
      </ButtonWrapper>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
  margin: 10% 0;
  min-height: 100%;
`;
const InputsWrapper = styled.View`
  width: 90%;
  border: 1px solid #1f1300;
  padding: 20px;
  border-radius: 30px;
  background-color: #fdfdff;
`;

const InputContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #8c8787;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
`;
const Input = styled.TextInput`
  width: 60%;
  font-size: 18px;
`;
const Label = styled.Text`
  font-weight: 600;
  font-size: 18px;
  width: 40%;
`;
const OtherInfosContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #8c8787;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 15px 0;
`;
const InputInfos = styled.Text`
  width: 60%;
  font-size: 18px;
`;

const ButtonWrapper = styled.View`
  margin-top: 5%;
  width: 50%;
  height: 10%;
`;

export default OfferModificationForm;
