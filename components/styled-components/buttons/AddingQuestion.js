import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddingQuestion = ({ action }) => {
  return (
    <Main onPress={action}>
      <ContentContainer>
        <Icon name="plus" size={20} />
        <Text>Ajouter une question</Text>
      </ContentContainer>
    </Main>
  );
};

const Main = styled.TouchableOpacity`
`;
const Text = styled.Text`
  font-size: 15px;
`;
const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;
export default AddingQuestion;
