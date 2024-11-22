import { StatusBar } from 'expo-status-bar';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
import{useState} from 'react'
import { parse } from '@babel/core';
export default function App() {
const [valor1,setValor1] = useState("Ingrese un Valor en Dolares")
  const [valorCambio,setValorCambio] = useState("");

  return (
    <View style={styles.container}>
      <Text>Ejemplo Convertidor</Text>
      <Text>Ingresa un valor en Dólares</Text>
      <Text>Valor del cambio {valorCambio}</Text>

      <TextInput style={styles.cajaTexto}
        value={valor1}

        onChangeText={(txt) => {
          setValor1(txt);
        }}
      />

      <Button
        title='PESOS COLOMBIANOS'

        onPress={() => {
          let resultado = parseFloat(valor1) * 4393.36
          setValorCambio(resultado.toFixed(2).toString());
        }}
      />

      <Button
        title='PESOS MEXICANOS'

        onPress={() => {
          let resultado = parseFloat(valor1)*20.49
          setValorCambio(resultado.toFixed(2).toString())

        }}  
      />

      <Button 
        title='EUROS'

        onPress={() => {
          let resultado= parseFloat(valor1)*0.96
          setValorCambio(resultado.toFixed(2).toString())

        }}    
      />

      

      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  }
});
