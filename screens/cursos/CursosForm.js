import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = ({navigation}) => {

  const [dados, SetDados] = useState({})

  function handleChange(valor, campo) {
    SetDados({ ...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

        
      cursos.push(dados)
      console.log(cursos)
  
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
  
      navigation.goBack()
     })

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