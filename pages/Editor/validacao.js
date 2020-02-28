import * as yup from 'yup'


export const validacaoEditor = yup.object().shape({
	Nome: yup
		.string("Insira apeanas Letras")
		.required('Campo Obrigatório')
		.max(100,"Ultrapassa o máximo de 100 caracteres"),
	Ano: yup
		.number("Insira Apeans numeros")
		.positive("Entrada Invalida")
		.integer("Entrada Invalida")
		.min(1, "Ano Invalido")
		.max(9, "Ano Invalido")
		.required('Campo Obrigatório'),
	Rua: yup
		.string("Entrada Invalida")
		.required('Campo Obrigatório')
		.max(120, "Máximo de 100 caracteres"),
	Numero: yup
		.number("Entrada Invalida")
		.integer("Entrada Invalida")
		.positive("Entrada Invalida")
		.required('Campo Obrigatório'),
	Complemento: yup
		.string("Entrada Invalida"),
	Bairro: yup
		.string("Entrada Invalida")
		.required('Campo Obrigatório')
		.max(100),
	Cidade: yup
		.string("Entrada Invalida")
		.required('Campo Obrigatório'),
	Estado: yup
		.string("Entrada Invalida")
		.required('Campo Obrigatório'),
	NomeDaMae: yup
		.string("Entrada Invalida")
	.max(100)
		.required('Campo Obrigatório'),
	CPFdaMae: yup
		.number("Entrada Invalida")
		.integer("Entrada Invalida")
		.required('Campo Obrigatório'),
	DataPagamento: yup
		.number("Entrada Invalida")
		.integer("Entrada Invalida")
		.min(1)
		.max(31)
		.required('Campo Obrigatório'),
})