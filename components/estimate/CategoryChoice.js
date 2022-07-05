import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

import fetchCategory from '../../helpers/api/fetchCategory';
import CatListChoice from './CatListChoice';

const CategoryChoice = ({ estimate, setEstimate }) => {
  const [listChoice, setListChoice] = useState([]);
  const [selectorIsOpen, setSelectorIsOpen] = useState(false);
  const [category, setCategory] = useState({
    id: null,
    name: null,
  });

  useEffect(() => {
    fetchCategory('GET')
      .then((response) => setListChoice(response.category))
      .catch((err) => console.log(err));
    if (estimate.category_id) {
      setCategory({
        id: estimate.category_id,
        name: estimate.Category.name,
      });
    }
  }, [estimate]);

  // useEffect(() => {
  //   setEstimate({ ...estimate, category_id: category.id });
  // }, [category]);

  return (
    <Main>
      <Button onPress={() => setSelectorIsOpen(!selectorIsOpen)}>
        <ButtonText>
          {category.name !== null ? category.name : 'Choisir une catégorie'}
        </ButtonText>
        <Icon name="chevron-down" size={30} color="rgba(31, 19, 0, 0.6)" />
      </Button>
      {selectorIsOpen ? (
        <CategoryLabelList>
          <CatListChoice
            choices={listChoice}
            setCategory={setCategory}
            category={category}
            setSelectorIsOpen={setSelectorIsOpen}
          />
        </CategoryLabelList>
      ) : null}
    </Main>
  );
};

const Main = styled.View`
  border: 1px solid rgba(31, 19, 0, 0.3);
  padding: 10px 20px;
  background: #fdfdff;
`;
const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: rgba(31, 19, 0, 0.6);
`;
const CategoryLabelList = styled.View`
  margin-top: 2%;
`;

export default CategoryChoice;
