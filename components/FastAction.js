// besoin d'un lien, titre, logo
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FastAction = ({ navigation, title, link, logo }) => {
  return (
    <TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.logoContainer}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: 'black',
    width: 180,
    height: 150,
    marginVertical: 5,
    marginLeft: 20,
    borderRadius: 20,
  },
  logoContainer: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: '#083D77',
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FastAction;
