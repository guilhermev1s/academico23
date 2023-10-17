import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'


const Curso = ({ navigation }) => {

    const [cursos, setCursos] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem('cursos').then(resultado => {

                resultado = JSON.parse(resultado) || []

                console.log(resultado)
                setCursos(resultado)
            })
        }, [])
    );

    return (
        <>
            <ScrollView style={{ padding: 15 }}>

                {cursos.map((item, indice) => (

                    <Card key={indice} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content>
                            <Text variant="titleLarge">{item.nome}</Text>
                            <Text variant="bodyMedium">{item.duracao}</Text>
                            <Text variant="bodyMedium">{item.modalidade}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton icon='delete' />
                            <IconButton icon='pencil' />
                        </Card.Actions>
                    </Card>

                ))}

            </ScrollView>
            <FAB
                icon="plus"
                size='small'
                style={{ position: 'absolute', right: 10, bottom: 10 }}
                onPress={() => navigation.push('Cursos-Formulário')}
            />

        </>

    )
}

export default Curso