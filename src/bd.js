//bd.js Contém as funções de acesso ao banco de dados

// Método de atualização de perfil ao BD:
//	- Ler todos os registros do Banco de dados
//  - Modificar o usuario desejado
//  - Escreve todos os usuarios devolta ao BD

import {
  AsyncStorage,
  Alert
} from 'react-native';

import gerarChave from './gerarChave'

const  masterKey = 'MasterBD'

// Armazena aluno no banco de dados.
// Recebe Perfil do aluno e utilza sua propriedade id para criação da chave
//
export  const gravarAluno = async (perfilAluno) => {
	//console.log('Iniciado Fç gravar alunos')
    // primeiramente lê o banco de dados de alunos
    try {
    	var dbAlunos = await AsyncStorage.getItem(masterKey)
		if (dbAlunos){
			//Foi lido com sucesso o Banco de Dados
			dbAlunos = JSON.parse(dbAlunos);
		} else{
			console.log('DB lida com sucesso mas dbAlunos retornou NULL');
		}
	}
	catch(error){
		console.log('erro ao ler BD em função gravarAluno' + error);
	}
	console.log('dbLido:')
	console.log(dbAlunos)
	console.log('A escrever:')
	console.log(perfilAluno);
	//adiciona aluno ao dbGravado na variavel

	// Verifica se é para criar ou editar um aluno
	// - id do aluno == '' => Criar aluno novo
	// - id do aluno já exista => editar aluno.
	//
	// A edição é feita sobrescrevendo o aluno dentro do BD 
	if (perfilAluno.id ==''){
		console.log('gerar novo aluno');
		perfilAluno["id"] = gerarChave();
	}
	console.log('chave Gerada'+ perfilAluno.id )
	dbAlunos[perfilAluno.id] = perfilAluno;
	console.log('dbatualizado:')
	console.log(dbAlunos)
	//escreve a db devolta na memoria local
    try {
    	await AsyncStorage.setItem(masterKey, JSON.stringify(dbAlunos));
    } catch (error) {
    	console.log("Error ao escrever dados" + error);
    }
}




export const initDB = async ()=> {
	const dbInicial = {aluno_xxasdasdas:{id:'aluno_xxasdasdas',Nome: 'Antonio José Munia',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',
	},
	 aluno_dalklq12lk3123l1k231lskl:{id:'aluno_dalklq12lk3123l1k231lskl',Nome: 'Antonio Roger Braga',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',
	},
	 aluno_23k41j2lk3j41l2kj34lk1jk4j:{id:'aluno_23k41j2lk3j41l2kj34lk1jk4j',Nome: 'São Jõao de Nunes Feição Penhoso',DataNascimento:'22/05/1999', Cidade: 'São Jõao do Mato verde' , Ano: '1', Rua:'Rua José Pereira Manuel Antonio',Numero:'12',Complemento:'FRENTE',Bairro:'Jd. Primavera',Cidade:'São jõao do Mato Bento',Estado:'SP', CEP:'150599', NomeDaMae:'Maria Julia Casanova',CPFdaMae:'364.123.123-12',DataPagamento:'5',
	},
};
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