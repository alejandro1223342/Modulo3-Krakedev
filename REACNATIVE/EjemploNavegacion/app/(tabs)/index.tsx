import 'react-native-gesture-handler'; // Necesario para React Navigation

//Necesario
import { NavigationContainer } from '@react-navigation/native'; // Asegurate de importar NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';
//Aqui estoy importando
import { Home } from '../screens/HomeScreen';
import { Contacts } from '../screens/ContactsScreen';
import {Products} from '../screens/ProductsScreen';




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    //<NavigarionContainer>
    <Stack.Navigator >
      <Stack.Screen name="HomeNav" component={Home} />

      <Stack.Screen name="ContactsNav" component={Contacts} />

      <Stack.Screen name="ProductsNav" component={Products} />


    </Stack.Navigator>
    //</Navigation Container, usar solo si estoy en un App.js
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

});
