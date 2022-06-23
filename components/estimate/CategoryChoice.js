import React from 'react';
import styled from 'styled-components/native';

const CategoryChoice = () => {
  return (
    <Main>
      <Button>
        <ButtonText>Choisir une catégorie</ButtonText>
      </Button>
    </Main>
  );
};

const Main = styled.View``;
const Button = styled.TouchableOpacity``;
const ButtonText = styled.Text``;
const CategoryLabelList = styled.View``;

export default CategoryChoice;
