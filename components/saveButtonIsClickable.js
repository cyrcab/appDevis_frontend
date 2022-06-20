const questionAreDifferent = (originalQuestion, newQuestion) => {
  if (
    originalQuestion.content !== newQuestion.content ||
    originalQuestion.has_multiple_choice !== newQuestion.has_multiple_choice ||
    originalQuestion.is_public !== newQuestion.is_public
  ) {
    return true;
  }
  return false;
};

const answerAreDifferent = (originalAnswer, newAnswer) => {
  if (
    originalAnswer.content !== newAnswer.content ||
    originalAnswer.price !== newAnswer.price ||
    originalAnswer.offer_id !== newAnswer.offer_id
  ) {
    return true;
  }
  return false;
};

export { questionAreDifferent, answerAreDifferent };
