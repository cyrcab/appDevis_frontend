import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../appDevis_frontend/context/AuthContext';
import { AxiosContext } from '../../../appDevis_frontend/context/AxiosContext';
import { saveItem } from '../../helpers/secureStore';
import displayAlertError from '../../helpers/Alert/errorAlert';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Login = ({ navigation }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const authContext = useContext(AuthContext);
  const { publicAxios } = useContext(AxiosContext);

  const handleLoginUser = async () => {
    try {
      const response = await publicAxios.post('/signin', {
        mail,
        password,
      });

      if (!response.data) {
        displayAlertError(response);
      }
      const { accessToken, refreshToken } = response.data;

      authContext.setAuthState({
        accessToken,
        refreshToken,
        authenticated: true,
      });

      saveItem(
        '_token',
        JSON.stringify({
          accessToken,
          refreshToken,
        }),
      );
    } catch (error) {
      displayAlertError(error.response);
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>
          Bonjour, Bienvenue sur l’application devis de Webgo
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>Adresse mail</Text>
        <TextInput
          onChangeText={setMail}
          value={mail}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        {errors.length > 0 && errors.some((e) => e.errorCode === 2) ? (
          <Text style={styles.errorText}>
            {errors.filter((el) => el.errorCode === 2)[0].message}
          </Text>
        ) : null}
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
        {errors.length > 0 && errors.some((e) => e.errorCode === 3) ? (
          <Text style={styles.errorText}>
            {errors.filter((el) => el.errorCode === 3)[0].message}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
        <Text style={styles.resetPass}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginUser}>
          <Text style={styles.textButton}>Connexion</Text>
        </TouchableOpacity>
        {errors.length > 0 &&
        errors.some((e) => e.errorCode !== 2 && e.errorCode !== 3) ? (
          <Text style={styles.errorText}>{errors[0].message}</Text>
        ) : null}
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
    borderRadius: 10,
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

  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Login;
