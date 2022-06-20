import { Alert } from 'react-native';

const deleteConfirmation = (elemToDelete, action) => {
  let elemToDeleteInString;
  let elemToDeleteTitle;
  let elemToDeleteConfirmation;

  switch (elemToDelete) {
    case 'CATEGORY':
      elemToDeleteTitle = "d'une catégorie";
      elemToDeleteInString = 'une catégorie';
      elemToDeleteConfirmation = 'La catégorie';
      break;
    case 'QUESTION':
      elemToDeleteTitle = "d'une question";
      elemToDeleteInString = 'une question';
      elemToDeleteConfirmation = 'La question';
      break;
    case 'ANSWER':
      elemToDeleteTitle = "d'une réponse";
      elemToDeleteInString = 'une réponse';
      elemToDeleteConfirmation = 'La réponse';
      break;
    default:
      elemToDeleteTitle = "d'un élément";
      elemToDeleteInString = 'un élément inconnu';
      elemToDeleteConfirmation = 'inconnu';
      break;
  }

  return Alert.alert(
    `Suppression ${elemToDeleteTitle}`,
    `Vous êtes sur le point de supprimer ${elemToDeleteInString}, voulez-vous continuer ?`,
    [
      {
        text: 'Annuler',
        onPress: () =>
          Alert.alert(`${elemToDeleteConfirmation} n'as pas été supprimée`),
        style: 'cancel',
      },
      {
        text: 'Continuer',
        onPress: () => action(),
      },
    ],
  );
};

export default deleteConfirmation;
