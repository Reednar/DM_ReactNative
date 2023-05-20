import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, Button } from 'react-native';
import axios from 'axios';
import { ColorModeContext } from '../ColorMode/ColorMode';

export default function PokedexScreen({ navigation }) {
  const { isDarkMode } = useContext(ColorModeContext);
  const [pokemons, setPokemons] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Pokedex',
      headerTitleStyle: {
        color: isDarkMode ? 'white' : 'black',
      },
    });
  }, [isDarkMode, navigation]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`);
        setPokemons(response.data);
      } catch (error) {
        console.log('[error] fetchPokemon', error);
      }
    }
    fetchPokemon();
  }, []);

  const closeModal = () => {
    setVisible(false);
    setSelectedPokemon(null);
  }

  return (
    <>
      {selectedPokemon && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={!visible}
          onRequestClose={closeModal}
        >
          <View style={styles.modal}>
            <View style={isDarkMode ? styles.darkBackgroundModal : styles.lightBackgroundModal}>
              <Text style={styles.title}>{selectedPokemon.name}</Text>
              <View style={styles.modalContent}>
                <Image
                  style={styles.pokemonImage}
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.url.split('/')[6]}.png` }}
                />
                <Image
                  style={styles.pokemonImage}
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${selectedPokemon.url.split('/')[6]}.png` }}
                />
              </View>
              <Button title="Fermer" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
      <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
        <Text style={isDarkMode ? styles.darkTitlePage : styles.lightTitlePage}>Pokedex</Text>
        <FlatList
          style={isDarkMode ? styles.darkFlatList : styles.lightFlatList}
          data={pokemons.results}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedPokemon(item)} style={isDarkMode ? styles.darkCard : styles.lightCard}>
              <Text style={styles.NamePokemon}>{item.name}</Text>
              <View style={styles.pokemonImagesContainer}>
                <Image
                  style={styles.pokemonImage}
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.url.split('/')[6]}.png` }}
                />
                <Image
                  style={styles.pokemonImage}
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${item.url.split('/')[6]}.png` }}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </>
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
  darkFlatList: {
    backgroundColor: '#333333',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkBackgroundModal: {
    backgroundColor: '#333555',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  lightBackgroundModal: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  NamePokemon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightCard: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  darkCard: {
    backgroundColor: '#333555',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  pokemonImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  pokemonImage: {
    width: 128,
    height: 128,
    borderRadius: 32,
    margin: 5,
  },
});
