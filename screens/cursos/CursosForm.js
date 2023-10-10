import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = () => {

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

        <Text>Formulário de Curso</Text>

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Duração'
          keyboardType='decimal-pad' 
          value={dados.duracao}
          onChangeText={(valor) => handleChange(valor, 'duracao')}/>

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Modalidade' 
          value={dados.modalidade}
          onChangeText={(valor) => handleChange(valor, 'modalidade')}/>
          
          <Button onPress={salvar}>Salvar</Button>

      </ScrollView>

    </>
  )
}

export default CursosForm