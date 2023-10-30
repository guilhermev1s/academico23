import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import professorValidator from '../../validators/professorValidator'
import { mask } from 'remask'

const ProfessoresForm = ({ navigation, route }) => {

    let professores = {
        nome: '',
        cpf: '',
        matricula: '',
        salario: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: ''
    }

    const id = route.params?.id
    if (id >= 0) {
        professores = route.params?.Professores
    }


    function handleChange(valor, campo) {
        SetDados({ ...dados, [campo]: valor })
    }

    function salvar() {
        AsyncStorage.getItem('professores').then(resultado => {

            const professores = JSON.parse(resultado) || []

            if (id >= 0) {
                professores.splice(id, 1, dados)
            } else {
                professores.push(dados)
            }

            console.log(professores)

            AsyncStorage.setItem('professores', JSON.stringify(professores))

            navigation.goBack()
        })
    }

    return (
        <>
            <ScrollView style={{ margin: 15 }}>

                <Text>Formulário de Professores</Text>

                <Formik
                    initialValues={professores}
                    validationSchema={professorValidator}
                    onSubmit={values => salvar(values)}
                >
                    {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
                        <View>

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Nome'
                                value={values.nome}
                                onChangeText={handleChange('nome')} />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.nome}
                                </Text>
                            }

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='CPF'
                                keyboardType='decimal-pad'
                                value={values.cpf}
                                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99')) }} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Matricula'
                                keyboardType='decimal-pad'
                                value={values.matricula}
                                onChangeText={handleChange('matricula')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Sálario'
                                keyboardType='decimal-pad'
                                value={values.salario}
                                onChangeText={handleChange('salario')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='E-mail'
                                keyboardType='email-address'
                                value={values.email}
                                onChangeText={handleChange('email')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Telefone'
                                keyboardType='decimal-pad'
                                value={values.telefone}
                                onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99)99999-9999')) }} />

                            <TextInput
                                style={{ marginTop: 10 }}
                                mode='outlined'
                                label='CEP'
                                value={values.cep}
                                keyboardType='number-pad'
                                onChangeText={(value) => { setFieldValue('cep', mask(value, '99.999-999')) }} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Logradouro'
                                value={values.logradouro}
                                onChangeText={handleChange('logradouro')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Complemento'
                                value={values.complemento}
                                onChangeText={handleChange('complemento')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Número'
                                keyboardType='decimal-pad'
                                value={values.numero}
                                onChangeText={handleChange('numero')} />

                            <TextInput style={{ marginTop: 10 }}
                                mode='outlined'
                                label='Bairro'
                                value={values.bairro}
                                onChangeText={(valor) => handleChange(valor, 'bairro')} />
                            <Button onPress={handleSubmit}>Salvar</Button>
                        </View>
                    )}
                </Formik>
            </ScrollView>


        </>

    )
}

export default ProfessoresForm