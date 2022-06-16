import React from 'react';
import styled from 'styled-components/native';

const DuoButton = ({
  textLeft,
  textRight,
  actionLeft,
  actionRight,
  righIsClickable,
}) => {
  return (
    <Main>
      <LeftButton onPress={actionLeft}>
        <TextLeft>{textLeft}</TextLeft>
      </LeftButton>
      <RightButton
        onPress={actionRight}
        isClickable={righIsClickable}
        activeOpacity={righIsClickable ? 0.2 : 1}
      >
        <TextRight isClickable={righIsClickable}>{textRight}</TextRight>
      </RightButton>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LeftButton = styled.TouchableOpacity`
  border: 1px solid #ff4d42;
  width: 49%;
  padding: 2%;
`;
const TextLeft = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #ff4d42;
  font-weight: 500;
`;
const RightButton = styled.TouchableOpacity`
  border: ${(props) =>
    props.isClickable ? '1px solid #083d77' : '1px solid rgba(31, 19, 0, 0.3)'}
  width: 49%;
  padding: 2%;
`;
const TextRight = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.isClickable ? '#083d77' : 'rgba(31, 19, 0, 0.3)')}
  font-weight: 500;
`;

export default DuoButton;
