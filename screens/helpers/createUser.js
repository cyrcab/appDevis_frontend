import axios from './axios.config';

const createUser = async (credentials) => {
  // const generatedPass = Math.random().toString(36).slice(2);
  const generatedPass = 'password';
  let userDatas;
  let errors;

  await axios
    .post('/api/users', { ...credentials, password: generatedPass })
    .then((response) => response.data)
    .then((data) => (userDatas = { ...data }))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { userDatas, errors };
};

export default createUser;
