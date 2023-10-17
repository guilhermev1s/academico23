import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CursoStack from './screens/cursos/CursoStack';
import AlunoStack from './screens/alunos/AlunoStack';
import DisciplinaStack from './screens/disciplinas/DisciplinaStack';
import ProfessoreStack from './screens/professores/ProfessoreStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
          <Tab.Screen
              name="Cursos"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-variant" size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Disciplinas"
              component={DisciplinaStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-multiple" size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Alunos"
              component={AlunoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-outline" size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Professores"
              component={ProfessoreStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-tie" size={26} />
                ),
              }}
            />
          <Tab.Screen
              name="Turmas"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}


