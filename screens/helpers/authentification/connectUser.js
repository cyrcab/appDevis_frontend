import auth from './auth';

const connectUser = async (mail, password) => {
  const errors = [];
  try {
    if (mail && password) {
      const credentials = {
        mail: mail,
        password: password,
      };
      const user = await auth(credentials);
      if (user) {
        return user;
      } else {
        const noUserError = {
          message: "Ce mail n'est pas utilisé",
          errorCode: 1,
        };
        errors.push(noUserError);
        return errors;
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
