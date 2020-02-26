//bd.js Contém as funções de acesso ao banco de dados

import {
  AsyncStorage,
  Alert
} from 'react-native';

// Método de atualização de perfil ao BD:
//	- Ler todos os registros do Banco de dados
//  - Modificar o usuario desejado
//  - Escreve todos os usuarios devolta ao BD


const  masterKey = 'MasterBD'

// Armazena aluno no banco de dados.
// Recebe Perfil do aluno e utilza sua propriedade id para criação da chave
//
export  const gravarAluno = async () => {
    // primeiramente lê o banco de dados de alunos
    try {
    	var dbAlunos = await AsyncStorage.getItem(masterKey)
		if (dbAlunos){
			//Foi lido com sucesso o Banco de Dados
			dbAlunos = JSON.parse(dbAlunos);
			console.log(dbAlunos);
		} else{
			console.log('DB lida com sucesso mas dbAlunos retornou NULL');
		}
	}
	catch(error){
		console.log('erro ao ler BD em função gravarAluno' + error);
	}
    //try {
    //	await AsyncStorage.setItem(value.id, JSON.stringify(value));
    //} catch (error) {
    //	console.log("Error ao escrever dados" + error);
    //}
}


export  const lerAlunos = async ()=> {
    try {
      var value = await AsyncStorage.getItem(masterKey);
      return(JSON.parse(value))
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
}

export const initDB = async ()=> {
	const dbInicial = [
	{id:'xxasd1294c92180498120m9c291m',Nome: 'Antonio José Munia',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',},
	{id:'dalklq12lk3123l1k231lskl',Nome: 'Antonio Roger Braga',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',},
	{id:'23k41j2lk3j41l2kj34lk1jk4j',Nome: 'São Jõao de Nunes Feição Penhoso',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',},
	];
	try {

		// Tenta ver se o BD esta iniciado
		// Se estiver iniciado vai existir um elemento com a chave  == masterKey
		console.log('Verificando DB')
		if(!await AsyncStorage.getItem(masterKey)){
			console.log('DB não iniciada')

			//Iniciar DB com dbInicial:
			    try {
			      await AsyncStorage.setItem(masterKey, JSON.stringify(dbInicial));
			    } catch (error) {
			      console.log("Error ao escrever banco de dados principal" + error);
			    }

		} else{
			console.log('DB já iniciada')
		}

	} catch(error){
		console.log('BD não iniciado')
	}
}


export const resetKey = async() => {
    try {
      await AsyncStorage.removeItem('1234123412');
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }