import React, { useContext, useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function ProfileScreen({ route, navigation }) {
  const { isDarkMode } = useContext(ColorModeContext);
  const { avatar, firstname, lastname, localisation, metier } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profil',
      headerTitleStyle: {
        color: isDarkMode ? 'white' : 'black',
      },
    });
  }, [isDarkMode, navigation]);

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Profil</Text>
      <Image
        style={styles.avatar}
        source={{ uri: avatar }}
      />
      <Text style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{firstname} {lastname}</Text>
      <Text style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{localisation}</Text>
      <Text style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{metier}</Text>
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
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
});
