import axios from './axios.config';

const createUser = (credentials) => {
  const generatedPass = Math.random().toString(36).slice(2);
  let userDatas;
  let errors;

  console.log(generatedPass);

  axios
    .post('/api/users', { ...credentials, password: generatedPass })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((data) => (userDatas = { ...data, password: generatedPass }))
    .catch((err) => (errors = { ...err }));

  return { userDatas, errors };
};

export default createUser;
