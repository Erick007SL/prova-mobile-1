// StackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../telas/Login";
import Registrar from "../telas/Registrar";
import Home from "../telas/Home";
import FichaUsuario from '../telas/FichaUsuario';

//  configurar 
const Stack = createStackNavigator();

export default function StackNavigator() {
    return ( 
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />
      </Stack.Navigator>
    )
}