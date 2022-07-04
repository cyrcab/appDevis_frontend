import fetchAnswer from '../../../../helpers/api/fetchAnswer';
import fetchCustomer from '../../../../helpers/api/fetchCustomer';
import fetchEstimate from '../../../../helpers/api/fetchEstimate';

const handleFetchEstimate = async (customer, answerList, userId, estimate) => {
  try {
    const idCustomer = await fetchCustomer('CREATE', customer);
    const answerCount = await fetchAnswer('CREATE', [answerList], null, userId);
    const newEstimate = await fetchEstimate('CREATE', {
      ...estimate,
      customer_id: idCustomer.customer.id,
      price: answerList.reduce((acc, cur) => acc + cur.price, 0),
    });
    const newAnswers = await fetchAnswer(
      'GETLAST',
      null,
      null,
      null,
      null,
      null,
      answerCount.answer.count,
    );
    const answerIdList = newAnswers.answer.map((answer) => answer.id);
    const nbrJointure = await fetchAnswer(
      'CREATE_LINK',
      null,
      null,
      null,
      null,
      null,
      null,
      newEstimate.estimate.id,
      answerIdList,
    );
    if (nbrJointure.answer) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export default handleFetchEstimate;
