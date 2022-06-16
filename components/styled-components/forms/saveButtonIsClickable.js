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

export default questionAreDifferent;
