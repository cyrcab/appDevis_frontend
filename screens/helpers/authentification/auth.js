import axios from '../axios.config';

const auth = async (credentials) => {
  let userDatas;
  let requestLoginErrors;
  await axios
    .post('/api/users/login', credentials)
    .then((response) => response.data)
    .then((data) => (userDatas = { ...data }))
    .catch((err) => (requestLoginErrors = { ...err }));

  return { userDatas, requestLoginErrors };
};

export default auth;
