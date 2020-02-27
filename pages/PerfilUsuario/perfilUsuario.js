import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import {removerAluno} from '../../src/bd';




// Passando parametros por rotas:https://reactnavigation.org/docs/en/params.html

export default function PerfilperfilAlunoScreen({route,navigation}){
	const {perfilAluno} = route.params;

	const idAluno=perfilAluno.id

	async function  botaoRemover(idAluno){
		console.log("remocao Aqui")
		console.log(idAluno)
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

		{/*Mudar o botao debaixo para um touchable opacity, pois assim não da para mudar de altura*/}
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
		textAlign: 'center',

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
		color:'red',
	},botaoEditar:{
		margin: 5,
		marginBottom:36,
		color:'red',
	},
	bottomConteiner:{
		flex:1,
		justifyContent: 'flex-end',

}
})