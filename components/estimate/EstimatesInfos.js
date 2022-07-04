import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import fetchEstimate from '../../helpers/api/fetchEstimate';

const EstimatesInfos = ({ estimate, estimateList, setEstimateList }) => {
  const navigation = useNavigation();
  const { Category, Customer, Estimate_has_Answer } = estimate;
  const [estimateInfoIsOpen, setEstimateInfoIsOpen] = useState(false);
  const [answerDetailsIsOpen, setAnswerDetailsIsOpen] = useState(false);

  const handleDeleteEstimate = () => {
    setEstimateList(estimateList.filter((el) => el.id !== estimate.id));
    fetchEstimate('DELETE', estimate.id);
  };

  return (
    <Main>
      <Header>
        <TitleContainer
          onPress={() => setEstimateInfoIsOpen(!estimateInfoIsOpen)}
        >
          <Text>{Customer.company} </Text>
          <ChevronContainer>
            {estimateInfoIsOpen ? (
              <Icon name="down" size={20} />
            ) : (
              <Icon name="right" size={20} />
            )}
          </ChevronContainer>
        </TitleContainer>
        <DeleteButtonContainer onPress={handleDeleteEstimate}>
          <Icon name="delete" size={20} />
        </DeleteButtonContainer>
      </Header>
      {estimateInfoIsOpen && (
        <Body>
          <InfosContainer>
            <TextTitle>Type :</TextTitle>
            <Text>{estimate.type === 'estimate' ? 'Devis' : 'Facture'}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Catégorie :</TextTitle>
            <Text>{Category.name}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Prix total</TextTitle>
            <DisplayAnswers
              onPress={() => setAnswerDetailsIsOpen(!answerDetailsIsOpen)}
            >
              <DisplayAnswersText>Détails</DisplayAnswersText>
              <Icon name={answerDetailsIsOpen ? 'down' : 'right'} size={15} />
            </DisplayAnswers>
            <Text>{estimate.price}</Text>
          </InfosContainer>
          {answerDetailsIsOpen ? (
            <AnswerListWrapper>
              {Estimate_has_Answer.length > 0 &&
                Estimate_has_Answer.map((el) => (
                  <AnswerDetailContainer key={el.Answer.id}>
                    <Text>{el.Answer.content}</Text>
                    <Text>{el.Answer.price}</Text>
                  </AnswerDetailContainer>
                ))}
            </AnswerListWrapper>
          ) : null}
          <InfosContainer>
            <TextTitle>Nom du client :</TextTitle>
            <Text>{Customer.firstname + ' ' + Customer.lastname}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Catégorie :</TextTitle>
            <Text>{Category.name}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Mail du client :</TextTitle>
            <Text>{Customer.mail}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Numéro du client :</TextTitle>
            <Text>{Customer.phone}</Text>
          </InfosContainer>
          <ButtonWrapper>
            <Button
              onPress={() =>
                navigation.navigate('Création de devis', {
                  estimate: estimate,
                })
              }
            >
              <ButtonText>Modifier</ButtonText>
            </Button>
            <Button>
              <ButtonText>Voir</ButtonText>
            </Button>
            <Button>
              <ButtonText>Envoyer</ButtonText>
            </Button>
          </ButtonWrapper>
        </Body>
      )}
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  width: 100%;
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 1);
`;
const Header = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3%;
  background: #f092ff;
`;
const TitleContainer = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DisplayAnswers = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const AnswerListWrapper = styled.View`
  display: flex;
  border-bottom-width: 1px;
  padding: 10px 3%;
  border-bottom-color: rgba(31, 19, 0, 0.3);
`;
const AnswerDetailContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DisplayAnswersText = styled.Text``;

const ChevronContainer = styled.View``;
const Text = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
const InfosContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 10px 0;
  border-bottom-color: rgba(31, 19, 0, 0.3);
`;
const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;
const DeleteButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.View`
  background: #fdfdff;
  padding: 5% 3%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(31, 19, 0, 0.3);
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  justify-content: space-between;
`;
const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border: 1px solid #083d77;
  padding: 3%;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #083d77;
`;

export default EstimatesInfos;
