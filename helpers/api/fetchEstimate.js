import axios from './axios.config';

const fetchEstimate = async (action, credentials, userName, estimateId) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let errors;
  let estimate;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message: 'Merci de rentrer une action valable (CREATE, DELETE, PUT, GET)',
    };
  }

  if (action === 'GET') {
    await axios
      .get('/api/estimates')
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'CREATE') {
    await axios
      .post('/api/estimates', { ...credentials })
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'DELETE') {
    await axios
      .delete(`/api/estimates/${credentials}`)
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await axios
      .put(`/api/estimates/${estimateId}`, { ...credentials })
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  }

  return { estimate, errors };
};

export default fetchEstimate;
