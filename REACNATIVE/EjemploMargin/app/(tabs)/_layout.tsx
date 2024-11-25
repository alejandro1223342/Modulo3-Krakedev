import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
export default function App() {
const[nombre,setNombre]=useState("");
const[apellido,setApellido]=useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo Margin</Text>
      
      <TextInput style={styles.cajaTexto}
      value={nombre}
      onChangeText={setNombre}
      placeholder='Ingrese su nombre'
      />

      <TextInput
      value={apellido}  style={styles.cajaTexto}
      onChangeText={setApellido}
      placeholder='Ingrese su apellido'
      />

      <Button
        title='OK'
      />
      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',//eje principal (vertical)
    justifyContent:'center',//vertical
    alignItems:'stretch',//horizontal
    paddingHorizontal: 10
  },

  cajaTexto:{
    borderColor:'gray',
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10,
    marginBottom:10
  
  },

  titulo:{
    fontSize:30,
    marginBottom:10,
    fontStyle:'italic',
        
  }
  
});
