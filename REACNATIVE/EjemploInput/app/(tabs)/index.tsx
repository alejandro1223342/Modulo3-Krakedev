import { StatusBar } from 'expo-status-bar';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
import{useState} from 'react'
export default function App() {
const [nombre,setNombre]=useState("Ingrese su nombre")
const [apellido,setApellido]=useState("Ingrese su apellido") 
const [saludo,setSaludo]=useState("");
  return (
    <View style={styles.container}>
      <Text>Ejemplo TextInput</Text>
      <Text>Hola {saludo}</Text>
      <TextInput style={styles.cajaTexto}
        value={nombre}
        onChangeText={(txt)=>{
          setNombre(txt);
        }}
      />

      <TextInput
      style={styles.cajaTexto}
      value={apellido}
      onChangeText={(txt)=>{

        setApellido(txt);
      }}  
      />

      <Button
        title="Saludar"

        onPress={()=>{
          let completo = nombre+" "+apellido
          setSaludo(completo);

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
