
// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Clicando no nome do aluno leva para seu perfil


import React from 'react';
import { SafeAreaView,
		 View, FlatList, 
		 StyleSheet, 
		 Text, 
		 Button,
		 TouchableHighlight 
		} from 'react-native';

import Constants from 'expo-constants';

const DATA = [
	{
		nome: 'Antônio Alves Pereira',
	},
	{
		nome: 'Douglas Pereira Silva',
	},
	{
		nome: 'José Augsto',
	},
];


// Função Item define 
function BotaoUsuario({ nome, navigation }) {
  return (
	<View >
		<TouchableHighlight style={styles.item}X onPress={() => navigation.navigate('PerfilUsuario')}>
		<Text style={styles.textoUsuario}>{nome}</Text>
		</TouchableHighlight>
	</View>
  );
}

export default function HomeScreen({navigation}){  return (
	<SafeAreaView style={styles.container,{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<FlatList 
			data={DATA}
			renderItem={({ item }) => <BotaoUsuario nome={item.nome} navigation={navigation} />}
			keyExtractor={item => item.id}
		/>


	<Button
		title="Adicionar Perfil Novo"
		onPress={() => navigation.navigate('Editor')}
	/>
	</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	marginTop: Constants.statusBarHeight,
  },
  item: {
	backgroundColor: '#DDDDDD',
	paddingVertical:5,
	paddingHorizontal:10,
	marginVertical: 4,
	marginHorizontal: 2,
	borderRadius: 3,
  },
  textoUsuario: {
	fontSize: 32,
  },
});