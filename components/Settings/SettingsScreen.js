import React, { useContext, useLayoutEffect } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';
import { ColorModeContext } from '../ColorMode/ColorMode';

const SettingsPage = ({ navigation }) => {
  const { isDarkMode, toggleColorMode } = useContext(ColorModeContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Paramètres',
      headerTitleStyle: {
        color: isDarkMode ? 'white' : 'black',
      },
    });
  }, [isDarkMode, navigation]);

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Paramètres</Text>
      <View style={isDarkMode ? styles.darkSetting : styles.lightSetting}>
        <Text style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{isDarkMode ? 'Mode sombre' : 'Mode clair'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleColorMode}
        />
      </View>
    </View>
  );
};

// Styles...
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
  lightSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#333333',
    height: '100%',
  },
  darkTitlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
    color: '#fff',
  },
  darkSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    color: '#fff',
  },
});

export default SettingsPage;
