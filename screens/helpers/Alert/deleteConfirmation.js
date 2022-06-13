import { Alert } from 'react-native';

const deleteConfirmation = (elemToDelete, action) => {
  let elemToDeleteInString;
  let elemToDeleteTitle;

  switch (elemToDelete) {
    case 'CATEGORY':
      elemToDeleteTitle = "d'une catégorie";
      elemToDeleteInString = 'une catégorie';
      break;
    default:
      elemToDeleteTitle = "d'un élément";
      elemToDeleteInString = 'un élément inconnu';
      break;
  }

  return Alert.alert(
    `Suppression ${elemToDeleteTitle}`,
    `Vous êtes sur le point de supprimer ${elemToDeleteInString}, voulez-vous continuer ?`,
    [
      {
        text: 'Annuler',
        onPress: () => Alert.alert("La catégorie n'as pas été supprimée"),
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
