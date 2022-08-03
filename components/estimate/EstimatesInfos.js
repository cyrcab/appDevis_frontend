import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import axios from '../../helpers/api/axios.config';

const EstimatesInfos = ({ file, estimateList, setEstimateList }) => {
  const navigation = useNavigation();
  const { customer } = file;
  const [fileInfoOpen, setFileInfoOpen] = useState(false);
  const [packDetailsOpen, setPackDetailsOpen] = useState(false);

  const handleDeleteEstimate = () => {
    axios
      .delete(`/api/files/${file.id}`)
      .then((res) => res.data)
      .then((deletedFile) =>
        setEstimateList(estimateList.filter((el) => el.id !== deletedFile.id)),
      )
      .catch((err) => console.error(err));
  };

  return (
    <Main>
      <Header>
        <TitleContainer onPress={() => setFileInfoOpen(!fileInfoOpen)}>
          <Text>{customer.company} </Text>
          <ChevronContainer>
            {fileInfoOpen ? (
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
      {fileInfoOpen && (
        <Body>
          <InfosContainer>
            <TextTitle>Type :</TextTitle>
            <Text>{file.type === 'estimate' ? 'Devis' : 'Facture'}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Prix total</TextTitle>
            <DisplayAnswers
              onPress={() => setPackDetailsOpen(!packDetailsOpen)}
            >
              <DisplayAnswersText>Détails</DisplayAnswersText>
              <Icon name={packDetailsOpen ? 'down' : 'right'} size={15} />
            </DisplayAnswers>
            <Text>{file.price}</Text>
            <TextTitle>Nom du client :</TextTitle>
            <Text>{customer.firstname + ' ' + customer.lastname}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Mail du client :</TextTitle>
            <Text>{customer.mail}</Text>
          </InfosContainer>
          <InfosContainer>
            <TextTitle>Numéro du client :</TextTitle>
            <Text>{customer.phone}</Text>
          </InfosContainer>
          <ButtonWrapper>
            <Button
              onPress={() =>
                navigation.navigate('Création de devis', {
                  file: file,
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
