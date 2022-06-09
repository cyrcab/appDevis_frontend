import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddingQuestion = () => {
  return (
    <Main>
      <Icon name="plus" size={20} />
      <Text>Ajouter une question</Text>
    </Main>
  );
};

const Main = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
const Text = styled.Text``;

export default AddingQuestion;
