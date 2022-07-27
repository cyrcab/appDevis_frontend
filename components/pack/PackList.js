import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import PackRender from './PackRender';
import Icon from 'react-native-vector-icons/AntDesign';
import displayAlertError from '../../helpers/Alert/errorAlert';

import { AxiosContext } from '../../context/AxiosContext';
import { UserContext } from '../../context/UserContext';

import AddButton from '../styled-components/buttons/AddButton';

const PackList = ({ list, setList }) => {
  const { authAxios } = useContext(AxiosContext);
  const { user } = useContext(UserContext);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);
  const [packName, setPackName] = useState(null);

  const fetchPackCreation = async () => {
    if (packName === null) {
      setAddButtonIsPressed(false);
      return;
    }

    authAxios
      .post('/api/packs', {
        name: packName,
        user_id: user.id,
      })
      .then((res) => res.data)
      .then((newPack) => {
        setList(list.concat(newPack));
        setAddButtonIsPressed(false);
        setPackName(null);
      })
      .catch((error) => displayAlertError(error));
  };

  return (
    <ListContainer>
      {list &&
        list.map((el) => (
          <PackRender pack={el} key={el.id} setList={setList} list={list} />
        ))}
      {addButtonIsPressed ? (
        <ButtonContainer>
          <Input onChangeText={(text) => setPackName(text)} />
          <BoxConfirm onPress={fetchPackCreation}>
            <Icon name="check" size={30} />
          </BoxConfirm>
        </ButtonContainer>
      ) : (
        <AddButton
          text="Ajouter un pack"
          action={() => {
            setAddButtonIsPressed(true);
          }}
        />
      )}
    </ListContainer>
  );
};

const ListContainer = styled.View``;
const Input = styled.TextInput`
  padding: 3%;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
  width: 85%;
`;
const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const BoxConfirm = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  padding: 1%;
  border: 1px solid black;
  border-radius: 5px;
`;

export default PackList;
