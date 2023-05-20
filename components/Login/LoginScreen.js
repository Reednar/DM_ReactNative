import React, { useState, useContext, useLayoutEffect } from 'react';
import { View, TextInput, StyleSheet, Button, Alert, Text } from 'react-native';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function LoginScreen({ navigation }) {
  const { isDarkMode } = useContext(ColorModeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Connexion',
      headerTitleStyle: {
        color: isDarkMode ? 'white' : 'black',
      },
    });
  }, [isDarkMode, navigation]);

  const handleSubmit = () => {
    if (email === '' || password === '') {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    Alert.alert('Succès', 'Vous êtes connecté');
    navigation.navigate('Accueil');
  };

  const onChangeEmail = (text) => {
    console.log(text)
    setEmail(text);
  };

  const onChangePassword = (text) => {
    console.log("C'est top secret")
    setPassword(text);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Connexion</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={isDarkMode ? styles.darkInput : styles.lightInput}
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={isDarkMode ? styles.darkInput : styles.lightInput}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePassword}
        />
        <Button title="Se connecter" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lightTitlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
  },
  lightInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#333333',
  },
  darkTitlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
    color: '#fff',
  },
  darkInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#fff',
  },
  formContainer: {
    width: '80%',
  },
});
