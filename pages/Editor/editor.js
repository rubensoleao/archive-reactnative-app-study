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


import {gravarAluno} from '../../src/bd';
//values => gravarAluno(values)


function submeterFormulario(values){
	
	navigation.popToTop()
}

export default function  DetailsScreen({route,navigation}) {
const {perfilAluno} = route.params;

return (
<KeyboardAvoidingView style={styles.conteiner} behavior="padding">
	<ScrollView>
		<Text style={[styles.largeText, styles.textStyle]}> Cadastro de Alunos</Text>


		<Formik 
		enableReinitialize
		initialValues={perfilAluno} 
		onSubmit={values => {gravarAluno(values);  navigation.popToTop()}}
		>

		{({ values, handleChange, handleSubmit, isValid,errors,touched}) => (
		<View>
			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Nome"} 
				value={values.Nome}
				onChangeText={handleChange('Nome')}		
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Ano do Colégio"} 
				value={values.Ano}
				onChangeText={handleChange('Ano')}		
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>


			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Data de Nascimento"} 
				value={values.DataNascimento}
				onChangeText={handleChange('DataNascimento')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"CEP"} 
				value={values.CEP}
				onChangeText={handleChange('CEP')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Rua"} 
				value={values.Rua}
				onChangeText={handleChange('Rua')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Numero"} 
				value={values.Numero}
				onChangeText={handleChange('Numero')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Complemento"} 
				value={values.Complemento}
				onChangeText={handleChange('Complemento')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Bairro"} 
				value={values.Bairro}
				onChangeText={handleChange('Bairro')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Cidade"} 
				value={values.Cidade}
				onChangeText={handleChange('Cidade')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Estado"} 
				value={values.Estado}
				onChangeText={handleChange('Estado')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Nome da Mãe"} 
				value={values.NomeDaMae}
				onChangeText={handleChange('NomeDaMae')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>

			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"CPF da Mãe"} 
				value={values.CPFdaMae}
				onChangeText={handleChange('CPFdaMae')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>



			<View style={styles.conteinerTextInput}>
				<TextInput
				placeholder={"Data Preferencial de Pagamento"} 
				value={values.DataPagamento}
				onChangeText={handleChange('DataPagamento')}
				placeholderTextColor="white"
				style={styles.textInput}
				/>
			</View>


			<Button title='Cadastrar Aluno'  
			onPress={handleSubmit}
			/>
		</View>)}
		
	</Formik>

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