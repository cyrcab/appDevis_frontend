import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONNECT } from '../../features/userSlice';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const connectUser = () => {
    if (userName && password) {
      dispatch(
        CONNECT({
          userName,
          isConnected: true,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Bonjour, Bienvenue sur l’application devis de Webgo
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>User</Text>
        <TextInput
          onChangeText={setUserName}
          value={userName}
          clearButtonMode="while-editing"
          style={styles.input}
        />
      </View>
      <View style={[styles.inputContainer, styles.mdpInput]}>
        <Text style={styles.textInput}>Mot de passe</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          textContentType="password"
          secureTextEntry={true}
          clearButtonMode="while-editing"
          style={[styles.input, styles.inputBottom]}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
        <Text style={styles.resetPass}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={connectUser}>
          <Text style={styles.textButton}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EEEFF5',
  },
  header: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 50,
  },

  // style des inputs
  textInput: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  mdpInput: {
    marginTop: 20,
  },
  inputContainer: {
    paddingHorizontal: 30,
  },

  resetPass: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '700',
  },

  // style du button
  button: {
    marginTop: 30,
    backgroundColor: '#083D77',
    borderRadius: 50,
  },
  buttonContainer: {
    paddingHorizontal: 80,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    padding: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Login;
