import { useContext } from 'react';
import { AxiosContext } from '../../context/AxiosContext';

const FetchEstimate = async (action, credentials, userName, estimateId) => {
  const { authAxios } = useContext(AxiosContext);
  const acceptedAction = ['CREATE', 'PUT', 'DELETE', 'GET'];
  let errors;
  let estimate;

  if (acceptedAction.includes(action) === false) {
    errors = {
      message: 'Merci de rentrer une action valable (CREATE, DELETE, PUT, GET)',
    };
  }

  if (action === 'GET') {
    await authAxios
      .get('/api/estimates')
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'CREATE') {
    await authAxios
      .post('/api/estimates', { ...credentials })
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'DELETE') {
    await authAxios
      .delete(`/api/estimates/${credentials}`)
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  } else if (action === 'PUT') {
    await authAxios
      .put(`/api/estimates/${estimateId}`, { ...credentials })
      .then((response) => response.data)
      .then((data) => (estimate = data))
      .catch((err) => (errors = err));
  }

  return { estimate, errors };
};

export default FetchEstimate;
