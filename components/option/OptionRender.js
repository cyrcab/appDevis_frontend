import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';

import DuoButton from '../styled-components/buttons/DuoButton';

import Icon from 'react-native-vector-icons/Entypo';

import { UserContext } from '../../context/UserContext';
import { AxiosContext } from '../../context/AxiosContext';

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
    content: option ? option.content : null,
    price_ht: option ? option.price_ht : null,
    price_ttc: option ? option.price_ttc : null,
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
        pack_id: newOption.pack_id,
        price_ht: parseFloat(newOption.price_ht),
        content: newOption.content,
        user_id: newOption.user_id,
      })
      .then((res) => {
        setOptionList(optionList.concat(res.data));
        setAddButtonIsPressed(false);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateOption = () => {
    authAxios
      .put(`/api/options/${option.id}`, {
        content: newOption.content,
        price_ht: parseFloat(newOption.price_ht),
        user_id: user.id,
      })
      .then((res) => res.data)
      .then((optionUpdated) =>
        setNewOption({ ...newOption, ...optionUpdated }),
      );
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
      />
      <PriceWrapper>
        {option && (
          <PriceContainer>
            <Text>Prix TTC</Text>
            <InputPrice
              placeholder="Prix TTC de l'option"
              value={newOption.price_ttc}
            />
          </PriceContainer>
        )}
        <PriceContainer>
          <Text>Prix HT</Text>
          <InputPrice
            placeholder="Prix HT de l'option"
            onChangeText={(text) =>
              setNewOption({ ...newOption, price_ht: text })
            }
            value={newOption.price_ht}
          />
        </PriceContainer>
        <DuoButton
          textLeft="Annuler"
          textRight={option ? 'Modifier' : 'Créer'}
          actionLeft={() => setAddButtonIsPressed(false)}
          actionRight={() =>
            option ? handleUpdateOption() : handleAddOption()
          }
          righIsClickable={true}
        />
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
