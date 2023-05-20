import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import HomeScreen from './components/Home/HomeScreen';
import LoginScreen from './components/Login/LoginScreen';
import RegisterScreen from './components/Register/RegisterScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import PokedexScreen from './components/Pokedex/PokedexScreen';
import SettingsScreen from './components/Settings/SettingsScreen';
import BasketScreen from './components/Basket/BasketScreen';
import { ColorModeContext, ColorMode } from './components/ColorMode/ColorMode';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <ColorMode>
      <NavigationContainer theme={CustomTheme}>
        <ColorModeContext.Consumer>
          {(value) => (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Accueil') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Connexion') {
                    iconName = focused ? 'log-in' : 'log-in-outline';
                  } else if (route.name === 'Inscription') {
                    iconName = focused ? 'person-add' : 'person-add-outline';
                  } else if (route.name === 'Profil') {
                    iconName = focused ? 'person' : 'person-outline';
                  } else if (route.name === 'Pokedex') {
                    iconName = focused ? 'list' : 'list-outline';
                  } else if (route.name === 'Paramètres') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarStyle: {
                  backgroundColor: value.isDarkMode ? 'black' : 'white',
                },
                tabBarLabelStyle: {
                  color: value.isDarkMode ? 'white' : 'black',
                },

                tabBarActiveTintColor: value.isDarkMode ? 'tomato' : 'blue',
                tabBarInactiveTintColor: value.isDarkMode ? 'gray' : 'black',
                headerRight: () => {
                  const navigation = useNavigation();
                  return (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons.Button
                        name="moon"
                        size={30}
                        backgroundColor="transparent"
                        color={value.isDarkMode ? 'white' : 'black'}
                        onPress={value.toggleColorMode}
                      />
                      <Ionicons.Button
                        name="basket"
                        size={30}
                        backgroundColor="transparent"
                        color={value.isDarkMode ? 'white' : 'black'}
                        onPress={() => {
                          navigation.navigate('Panier');
                        }}
                      />
                      <Badge style={{ position: 'absolute', top: 10, right: 10 }}>3</Badge>
                    </View>
                  )
                },
                // Change la couleur du header
                headerStyle: {
                  backgroundColor: value.isDarkMode ? 'black' : 'white',
                },
              })}
            >
              <Tab.Screen name="Accueil" component={HomeScreen} />
              <Tab.Screen name="Pokedex" component={PokedexScreen} />
              <Tab.Screen
                name="Profil"
                component={ProfileScreen}
                initialParams={{
                  avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
                  firstname: "John",
                  lastname: "Doe",
                  localisation: "Paris, France",
                  metier: "Développeur"
                }}
              />
              <Tab.Screen name="Paramètres" component={SettingsScreen} />
              <Tab.Screen name="Connexion" component={LoginScreen} />
              <Tab.Screen name="Inscription" component={RegisterScreen} />
              <Tab.Screen name="Panier" component={BasketScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            </Tab.Navigator>
          )}
        </ColorModeContext.Consumer>
      </NavigationContainer>
    </ColorMode>
  );
}

const CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    text: '#000',
  },
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
