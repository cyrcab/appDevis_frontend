import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastAction from './FastAction';

const FastActionList = () => {
  return (
    <View style={styles.main}>
      <FastAction
        title="Liste des devis"
        logo="th-list"
        link="Liste des devis"
      />
      <FastAction title="Faire un devis" logo="plus" link="Création de devis" />
      <FastAction
        title="Liste des catégories"
        logo="flask"
        link="Liste des catégories"
      />
      <FastAction
        title="Liste des offres"
        logo="database"
        link="Liste des offres"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
});

export default FastActionList;
