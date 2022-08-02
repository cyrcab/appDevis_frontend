import { Alert, Platform } from 'react-native';

const displayAlertError = (error) => {
  // if (Platform.OS !== 'android' || Platform.OS !== 'ios') {
  //   console.log('web');
  // }

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
