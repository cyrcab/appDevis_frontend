import axios from './axios.config';

const fetchOffer = async (action, credentials, userId, offerId, userName) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let offer;
  let errors;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message:
        'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
    };
  }

  if (action === 'GET') {
    await axios
      .get(`/api/offers/`)
      .then((response) => response.data)
      .then((data) => (offer = data))
      .catch((err) => (errors = err));
  } else if (action === 'CREATE') {
    await axios
      .post('/api/offers', { ...credentials, user_id: userId })
      .then((response) => response.data)
      .then((data) => (offer = data))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await axios
      .put(`/api/offers/${questionId}`, {
        ...credentials,
        modified_by: userName,
      })
      .then((response) => response.data)
      .then((data) => (offer = { ...data }))
      .catch((err) => (errors = err));
  } else {
    await axios
      .delete(`/api/offers/${questionId}`)
      .then((response) => response.data)
      .then((data) => (offer = { ...data }))
      .catch((err) => (errors = err));
  }

  return {
    offer,
    errors,
  };
};

export default fetchOffer;
