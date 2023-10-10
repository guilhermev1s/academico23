import React from 'react'
import { Button, Text } from 'react-native-paper'

const alunos = ({navigation}) => {
  return (
    <>
     <>
            <Text>Alunos</Text>
            <Button icon='plus' 
            mode='contained' 
            onPress={() =>navigation.push('alunos-Formulário')}>
                Novo
            </Button>
        </>
    </>
  )
}

export default alunos