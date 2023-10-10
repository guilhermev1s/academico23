import React from 'react'
import { Button, Text } from 'react-native-paper'

const Disciplinas = ({ navigation }) => {
  return (
    <>
      <Text>Disciplinas</Text>
      <Button icon='plus'
        mode='contained'
        onPress={() => navigation.push('disciplinas-Formulário')}>
        Novo
      </Button>
    </>
  )
}

export default Disciplinas