import React, { useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CheckBox = ({ text, action }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (action) {
      action();
    }
  };

  return (
    <Main>
      <Text>{text}</Text>
      <CheckBoxInput onPress={handleCheck}>
        {isChecked ? (
          <Icon name="check" size={18} color="rgba(31, 19, 0, 0.8)" />
        ) : null}
      </CheckBoxInput>
    </Main>
  );
};

const Main = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 10px 20px;
  background: #fdfdff;
`;
const Text = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: rgba(31, 19, 0, 0.6);
`;
const CheckBoxInput = styled.TouchableOpacity`
  border: 2px solid rgba(31, 19, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
`;

export default CheckBox;
