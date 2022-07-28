import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Entypo';

import { AxiosContext } from '../../context/AxiosContext';
import { UserContext } from '../../context/UserContext';
import displayAlertError from '../../helpers/Alert/errorAlert';

const OptionRender = ({
  option,
  setOptionList,
  optionList,
  setAddButtonIsPressed,
  packId,
}) => {
  const { authAxios } = useContext(AxiosContext);
  const { user } = useContext(UserContext);
  const [newOption, setNewOption] = useState({
    content: null,
    price_ht: null,
    user_id: user.id,
    pack_id: packId,
  });

  const handleDeleteOption = () => {
    if (option) {
      authAxios
        .delete(`/api/options/${option.id}`)
        .then((res) => res.data)
        .then((optionDeleted) =>
          setOptionList(optionList.filter((el) => el.id !== optionDeleted.id)),
        );
    } else {
      setAddButtonIsPressed(false);
    }
  };

  const handleAddOption = () => {
    if (!newOption.content) {
      displayAlertError("Merci de rentrer un nom d'option");
      return;
    }
    if (!newOption.price_ht) {
      displayAlertError('Merci de rentrer un prix');
      return;
    }
    authAxios
      .post('/api/options', {
        ...newOption,
        price_ht: parseFloat(newOption.price_ht),
      })
      .then((res) => {
        setOptionList(optionList.concat(res.data));
        setAddButtonIsPressed(false);
      })
      .catch((err) => displayAlertError(err));
  };

  return (
    <Main>
      <CrossContainer onPress={handleDeleteOption}>
        <Icon name="cross" size={30} color="rgba(31, 19, 0, 0.3)" />
      </CrossContainer>
      <Text>Nom de l'option</Text>
      <InputName
        placeholder="Nom de l'option"
        onChangeText={(text) => setNewOption({ ...newOption, content: text })}
        value={newOption.content}
      >
        {option && option.content}
      </InputName>
      <PriceWrapper>
        {option && (
          <PriceContainer>
            <Text>Prix TTC</Text>
            <InputPrice placeholder="Prix TTC de l'option">
              {option && option.price_ttc}
            </InputPrice>
          </PriceContainer>
        )}
        <PriceContainer>
          <Text>Prix HT</Text>
          <InputPrice
            placeholder="Prix HT de l'option"
            onChangeText={(text) =>
              setNewOption({ ...newOption, price_ht: text })
            }
            value={newOption.price_ht && newOption.price_ht.toString()}
            onSubmitEditing={handleAddOption}
          >
            {option && option.price_ht}
          </InputPrice>
        </PriceContainer>
      </PriceWrapper>
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 10px 20px;
  margin: 1% 0;
`;
const CrossContainer = styled.TouchableOpacity`
  align-self: flex-end;
`;
const InputName = styled.TextInput`
  margin: 2% 0;
  font-size: 15px;
  border: 1px solid #1f1300;
  padding: 2% 5%;
  font-weight: 600;
  border-radius: 5px;
`;
const InputPrice = styled.TextInput`
  font-size: 15px;
  border: 1px solid #1f1300;
  border-radius: 5px;
  padding: 2% 5%;
`;
const Text = styled.Text`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 15px;
`;
const PriceWrapper = styled.View``;
const PriceContainer = styled.View`
  margin: 2% 0;
`;

export default OptionRender;
