import axios from './axios.config';

const fetchQuestion = async (
  action,
  credentials,
  userId,
  questionId,
  userName,
) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let question;
  let errors;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message:
        'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
    };
  }

  if (action === 'GET') {
    console.log('get all');
  } else if (action === 'CREATE') {
    await axios
      .post('/api/questions', credentials)
      .then((response) => response.data)
      .then((data) => (question = { ...data }))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await axios
      .put(`/api/questions/${questionId}`, {
        ...credentials,
        modified_by: userName,
      })
      .then((response) => response.data)
      .then((data) => (question = { ...data }))
      .catch((err) => (errors = err));
  } else {
    console.log('supprimer');
  }

  return { question, errors };
};

export default fetchQuestion;
