import { Alert } from 'react-native';

const displayAlertError = (error) => {
  return Alert.alert(
    'Une erreur est survenue',
    `Une erreur de type ${error}, l'action a été annulée`,
    [
      {
        text: 'Ok',
        onPress: () => {},
        style: 'cancel',
      },
    ],
  );
};

export default displayAlertError;
