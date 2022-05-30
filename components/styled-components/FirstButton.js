import React from 'react';
import styled from 'styled-components/native';

const FirstButton = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background: #083d77;
  width: 30%;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #efefef;
`;

export default FirstButton;
