
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
		 AsyncStorage,
		 ScrollView
		} from 'react-native';

import Constants from 'expo-constants';

import {lerAlunos} from '../../src/bd'



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
		return (
			<SafeAreaView style={styles.container}>
					<ScrollView>


						{/*Flatlist imprime lista de Usuários*/} 
						<View style={styles.conteinerListaAlunos}>
							<FlatList 
								data={this.state.db}
								renderItem={({ item }) => <BotaoUsuario perfil={item} navigation={this.props.navigation}/>}
								keyExtractor={item => item.id}
							/>
						</View>


					</ScrollView>


				<TouchableHighlight 
				style={styles.button}
				onPress={() => this.props.navigation.navigate('Editor',{perfilAluno:perfilAluno_vazio,})}
				>
				<Text style={styles.buttonText}>
				Cadastrar Aluno
				</Text>
				</TouchableHighlight>

			</SafeAreaView>
		);
	}
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
  },
  conteinerListaAlunos:{
  	flex:1,
  	alignSelf: 'center',
  	minWidth:'96%',
  	padding: 3,
	},
  item: {
		backgroundColor: 'white',
		paddingVertical:5,
		paddingHorizontal:10,
		marginVertical: 5,
		
		
		shadowColor: "#000",
		shadowOffset: {
			width: 10,
			height: 1,
		},
		shadowOpacity: 0.43,
		shadowRadius: 0.62,
		elevation: 2,
  },
  textoUsuario: {
		fontSize: 20,
  },
	button:{
		height: 40,
		paddingHorizontal: 10,
		alignContent:'center',
		borderRadius: 10,
		justifyContent:'center',
		alignContent:'center',
		backgroundColor:'#00675b',
		marginBottom:36,
		marginHorizontal:72,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 2.65,
		elevation: 6,
	},buttonText:{
		color:'#FFF',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign:'center',
	},
});