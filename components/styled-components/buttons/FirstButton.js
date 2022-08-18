import React from 'react';
import styled from 'styled-components/native';

const FirstButton = ({ text, action, isClickable, style }) => {
  return (
    <Button
      isClickable={isClickable}
      onPress={isClickable ? action : null}
      activeOpacity={isClickable ? 0.2 : 1}
      style={style}
    >
      <ButtonText isClickable={isClickable}>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  background: ${(props) =>
    props.isClickable ? props.style.colorActive : props.style.colorInactive};
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => (props.isClickable ? '#EFEFEF' : '#1F1300')};
`;

export default FirstButton;
