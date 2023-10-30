import * as Yup from 'yup';
const disciplinaValidator = Yup.object().shape({
    nome: Yup.string()
      .min(3, 'Valor muito curto')
      .required('Campo obrigatório'),
    curso: Yup.string()
      .min(3, 'Valor muito curto')
      .required('Campo obrigatório'),
  })

  export default disciplinaValidator