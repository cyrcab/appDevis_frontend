import axios from '../axios.config';

const auth = async (credentials) => {
  let dataToReturn;
  await axios
    .post('/api/users/login', credentials)
    .then((response) => response.data)
    .then((data) => (dataToReturn = { ...data }))
    .catch((err) => err);

  return dataToReturn;
};

export default auth;
