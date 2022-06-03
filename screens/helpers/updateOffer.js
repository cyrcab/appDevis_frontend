import axios from './axios.config';

const updateOffer = async (id, dataToUpdate, userWhoUpdate) => {
  let offerDatas;
  let errors;

  // console.log(dataToUpdate);

  await axios
    .put(`/api/offers/${id}`, { ...dataToUpdate, modified_by: userWhoUpdate })
    .then((response) => response.data)
    .then((data) => (offerDatas = { ...data }))
    .catch((err) => err.response)
    .then((res) => (errors = res.data));

  return { offerDatas, errors };
};

export default updateOffer;
