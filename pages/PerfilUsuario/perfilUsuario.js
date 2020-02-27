import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import {removerAluno} from '../../src/bd';




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
		<View style={{flex:1}}>
		<View style={styles.conteiner}>
		
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
		</View >


		<View style={styles.bottomConteiner}>
		<View style={styles.botaoDeletar}>
			<Button 
				color='red'
				title="Deletar Perfil"
				onPress={()=>{removerAluno(idAluno);navigation.popToTop()}}
				
			/>
		</View>


		<View style={styles.botaoEditar}>
			<Button
				title="Editar Perfil"
				onPress={() => navigation.navigate('Editor',{perfilAluno})}
			/>
		</View>

		</View>
		</View>
	);
}


const styles = StyleSheet.create({
		conteiner: {
		flexDirection:'column',
		
		backgroundColor: 'white',

		paddingVertical: 1,

	},leftConteiner: {
		backgroundColor: '#EEE',
		alignItems: 'flex-start',
		marginHorizontal: 30,
		padding:5,
	},

		nome:{
		fontSize: 22,
		flexWrap:'wrap',
	},
		Text:{
		fontSize: 16,
	},

	horizontalConteiner:{
		flexDirection:'row',
		backgroundColor: '#DDD',
	},
	botaoDeletar:{
	    
		margin: 5,
	},botaoEditar:{
		margin: 5,
		marginBottom:36,
	},
	bottomConteiner:{
		flex:1,
		justifyContent: 'flex-end',

}
})