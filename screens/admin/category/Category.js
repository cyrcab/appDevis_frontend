import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import QuestionList from '../../../components/category/QuestionList';
import QuestionForm from '../../../components/styled-components/forms/QuestionForm';
import AddingQuestion from '../../../components/styled-components/buttons/AddingQuestion';
import fetchQuestion from '../../helpers/api/fetchQuestion';

const Category = ({ route }) => {
  const { id: categoryId } = route.params;

  const [addingQuestionIsPressed, setAddingQuestionIsPressed] = useState(false);
  const [listOfQuestion, setListOfQuestion] = useState([]);

  useEffect(() => {
    fetchQuestion('GET', null, null, categoryId)
      .then((response) => response.question)
      .then((question) => setListOfQuestion(question))
      .catch((err) => err);
  }, []);

  return (
    <Main>
      <ListContainer>
        <QuestionSection>
          <QuestionList
            listOfQuestion={listOfQuestion}
            setListOfQuestion={setListOfQuestion}
          />
        </QuestionSection>
        {addingQuestionIsPressed ? (
          <QuestionFormContainer>
            <QuestionForm
              isDeletable={false}
              setAddingQuestionIsPressed={setAddingQuestionIsPressed}
              categoryId={categoryId}
              listOfQuestion={listOfQuestion}
              setListOfQuestion={setListOfQuestion}
            />
          </QuestionFormContainer>
        ) : (
          <ButtonWrapper>
            <AddingQuestion
              action={() =>
                setAddingQuestionIsPressed(!addingQuestionIsPressed)
              }
            />
          </ButtonWrapper>
        )}
      </ListContainer>
    </Main>
  );
};

const Main = styled.ScrollView`
  background: #e5e5e5;
  height: 100%;
`;

const ListContainer = styled.View`
  background: #e5e5e5;
  display: flex;
  align-items: center;
`;
const QuestionFormContainer = styled.View`
  width: 95%;
`;
const QuestionSection = styled.View`
  display: flex;
  align-items: center;
  margin-top: 3%;
`;
const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  margin: 3% 0 5% 0;
`;

export default Category;
