import React from 'react';
import { StyleSheet,
         Text,
         View,
         Button } from 'react-native';
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



export default function PerfilUsuarioScreen({navigation}){
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Janela perfil do Usuário</Text>
		<Button
			title="Editar Perfil"
			onPress={() => navigation.navigate('Editor')}
		/>
		</View>
	);
}
