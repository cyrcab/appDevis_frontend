import React from 'react';
import styled from 'styled-components/native';

const CatListChoice = ({
  choices,
  setCategory,
  category,
  setSelectorIsOpen,
}) => {
  return (
    <Main>
      <List>
        {choices &&
          choices.map((el, i) => (
            <Choice
              key={i}
              onPress={() => {
                setCategory({ ...category, id: el.id, name: el.name });
                setSelectorIsOpen(false);
              }}
            >
              <ChoiceName key={el.id}>{el.name}</ChoiceName>
            </Choice>
          ))}
      </List>
    </Main>
  );
};

const Main = styled.View`
  padding: 3%;
`;
const Choice = styled.TouchableOpacity``;
const ChoiceName = styled.Text`
  text-align: center;
  font-size: 16px;
`;
const List = styled.ScrollView``;

export default CatListChoice;
