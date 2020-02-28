import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button,
         SafeAreaView,
         ScrollView,
         TouchableHighlight } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import {removerAluno} from '../../src/bd';
import { Ionicons } from '@expo/vector-icons';



export default function PerfilperfilAlunoScreen({route,navigation}){

	//Recebe Paramêtro por react-routes
	const {perfilAluno} = route.params;


	//Função
	const idAluno=perfilAluno.id
	async function  botaoRemover(idAluno){
		console.log("remocao Aqui")
		await removerAluno(idAluno)
		navigation.popToTop()
	}


	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
		
		<Text style={styles.nome}>{perfilAluno.Nome}</Text>
		<Text style={styles.Text}>{perfilAluno.Ano}º Ano</Text>
		
		<View style={styles.leftConteiner}>
			<Text>Nascimento	{perfilAluno.DataNascimento}</Text>
		</View>
		
		<Text>Dados Mãe:</Text>
		<View style={styles.leftConteiner}>
			<Text >{perfilAluno.NomeDaMae}</Text>
			<Text >CPF {perfilAluno.CPFdaMae}</Text>
		</View>
		
		<Text>Data de Pagamento</Text>
		<View style={styles.leftConteiner}>
			<Text > {perfilAluno.DataPagamento}º dia útil</Text>
		</View>

		<Text> Endereço</Text>

		<View style={styles.leftConteiner}>
			<Text >{perfilAluno.Rua}, {perfilAluno.Numero} </Text>
			<Text >{perfilAluno.Complemento}</Text>
			<Text >{perfilAluno.CEP}</Text>
			<Text >{perfilAluno.Bairro} </Text>
			<Text >{perfilAluno.Cidade}, {perfilAluno.Estado}  </Text>
		</View>


		</ScrollView>

		<View style={styles.horizontalContainer}> 

			<View style={{flex:5}}>
			<TouchableHighlight 
				style={styles.botaoDeletar}
				onPress={()=>{removerAluno(idAluno);navigation.popToTop()}}
			>
				<Text style={{textAlign:'center'}} >
					<Ionicons name="ios-trash" size={32} color="#FFF" align='center' />

				</Text>

			</TouchableHighlight>
			</View>

			<View style={{flex:10}}>
			<TouchableHighlight 
				style={styles.botaoEditar}
				onPress={() => navigation.navigate('Editor',{perfilAluno})}
			>
			<Text style={styles.buttonText}>
				Editar Perfil
			</Text>
			</TouchableHighlight>
			</View>

		</View>


		</SafeAreaView>
	);
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#EEE',
	},
	scrollContainer: {
		marginHorizontal:10,
	},
	leftConteiner: {
		backgroundColor: 'white',
		marginHorizontal: 30,
		padding:5,
	},
	horizontalContainer:{
		marginHorizontal:30,
		flexDirection:'row',

	},
	nome:{
		fontSize: 22,
		flexWrap:'wrap',
	},
	Text:{
		fontSize: 16,
	},
	botaoDeletar:{
		height: 40,
		paddingHorizontal: 10,
		borderRadius: 10,
		justifyContent:'center',
		alignContent:'center',
		backgroundColor:'red',
		marginRight:6,
		marginBottom:36,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 2.65,
		elevation: 6,

	},botaoEditar:{
		height: 40,
		paddingHorizontal: 10,
		alignContent:'center',
		borderRadius: 10,
		justifyContent:'center',
		alignContent:'center',
		backgroundColor:'#00675b',
		marginBottom:36,



		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 2.65,
		elevation: 6,
	},
	buttonText:{
		color:'#FFF',
		fontWeight: 'bold',
		fontSize: 16,
		textAlign:'center',
	},
	bottomContainer:{
		flex:1,
		justifyContent: 'flex-end',
		marginBottom:6,
	}
})