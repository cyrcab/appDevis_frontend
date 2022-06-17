import axios from './axios.config';

const fetchAnswer = async (
  action,
  credentials,
  answerId,
  userId,
  questionId,
  userName,
) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let answer;
  let errors;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message:
        'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
    };
  }

  if (action === 'GET') {
    await axios
      .get(`/api/questions/${questionId}/answers`)
      .then((response) => response.data)
      .then((data) => (answer = data))
      .catch((err) => (errors = err));
  } else if (action === 'CREATE') {
    await axios
      .post('/api/answers', { ...credentials, user_id: userId })
      .then((response) => response.data)
      .then((data) => (answer = data))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await axios
      .put(`/api/answers/${questionId}`, {
        ...credentials,
        modified_by: userName,
      })
      .then((response) => response.data)
      .then((data) => (answer = { ...data }))
      .catch((err) => (errors = err));
  } else {
    await axios
      .delete(`/api/answers/${answerId}`)
      .then((response) => response.data)
      .then((data) => (answer = { ...data }))
      .catch((err) => (errors = err));
  }

  return { answer, errors };
};

export default fetchAnswer;
