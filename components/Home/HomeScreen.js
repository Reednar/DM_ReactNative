import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useContext(ColorModeContext);
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Accueil',
      headerTitleStyle: {
        color: isDarkMode ? 'white' : 'black',
      },
    });
  }, [isDarkMode, navigation]);

  useEffect(() => {
    const visit = navigation.addListener('focus', () => {
      setCount((prevCount) => prevCount + 1);
    });

    return visit;
  }, []);

  const printCharacter = () => {
    const req = axios.get(`https://rickandmortyapi.com/api/character`);
    req.then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 404) {
        console.log("Not found");
        return 404;
      }
    });
  }

  const deleteCharacter = () => {
    setData({});
  }

  const printDeLespace = () => {
    const req = axios.get(`https://images-api.nasa.gov/search?q=andromeda`);
    req.then((res) => {
      setData2(res.data);
      console.log(res.data);
      if (res.data.status === 200) {
        console.log("Success");
        return 200;
      }
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 404) {
        console.log("Not found");
        return 404;
      }
    });
  }

  const deleteDeLespace = () => {
    setData2({});
  }

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Accueil</Text>
      <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Nombre de fois que vous êtes passé sur cette page : {count}</Text>
      <TouchableOpacity onPress={printCharacter} style={isDarkMode ? styles.darkTouchableOpacity : styles.lightTouchableOpacity}>
        <Text style={isDarkMode ? styles.darkTouchableOpacityText : styles.lightTouchableOpacityText}>Print character</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteCharacter} style={isDarkMode ? styles.darkTouchableOpacity : styles.lightTouchableOpacity}>
        <Text style={isDarkMode ? styles.darkTouchableOpacityText : styles.lightTouchableOpacityText}>Delete character</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={printDeLespace} style={isDarkMode ? styles.darkTouchableOpacity : styles.lightTouchableOpacity}>
        <Text style={isDarkMode ? styles.darkTouchableOpacityText : styles.lightTouchableOpacityText}>Print l'espace</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteDeLespace} style={isDarkMode ? styles.darkTouchableOpacity : styles.lightTouchableOpacity}>
        <Text style={isDarkMode ? styles.darkTouchableOpacityText : styles.lightTouchableOpacityText}>Delete l'espace</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
          {data && data.results && data.results.map((character, index) => (
            <>
              <Text key={index} style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{character.name}</Text>
              <Image
                style={{ width: 64, height: 64, borderRadius: 32 }}
                source={{ uri: character.image }}
              />
            </>
          ))}
          {data2 && data2.collection && data2.collection.items && data2.collection.items.map((item, index) => (
            <>
              <Text key={index} style={isDarkMode ? { color: '#fff' } : { color: '#000' }}>{item.data[0].title}</Text>
              {item.links && item.links.map((link, index) => (
                <Image
                  key={index}
                  style={{ width: 200, height: 200, borderRadius: 32 }}
                  source={{ uri: link.href }}
                />
              ))}
            </>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
    justifyContent: 'center',
    backgroundColor: '#333333',
    width: '100%',
  },
  darkTitlePage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32,
    color: '#fff',
  },
  darkTouchableOpacity: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  lightTouchableOpacity: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  darkTouchableOpacityText: {
    color: '#fff',
  },
  lightTouchableOpacityText: {
    color: '#fff',
  },
});
