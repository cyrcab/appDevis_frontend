import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import displayAlertError from '../../helpers/Alert/errorAlert';
import AddButton from '../styled-components/buttons/AddButton';

import { AxiosContext } from '../../context/AxiosContext';
import { UserContext } from '../../context/UserContext';
import OptionRender from './OptionRender';

const OptionList = ({ pack }) => {
  const { authAxios } = useContext(AxiosContext);
  const [optionList, setOptionList] = useState([]);
  const [addButtonIsPressed, setAddButtonIsPressed] = useState(false);

  useEffect(() => {
    authAxios
      .get(`/api/packs/${pack.id}`)
      .then((res) => res.data)
      .then((data) => setOptionList(data.option))
      .catch((err) => displayAlertError(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <Title>Liste des options</Title>
      <ListContainer>
        {optionList &&
          optionList.map((el) => (
            <OptionRender
              key={el.id}
              option={el}
              packId={pack.id}
              optionList={optionList}
              setOptionList={setOptionList}
              setAddButtonIsPressed={setAddButtonIsPressed}
            />
          ))}
      </ListContainer>
      {addButtonIsPressed ? (
        <OptionRender
          setAddButtonIsPressed={setAddButtonIsPressed}
          optionList={optionList}
          packId={pack.id}
          setOptionList={setOptionList}
        />
      ) : (
        <AddButton
          text="Ajouter une option"
          action={() => setAddButtonIsPressed(true)}
        />
      )}
    </Main>
  );
};

const Main = styled.View``;
const Title = styled.Text`
  text-align: center;
  font-size: 18px;
`;
const ListContainer = styled.View``;

export default OptionList;
