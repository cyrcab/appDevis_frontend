import React from 'react';
import styled from 'styled-components/native';

const FirstButton = ({ text, action, isClickable }) => {
  return (
    <Button
      isClickable={isClickable}
      onPress={isClickable ? action : null}
      activeOpacity={isClickable ? 0.2 : 1}
    >
      <ButtonText isClickable={isClickable}>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  background: ${(props) => (props.isClickable ? '#083D77' : '#EFEFEF')};
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 5px 5px rgba(31, 19, 0, 0.5);
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.isClickable ? '#EFEFEF' : '#1F1300')};
`;

export default FirstButton;
