import React from 'react'
import { Button, Text } from 'react-native-paper'

const Curso = ({navigation}) => {
    return (
        <>
            <Text>Cursos</Text>
            <Button icon='plus' 
            mode='contained' 
            onPress={() =>navigation.push('Cursos-Formulário')}>
                Novo
            </Button>
        </>
    )
}

export default Curso