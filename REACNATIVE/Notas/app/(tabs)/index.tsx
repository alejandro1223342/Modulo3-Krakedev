
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';

//Importante para la navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GradeForm } from '../Screens/GradeForm'
import { ListGrades } from '../Screens/ListGrades'
export default function App() {

  const StackGrades = createNativeStackNavigator();

  return (
   // <NavigationContainer>
      <StackGrades.Navigator>
        <StackGrades.Screen name='ListGradesNav' component={ListGrades} />
        <StackGrades.Screen name='GradeFormNav' component={GradeForm} />

      </StackGrades.Navigator>

    //</NavigationContainer>
  );


}

