import React, { useState } from 'react';
import styled from 'styled-components/native';

const OfferCreationForm = ({ offer }) => {
  const [offerDatas, setOfferDatas] = useState({
    ...offer,
  });

  const { firstName, lastName } = offerDatas.User;

  const userCreator = firstName + ' ' + lastName;

  return (
    <Main>
      <InputsWrapper>
        <InputContainer>
          <Label>Prix du pack :</Label>
          <Input
            value={offerDatas.price.toString()}
            onChangeText={(price) => setOfferDatas({ ...offer, price: price })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Nom du pack :</Label>
          <Input
            value={offerDatas.name}
            onChangeText={(price) => setOfferDatas({ ...offer, name: price })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Description du pack :</Label>
          <Input
            value={offerDatas.description}
            multiline={true}
            onChangeText={(price) =>
              setOfferDatas({ ...offer, description: price })
            }
          />
        </InputContainer>
        {offerDatas.updated_at && (
          <OtherInfosContainer>
            <Label>Dernière modification : </Label>
            <InputInfos>{offerDatas.updated_at}</InputInfos>
          </OtherInfosContainer>
        )}
        <OtherInfosContainer>
          <Label>Créé par : </Label>
          <InputInfos>{userCreator}</InputInfos>
        </OtherInfosContainer>
        <OtherInfosContainer>
          <Label>Créée le : </Label>
          <InputInfos>{offerDatas.created_at.slice(0, 10)}</InputInfos>
        </OtherInfosContainer>
      </InputsWrapper>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10%;
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
  background: lightgrey;
  width: 60%;
  font-size: 18px;
`;

export default OfferCreationForm;
