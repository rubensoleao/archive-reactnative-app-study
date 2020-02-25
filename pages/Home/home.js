
// Tela principal do aplicativo:
//	- Exibição dos alunos
//	- Clicando no nome do aluno leva para seu perfil


import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button,TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];


// Função Item define 
function BotaoUsuario({ title, navigation }) {
  return (
    <View style={styles.item}>
        <TouchableHighlight onPress={() => navigation.navigate('PerfilUsuario')}>
     
					<Text style={styles.title}>{title}</Text>
		</TouchableHighlight>
    </View>
  );
}

export default function HomeScreen({navigation}){  return (
    <SafeAreaView style={styles.container,{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList 
        data={DATA}
        renderItem={({ item }) => <BotaoUsuario title={item.title} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
      		<Button
			title="Ir para tela de Perfil"
			
		/>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});