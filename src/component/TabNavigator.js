// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';
import ButtonNew from './ButtonNew';
// import Login from "../telas/Login";
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
import FichaUsuario from '../telas/FichaUsuario';

// tab menu
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator
       
        screenOptions={{
          headerShown: false ,
          tabBarStyle: {
            backgroundColor: '#121212',
            borderTopColor: 'transparent'
          },
          tabBarActiveTintColor: '#FFF',
          paddingBottom: 5,
          paddingTop: 5,
        }}>
        <Tab.Screen
          name="Inicio"
          component={Home}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            )
          }}
        />
  
        <Tab.Screen
          name="Search"
          component={FichaUsuario}
          options={{
            tabBarLabel: 'Usuario',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" color={color} size={size} />
            )
          }}
        />
  
        <Tab.Screen
          name="Novo"
          component={FichaUsuario}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, color, size }) => (
              <ButtonNew size={size} focused={focused} />
            )
          }}
        />
  
        <Tab.Screen
          name="Registrar"
          component={Registrar}
          options={{
            tabBarLabel: 'Registro',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="notification" color={color} size={size} />
            )
          }}
        />
  
        <Tab.Screen
          name="Perfil"
          component={FichaUsuario}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )
          }}
        />
  
      </Tab.Navigator>
    );
  };