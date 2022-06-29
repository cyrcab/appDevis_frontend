import axios from './axios.config';

const fetchCustomer = async (action, credentials, userId, userName) => {
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];

  if (acceptedAction.includes(action) === false) {
    errors = {
      message:
        'Merci de rentrer une action valable (CREATE, DELETE, UPDATE, GET)',
    };
  }

  let customer;
  let errors;

  if (action === 'GET') {
    await axios
      .get(`/api/customer`)
      .then((response) => response.data)
      .then((data) => (customer = data))
      .catch((err) => (errors = err));
  } else if (action === 'CREATE') {
    await axios
      .post('/api/customer', { ...credentials, user_id: userId })
      .then((response) => response.data)
      .then((data) => (customer = { ...data }))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await axios
      .put(`/api/customer/`, {
        ...credentials,
        modified_by: userName,
      })
      .then((response) => response.data)
      .then((data) => (customer = { ...data }))
      .catch((err) => (errors = err));
  } else {
    await axios
      .delete(`/api/customer/${customer}`)
      .then((response) => response.data)
      .then((data) => (customer = { ...data }))
      .catch((err) => (errors = err));
  }

  return { customer, errors };
};

export default fetchCustomer;
