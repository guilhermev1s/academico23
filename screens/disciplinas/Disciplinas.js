import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Disciplinas = ({ navigation }) => {

  const [disciplinas, setDisciplinas] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = useState(false);

  const hideDialog = () => setVisible(false);

  useFocusEffect(
    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('disciplinas').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setDisciplinas(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id)
    setVisible(true)
  }

  function excluir() {
    cursos.splice(idExcluir, 1)
    AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    carregarDados()
    setVisible(false)
  }


  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        <Text>Disciplinas</Text>
        {disciplinas.map((item, indice) => (
          <Card key={indice} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">{item.curso}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil' onPress={() => navigation.push('disciplinas-Formulário', { id: indice, Disciplinas: item })} />
              <IconButton icon='delete' onPress={() => confirmarExclusao(indice)} />
            </Card.Actions>
          </Card>
        ))}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir o registro?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>
      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        onPress={() => navigation.push('disciplinas-Formulário')}
      />

    </>
  )
}

export default Disciplinas