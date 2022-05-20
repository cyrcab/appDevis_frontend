import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import FastAction from '../components/FastAction';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>This is the Home Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Paramaters page</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Compte')}>
          <Text>Compte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Paramètres')}>
          <Text>Paramètres</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.fastActionContainer}>
        <Text>Actions rapides</Text>
        <FastAction title="List des devis" />
        <FastAction title="Faire un devis" />
        <FastAction title="Liste des catégories" />
        <FastAction title="Liste des offres" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fastActionContainer: {
    marginTop: 40,
  },
});

export default Home;
