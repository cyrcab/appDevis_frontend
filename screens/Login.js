import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text>Bonjour, Bienvenue sur l’application devis de Webgo</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>User</Text>
        <TextInput onChangeText={() => {}} value="" style={styles.input} />
        <Text>Mot de passe</Text>
        <TextInput
          onChangeText={() => {}}
          value=""
          style={[styles.input, styles.inputBottom]}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Connexion"
            color="white"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  inputContainer: {
    padding: 30,
  },
  buttonContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
});

export default Login;
