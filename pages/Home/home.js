
// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Clicando no nome do aluno leva para seu perfil


import React from 'react';
import { SafeAreaView,
		 View, FlatList, 
		 StyleSheet, 
		 Text, 
		 Button,
		 TouchableHighlight,
		 AsyncStorage
		} from 'react-native';

import Constants from 'expo-constants';

import {lerAlunos} from '../../src/bd'

import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';


//Varíavel utilizado para passar um perfil de aluno
// vazio para a criação de um usuario novo
const perfilAluno_vazio={
	id: '', Nome: '',DataNascimento:'', Cidade: '' ,
	Ano: '', CEP:'', Rua:'',Numero:'',Complemento:'',
	Bairro:'',Cidade:'',Estado:'',NomeDaMae:'',CPFdaMae:'',
	DataPagamento:''}



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
// Percorre um banco de dados DATA de perfils e cria uma
// Flatlist a partir dela. Cada elemento da flatlist é criado
// pela função BotaoUsuario.
export default class HomeScreen extends React.Component{
	constructor(props) {
		super(props);
		this.state ={db:''}
	}
	

	// Adiciona listener para atualizar o bd sempre que entrar em foco
	// necessario para o react navigate
	// https://reactnavigation.org/docs/navigation-lifecycle
	// https://reactnavigation.org/docs/function-after-focusing-screen
	componentDidMount(){
		let sub = this.props.navigation.addListener('focus', () => {
			this.lerAlunos();
			this.forceUpdate()
		});
	}
	
	componentWillUnmount() {
		sub.unsubscribe();
	}

	//Lê o BDlocal e salva em state
	lerAlunos = async () =>  {
		let name = await AsyncStorage.getItem('MasterBD');
		if (name!=null){
		  name=JSON.parse(name);
		  this.setState({db:Object.values(name)});
		}
	}

	render( ){
		console.log('rendered')
	return (
		<SafeAreaView style={styles.container,{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			
			<FlatList 
				data={this.state.db}
				renderItem={({ item }) => <BotaoUsuario perfil={item} navigation={this.props.navigation}/>}
				keyExtractor={item => item.id}
			/>

			<Button
				title="Adicionar Perfil Novo"
				onPress={() => this.props.navigation.navigate('Editor',{perfilAluno:perfilAluno_vazio,})}
			/>

		</SafeAreaView>
	  );}
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
	fontSize: 22,
  },
});