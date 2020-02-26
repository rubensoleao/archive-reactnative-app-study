//Arquivo de rotas do React Navigation 5.0 
//Define quais são as telas
//É criado uma "pilha" de telas para navegação tipo pilha (Stack)

//Importando funções do react e do react navigation
//VVVVVV
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
//^^^^^^


//Importando as telas de edicao e home
//VVVV
import HomeScreen from '../pages/Home/home'
import EditorScreen from '../pages/Editor/editor'
import PerfilUsuarioScreen from '../pages/PerfilUsuario/perfilUsuario'


//^^^^^^^


const Stack = createStackNavigator();

export default function Routes(){
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Editor" component={EditorScreen} />
			<Stack.Screen name="PerfilUsuario" component={PerfilUsuarioScreen} />
		</Stack.Navigator>

	);
}