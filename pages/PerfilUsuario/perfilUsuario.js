import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const usuario_vazio={ Nome: '',DataNascimento:'', Cidade: '' , Ano: '', CEP:'', Rua:'',Numero:'',Complemento:'',Bairro:'',Cidade:'',Estado:'',NomeDaMae:'',CPFdaMae:'',DataPagamento:''}


const usuario={ Nome: 'Antonio José Munia',DataNascimento:'', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5'}

export default function PerfilUsuarioScreen({navigation}){
	return (
		<View style={{flex:1}}>
		<View style={styles.conteiner}>
		<Text style={styles.nome}>{usuario.Nome}</Text>
		<Text style={styles.Text}>{usuario.Ano}º Ano</Text>
		
		<View style={styles.leftConteiner}>
			<Text>Nascimento	{usuario.DataNascimento}</Text>
		</View>
		
		<Text>Dados Mãe:</Text>
		<View style={styles.leftConteiner}>
			<Text >{usuario.NomeDaMae}</Text>
			<Text >CPF {usuario.CPFdaMae}</Text>
		</View>
		
		<Text>Data de Pagamento</Text>
		<View style={styles.leftConteiner}>
			<Text > {usuario.DataPagamento}º dia útil</Text>
		</View>

		<Text> Endereço</Text>

		<View style={styles.leftConteiner}>
			<Text >{usuario.Rua}, {usuario.Numero} </Text>
			<Text >{usuario.Complemento}</Text>
			<Text >{usuario.CEP}</Text>
			<Text >{usuario.Bairro} </Text>
			<Text >{usuario.Cidade}, {usuario.Estado}  </Text>
		</View>


		</View >

		<View style={styles.bottomConteiner}>
		<View style={styles.botaoDeletar}>
			<Button 
				color='red'
				title="Deletar Perfil"
				onPress={() => navigation.navigate('Editor')}
			/>
		</View>

		{/*Mudar o botao debaixo para um touchable opacity, pois assim não da para mudar de altura*/}
		<View style={styles.botaoEditar}>
			<Button
				title="Editar Perfil"
				onPress={() => navigation.navigate('Editor')}
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