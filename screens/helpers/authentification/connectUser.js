import auth from './auth';

const connectUser = async (mail, password) => {
  const errors = [];
  try {
    if (mail && password) {
      const credentials = {
        mail: mail,
        password: password,
      };
      const { userDatas, requestLoginErrors } = await auth(credentials);
      if (requestLoginErrors) {
        console.log(requestLoginErrors);
        errors.push(requestLoginErrors.response.data);
        return errors;
      }
      if (userDatas) {
        return userDatas;
      }
    } else {
      if (!mail) {
        const noMailInput = {
          message: 'Merci de rentrer une adresse mail valide',
          errorCode: 2,
        };
        errors.push(noMailInput);
      }
      if (!password) {
        const noPassInput = {
          message: 'Merci de rentrer un mot de passe valide',
          errorCode: 3,
        };
        errors.push(noPassInput);
      }
      return errors;
    }
  } catch (error) {
    const functionError = {
      message: error.message,
      errorCode: 4,
    };
    errors.push(functionError);
    return errors;
  }
};

export default connectUser;
