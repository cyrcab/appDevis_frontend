import axios from './axios.config';

const fetchCategory = async (action, credentials, userId) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let category;
  let errors;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message:
        'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
    };
  }

  if (action === 'GET') {
    await axios
      .get('/api/categories')
      .then((response) => response.data)
      .then((data) => (category = data))
      .catch((err) => (errors = err));
  }

  // switch (action) {
  //   case 'CREATE':
  //     await axios
  //       .post('/api/categories', { ...credentials, user_id: userId })
  //       .then((response) => response.data)
  //       .then((data) => (category = { ...data }))
  //       .catch((err) => (errors = err));
  //     break;

  //   default:
  //     errors = {
  //       message:
  //         'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
  //     };
  //     break;
  // }

  return { category, errors };
};

export default fetchCategory;
