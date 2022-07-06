import fetchAnswer from '../../../../helpers/api/fetchAnswer';
import fetchCustomer from '../../../../helpers/api/fetchCustomer';
import fetchEstimate from '../../../../helpers/api/fetchEstimate';

export const handleFetchEstimate = async (
  customer,
  answerList,
  userId,
  estimate,
) => {
  try {
    const idCustomer = await fetchCustomer('CREATE', customer);
    const newEstimate = await fetchEstimate('CREATE', {
      ...estimate,
      customer_id: idCustomer.customer.id,
      price: answerList.reduce((acc, cur) => acc + cur.price, 0),
    });
    await answerList.forEach((answer) => {
      fetchAnswer(
        'CREATE',
        answer,
        null,
        userId,
        null,
        null,
        null,
        newEstimate.estimate.id,
      ).then((response) => {
        if (response.answer) {
          return true;
        } else {
          return false;
        }
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const fetchUpdateEstimate = async (
  answerList,
  userName,
  estimateId,
  userId,
) => {
  try {
    const newAnswers = answerList.filter((answer) => !answer.id);
    await newAnswers.forEach((answer) => {
      fetchAnswer(
        'CREATE',
        answer,
        null,
        userId,
        null,
        null,
        null,
        estimateId,
      ).then((response) => response);
    });
    await fetchEstimate(
      'PUT',
      {
        price: answerList.reduce((acc, cur) => acc + cur.price, 0),
      },
      userName,
      estimateId,
    )
      .then((response) => response.estimate)
      .then((estimate) => estimate);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
