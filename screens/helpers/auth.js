import axios from './axios.config';

const auth = async (userName, password) => {
  axios
    .get('/api/users')
    .then((response) => response.data)
    .then((data) => console.log(data))
    .catch((err) => console.log({ ...err }));
};

export default auth;
