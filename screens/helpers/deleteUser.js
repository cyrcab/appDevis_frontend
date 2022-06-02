import axios from './axios.config';

const deleteUser = async (userId) => {
  let userDatas;
  let errors;

  await axios
    .delete(`/api/users/${userId}`)
    .then((response) => response.data)
    .then((data) => (userDatas = { ...data }))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { userDatas, errors };
};

export default deleteUser;
