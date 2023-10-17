import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForm = ({ navigation }) => {

  const [dados, SetDados] = useState({})

  function handleChange(valor, campo) {
    SetDados({ ...dados, [campo]: valor })
  }

  function salvar() {
    AsyncStorage.getItem('disciplinas').then(resultado => {

      const disciplinas = JSON.parse(resultado) || []

      disciplinas.push(dados)
      console.log(disciplinas)

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

      navigation.goBack()
    })
  }
  return (
    <>
      <ScrollView style={{ margin: 15 }}>

        <Text>Formulário de Disciplinas</Text>

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')} />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Curso'
          value={dados.curso}
          onChangeText={(valor) => handleChange(valor, 'curso')} />

        <Button onPress={salvar}>Salvar</Button>

      </ScrollView>

    </>

  )
}

export default DisciplinasForm