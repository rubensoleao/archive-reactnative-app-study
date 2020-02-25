// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Botão para editar alunos


//Bibliotecas react
//VVVVVVV
import React from 'react';
import { StyleSheet,
Text,
View,
Button,
ScrollView,
TextInput,
KeyboardAvoidingView,
SafeAreaView
} from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const perfilAluno2={ Nome: 'Antonio José Munia',DataNascimento:'12/10/2010', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5'}

//Biblioteca Formic usado para preenchimento de dados
import { Formik } from 'formik';



function EntradaUsuario({placeholder,defaultValue,value}){
	return(
		<View style={styles.conteinerTextInput}>
			<TextInput
				defaultValue={defaultValue}
				placeholder={placeholder}

				placeholderTextColor="white"
				underlineColorAndroid="transparent"
				style={styles.textInput}
			/>
		</View>

	)
}


export default function  DetailsScreen({route,navigation}) {
const {perfilAluno} = route.params;

return (
<KeyboardAvoidingView style={styles.conteiner} behavior="padding">
	<ScrollView>
		<Text style={[styles.largeText, styles.textStyle]}> Cadastro de Alunos</Text>

		<EntradaUsuario
			placeholder={"Nome"} 
			defaultValue={perfilAluno.Nome}
		/>

		<EntradaUsuario
			placeholder={"Ano do Colégio"} 
			defaultValue={perfilAluno.Ano}
		/>


		<EntradaUsuario
			placeholder={"Data de Nascimento"} 
			defaultValue={perfilAluno.DataNascimento}
		/>

		<EntradaUsuario
			placeholder={"Rua"} 
			defaultValue={perfilAluno.Rua}
		/>

		<EntradaUsuario
			placeholder={"Rua"} 
			defaultValue={perfilAluno.Rua}
		/>

		<EntradaUsuario
			placeholder={"Numero"} 
			defaultValue={perfilAluno.Numero}
		/>

		<EntradaUsuario
			placeholder={"Complemento"} 
			defaultValue={perfilAluno.Complemento}
		/>

		<EntradaUsuario
			placeholder={"Bairro"} 
			defaultValue={perfilAluno.Bairro}
		/>

		<EntradaUsuario
			placeholder={"Cidade"} 
			defaultValue={perfilAluno.Cidade}
		/>

		<EntradaUsuario
			placeholder={"Estado"} 
			defaultValue={perfilAluno.Estado}
		/>

		<EntradaUsuario
			placeholder={"Nome da Mãe"} 
			defaultValue={perfilAluno.NomeDaMae}
		/>

		<EntradaUsuario
			placeholder={"CPF da Mãe"} 
			defaultValue={perfilAluno.CPFdaMae}
		/>

		<EntradaUsuario
			placeholder={"Data Preferencial de Pagamento"} 
			defaultValue={perfilAluno.DataPagamento}
		/>


		<Button title='Cadastrar Aluno'  />


	</ScrollView>
</KeyboardAvoidingView >
);
}


const styles = StyleSheet.create({
conteiner: {
flex: 1,
backgroundColor: 'white',
},
conteinerTextInput: {
height: 40,
marginTop: 20,
backgroundColor: '#6685B3',
marginHorizontal: 40,
paddingHorizontal: 10,
borderRadius: 5,
},
textInput: {
marginTop:5,
color: 'white',
fontWeight: 'bold',
},  
textStyle: {
textAlign: 'center',
fontFamily: 'Roboto',
},
largeText: {
fontSize: 44,
},
tinyText: {

fontSize: 11,
textAlign:'left',
}
});