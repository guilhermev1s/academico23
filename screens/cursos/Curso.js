import React from 'react'
import { Button, Text } from 'react-native-paper'


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