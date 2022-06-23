import React, { useState } from 'react';
import styled from 'styled-components/native';

const FormChoice = ({ actionLeft, actionRight, textLeft, textRight }) => {
  const [leftIsActive, setLeftIsActive] = useState(false);
  const [rightIsActive, setRightIsActive] = useState(false);

  return (
    <ButtonContainer>
      <Button
        onPress={() => {
          actionLeft();
          setLeftIsActive(true);
          setRightIsActive(false);
        }}
        isActive={leftIsActive}
      >
        <ButtonText isActive={leftIsActive}>{textLeft}</ButtonText>
      </Button>
      <Button
        onPress={() => {
          actionRight();
          setRightIsActive(true);
          setLeftIsActive(false);
        }}
        isActive={rightIsActive}
      >
        <ButtonText isActive={rightIsActive}>{textRight}</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.TouchableOpacity`
  width: 45%;
  border: 1px solid black;
  padding: 3%;
  background: ${(props) => (props.isActive ? '#083D77' : '#EFEFEF')};
`;
const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${(props) => (props.isActive ? '#EFEFEF' : '#1F1300')};
`;

export default FormChoice;
