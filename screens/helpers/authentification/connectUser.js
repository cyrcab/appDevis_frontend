import auth from './auth';

const connectUser = async (mail, password) => {
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
        console.log('erreur: Pas de compte avec cette adresse');
      }
    } else {
      console.log('merci de rentrer des infos dans les champs');
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectUser;
