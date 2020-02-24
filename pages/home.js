
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


//Biblioteca Formic usado para preenchimento de dados
import { Formik } from 'formik';



export default function HomeScreen({navigation}){
return (
<KeyboardAvoidingView style={styles.conteiner} behavior="padding">

	<ScrollView>
		<Text style={[styles.largeText, styles.textStyle]}> Cadastro de Alunos</Text>

		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Nome"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>

		</View>

		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Ano do colegio"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>

		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Rua"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Numero"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Complemento"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>

			<TextInput


			placeholder="Bairro"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Cidade"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>
			<TextInput


			placeholder="Estado"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>

			<TextInput


			placeholder="Nome Da Mãe"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>

			<TextInput


			placeholder="CPF da Mãe"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<View style={styles.conteinerTextInput}>

			<TextInput


			placeholder="Data preferencial de Pagamento"

			placeholderTextColor="white"
			underlineColorAndroid="transparent"
			style={styles.textInput}
			/>
		</View>


		<Button title='Cadastrar Aluno'  />

		<Button
		title="Ir para tela de edição"
		onPress={() => navigation.navigate('Editor')}
		/>


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