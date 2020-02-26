//**********************************
// BIBLIOTECAS  REACT e REACT NATIVE
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//**********************************
// BIBLIOTECAS  REACT NAVIGATION
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

import Routes from "./src/routes"
import {initDB,gravarAluno} from './src/bd';


//Inicia o banco de dados padrão caso não estaja iniciado
initDB();
gravarAluno();


function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

export default App;