import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import FirstButton from '../styled-components/buttons/FirstButton';
import { createOffer } from '../../screens/helpers/api/fetchApi';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const OfferCreationForm = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth);
  const [offerDatas, setOfferDatas] = useState({
    name: null,
    price: null,
    description: null,
  });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (
      offerDatas.price !== null &&
      offerDatas.name !== null &&
      offerDatas.description !== null
    ) {
      setIsClickable(true);
    } else {
      setIsClickable(false);
    }
  }, [offerDatas]);

  const handleCreateOffer = async () => {
    const response = await createOffer(offerDatas, user.id);

    const { errors, userDatas } = response;
    if (errors) {
      const { isCreated } = errors;
      showAlertInfo(isCreated);
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
            onPress: () => {},
            style: 'default',
          },
        ],
      );
    } else {
      return Alert.alert(
        'Offre Créée ✅',
        "L'offre a été créée avec succès, vous la retrouverez dans la liste très vite",
        [
          {
            text: 'Suivant',
            onPress: () => {
              navigation.goBack();
            },
            style: 'default',
          },
        ],
      );
    }
  };

  return (
    <Main>
      <InputsWrapper>
        <InputContainer>
          <Label>Prix du pack :</Label>
          <Input
            value={offerDatas.price && offerDatas.price.toString()}
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
      </InputsWrapper>
      <ButtonWrapper>
        <FirstButton
          text="Créer"
          isClickable={isClickable}
          action={handleCreateOffer}
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

const ButtonWrapper = styled.View`
  margin-top: 5%;
  width: 50%;
  height: 10%;
`;

export default OfferCreationForm;
