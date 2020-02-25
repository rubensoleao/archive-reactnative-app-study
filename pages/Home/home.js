
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



//Dados Temporários de perfils de alunos para teste
const DATA = [
	{
		 id:'xxasdas da s',Nome: 'Antonio José Munia',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',

	},
	{
		 id:'dalklq12lk3123l1k231lskl',Nome: 'Antonio Roger Braga',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',
	},
	{
		 id:'23k41j2lk3j41l2kj34lk1jk4j',Nome: 'São Jõao de Nunes Feição Penhoso',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',
	},
];

//Varíavel utilizado para passar um perfil de aluno vazio para a criação de um usuario novo
const perfilAluno_vazio={ id: '',Nome: '',DataNascimento:'', Cidade: '' , Ano: '', CEP:'', Rua:'',Numero:'',Complemento:'',Bairro:'',Cidade:'',Estado:'',NomeDaMae:'',CPFdaMae:'',DataPagamento:''}


// Função que retorna um botão para o usuário
// Recebe:
// 	- perfil: Recebe o dicionário que representa o perfil de usuário
//  - navigation: que permite rotear para outra página
function BotaoUsuario({ perfil, navigation }) {
  return (
	<View >
		<TouchableHighlight style={styles.item}X onPress={() => navigation.navigate('PerfilUsuario',{perfilAluno: perfil,}) }>
		<Text style={styles.textoUsuario}>{perfil.Nome}</Text>
		</TouchableHighlight>
	</View>
  );
}


// Função principal HOME.
// Percorre um banco de dados DATA de perfils e cria uma Flatlist a partir dela. Cada elemento da flatlist é criado
// pela função BotaoUsuario.
//
export default function HomeScreen({navigation,item}){  return (
	<SafeAreaView style={styles.container,{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		<FlatList 
			data={DATA}
			renderItem={({ item }) => <BotaoUsuario perfil={item} navigation={navigation}/>}
			keyExtractor={item => item.id}
		/>


	<Button
		title="Adicionar Perfil Novo"
		onPress={() => navigation.navigate('Editor',{perfilAluno:perfilAluno_vazio,})}
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