import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import AddButton from '../styled-components/buttons/AddButton';
import fetchCategory from '../../helpers/api/fetchCategory';
import displayAlertError from '../../helpers/Alert/errorAlert';

const CategoryForm = ({ setListOfCategories, listOfCategories }) => {
  const user = useSelector((state) => state.auth);
  const { id } = user;
  const [buttonIsPressed, setButtonIsPressed] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: null,
  });

  const handleCreateCategory = async () => {
    const response = await fetchCategory('CREATE', newCategory, id);
    console.log(response);
    if (response.category) {
      setListOfCategories([...listOfCategories, response.category]);
      setNewCategory({ ...newCategory, name: '' });
      setButtonIsPressed(false);
    }
    if (response.errors) {
      displayAlertError(response.errors);
    }
  };

  return (
    <Main>
      <AddButton
        text="Ajouter une catégorie"
        action={() => setButtonIsPressed(!buttonIsPressed)}
      />
      {buttonIsPressed ? (
        <>
          <InputText
            autoFocus={true}
            placeholder="Nom de la catégorie"
            value={newCategory.name}
            onChangeText={(value) =>
              setNewCategory({ ...newCategory, name: value })
            }
          />
          <ButtonContainer>
            <ActionButton onPress={() => setButtonIsPressed(false)}>
              <TextCancel>Cancel</TextCancel>
            </ActionButton>
            <ActionButton
              onPress={newCategory.name ? handleCreateCategory : null}
            >
              <TextAdd>Ajouter</TextAdd>
            </ActionButton>
          </ButtonContainer>
        </>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  background: #fdfdff;
  box-shadow: 0px 10px 10px rgba(31, 19, 0, 0.1);
`;
const InputText = styled.TextInput`
  font-size: 18px;
  padding: 3%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(31, 19, 0, 0.1);
`;
const ButtonContainer = styled.View`
  diplay: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TextAdd = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #083d77;
`;
const TextCancel = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #ff4d42;
`;
const ActionButton = styled.TouchableOpacity`
  padding: 2% 5%;
`;

export default CategoryForm;
