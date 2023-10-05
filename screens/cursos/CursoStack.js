import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Curso from './Curso';
import CursosForm from './CursosForm';

const Stack = createNativeStackNavigator();

const CursoStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="cursos" component={Curso} options={{ title: 'Cursos' }} />
                <Stack.Screen name="Cursos-Formulário" component={CursosForm} options={{ title: 'Cursos' }} />
            </Stack.Navigator>
        </>
    )
}

export default CursoStack