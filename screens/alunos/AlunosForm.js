import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = () => {
  const [dados, SetDados] = useState({})

  function handleChange(valor, campo) {
    SetDados({ ...dados, [campo]: valor })
  }

  function salvar() {
    console.log(dados)
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>

        <Text>Formulário de Alunos</Text>

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CPF'
          keyboardType='decimal-pad'
          value={dados.cpf}
          onChangeText={(valor) => handleChange(valor, 'cpf')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Matricula'
          keyboardType='decimal-pad'
          value={dados.matricula}
          onChangeText={(valor) => handleChange(valor, 'matricula')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='E-mail'
          keyboardType='email-address'
          value={dados.email}
          onChangeText={(valor) => handleChange(valor, 'email')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Telefone'
          keyboardType='decimal-pad'
          value={dados.telefone}
          onChangeText={(valor) => handleChange(valor, 'telefone')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='CEP'
          keyboardType='decimal-pad'
          value={dados.cep}
          onChangeText={(valor) => handleChange(valor, 'cep')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Logradouro'
          value={dados.logradouro}
          onChangeText={(valor) => handleChange(valor, 'logradouro')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Complemento'
          value={dados.complemento}
          onChangeText={(valor) => handleChange(valor, 'complemento')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Número'
          keyboardType='decimal-pad'
          value={dados.numero}
          onChangeText={(valor) => handleChange(valor, 'numero')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Bairro'
          value={dados.bairro}
          onChangeText={(valor) => handleChange(valor, 'bairro')} />

        <Button onPress={salvar}>Salvar</Button>
      </ScrollView>

    </>
  )
}

export default AlunosForm