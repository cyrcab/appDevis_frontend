import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import Icon from 'react-native-vector-icons/AntDesign';

import { AxiosContext } from '../../context/AxiosContext';

const EstimatesInfos = ({ file, estimateList, setEstimateList }) => {
  const { authAxios } = useContext(AxiosContext);
  const navigation = useNavigation();
  const { customer } = file;
  const [fileInfoOpen, setFileInfoOpen] = useState(false);

  const handleDeleteEstimate = () => {
    authAxios
      .delete(`/api/files/${file.id}`)
      .then((res) => res.data)
      .then((deletedFile) =>
        setEstimateList(estimateList.filter((el) => el.id !== deletedFile.id)),
      )
      .catch((err) => console.error(err));
  };

  const handleSeePdf = async () => {
    await authAxios.post('/upload-pdf', file);
    await WebBrowser.openBrowserAsync(
      'https://app-devis-test.herokuapp.com/test.pdf',
    );
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
            <TextTitle>Prix total :</TextTitle>
            <Text>{file.price_ht} € / HT</Text>
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
            <Button onPress={handleSeePdf}>
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

const Main = styled.View``;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3%;
  background: #fdfdff;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: rgba(31, 19, 0, 0.3);
`;
const TitleContainer = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const ChevronContainer = styled.View``;
const Text = styled.Text`
  font-size: 18px;
  font-weight: 400;
`;
const InfosContainer = styled.View`
  display: flex;
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
  margin-top: 2%;
  flex-direction: row;
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
