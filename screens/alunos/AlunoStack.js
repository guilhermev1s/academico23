import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import alunos from './Alunos';
import AlunosForm from './AlunosForm';

const Stack = createNativeStackNavigator();

const AlunoStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="alunos" component={alunos} options={{ title: 'Alunos' }} />
        <Stack.Screen name="alunos-Formulário" component={AlunosForm} options={{ title: 'Alunos' }} />
    </Stack.Navigator>
</>
  )
}

export default AlunoStack