import * as Yup from 'yup';
const alunoValidator = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Valor muito curto')
      .max(100, 'Valor muito grande')
      .required('Campo obrigatório'),
    cpf: Yup.number()
      .max(14, 'Máximo de 14 caracteres')
      .required('CPF obrigatório'),
    matricula: Yup.number()
     .min(2, 'Mínimo de 2 caracteres')
     .max(12, 'Máximo de 12 caracteres'),
    email: Yup.string()
     .max(100, 'Máximo de 100 caracteres'),
    telefone: Yup.number()
     .max(15, 'Máximo de 15 caracteres'),
    cep: Yup.number()
     .min(4, 'Mínimo de 4 caracteres')
     .max(11, 'Máximo de 11 caracteres'),
    logradouro: Yup.string() 
     .min(3, 'Mínimo de 3 caracteres')
     .max(100, 'Máximo de 100 caracteres'),
    complemento: Yup.string() 
     .min(2, 'Mínimo de 2 caracteres')
     .max(100, 'Máximo de 100 caracteres'),
    numero: Yup.number()
     .min(1, 'Mínimo de 1 caractere')
     .max(10, 'Máximo de 10 caracteres'),
    bairro: Yup.string() 
     .min(2, 'Mínimo de 2 caracteres')
     .max(100, 'Máximo de 100 caracteres'),
  })

  export default alunoValidator
