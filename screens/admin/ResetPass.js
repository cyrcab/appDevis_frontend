import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ResetPass = () => {
  const [emailToReset, setEmailToReset] = useState('');
  const [isMailSend, setIsMailSend] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Rentrez votre mail ici : </Text>
        <TextInput
          value={emailToReset}
          style={styles.input}
          onChangeText={setEmailToReset}
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.buttonContaier}>
        <TouchableOpacity onPress={() => setIsMailSend(true)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </View>
        </TouchableOpacity>
      </View>

      {isMailSend ? (
        <Text style={styles.textValidation}>
          Un lien pour réinitialiser votre mot de passe vous a été envoyé
        </Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEEFF5',
  },

  // input style
  textInput: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    fontSize: 30,
    padding: 5,
    backgroundColor: 'white',
  },
  inputContainer: {
    paddingHorizontal: 30,
  },

  // style bouton pour reset le mot de passe
  button: {
    backgroundColor: '#083D77',
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttonContaier: {
    paddingHorizontal: 60,
  },

  // text validation
  textValidation: {
    textAlign: 'center',
    marginTop: 20,
    padding: 10,
    color: 'green',
  },
});

export default ResetPass;
