import * as Yup from 'yup';
const alunoValidator = Yup.object().shape({
    nome: Yup.string()
      .min(5, 'Valor muito curto')
      .max(10, 'Valor muito grande')
      .required('Campo obrigatório'),
    duracao: Yup.number()
      .max(11, 'Valor muito grande')
      .required('Campo obrigatório'),
    modalidade: Yup.string()
      .required('Campo obrigatório'),
  })

  export default alunoValidator
