import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import HomeScreen from './components/Home/HomeScreen';
import LoginScreen from './components/Login/LoginScreen';
import RegisterScreen from './components/Register/RegisterScreen';
import ProfileScreen from './components/Profile/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Connexion') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Inscription') {
              iconName = focused ? 'person-add' : 'person-add-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
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
        <Tab.Screen name="Connexion" component={LoginScreen} />
        <Tab.Screen name="Inscription" component={RegisterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
