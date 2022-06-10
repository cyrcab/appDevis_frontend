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

const updateOffer = async (id, dataToUpdate, userWhoUpdate) => {
  let offerDatas;
  let errors;

  await axios
    .put(`/api/offers/${id}`, { ...dataToUpdate, modified_by: userWhoUpdate })
    .then((response) => response.data)
    .then((data) => (offerDatas = { ...data }))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { offerDatas, errors };
};

const getAllOffers = async () => {
  let offerDatas = [];
  let errors;

  await axios
    .get('/api/offers/')
    .then((response) => response.data)
    .then((data) => (offerDatas = data))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { offerDatas, errors };
};

const createOffer = async (credentials, userId) => {
  let offers;
  let errors;

  await axios
    .post('/api/offers', { ...credentials, user_id: userId })
    .then((response) => response.data)
    .then((data) => (offers = { ...data }))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { offers, errors };
};

const getAllCategories = async () => {
  let categories = [];
  let errors;

  await axios
    .get('/api/categories')
    .then((response) => response.data)
    .then((data) => (categories = data))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { categories, errors };
};

export {
  createUser,
  deleteUser,
  updateOffer,
  createOffer,
  getAllCategories,
  getAllOffers,
};
