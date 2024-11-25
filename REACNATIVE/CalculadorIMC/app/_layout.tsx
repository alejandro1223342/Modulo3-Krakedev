import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
export default function App() {

  const [peso,setPeso]=useState("");
  const [estatura,setEstatura]=useState("");
  const [resultado,setResultado]=useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejemplo Convertidor</Text>

      <TextInput style={styles.cajaTexto}
        value={peso}
        onChangeText={setPeso}
        placeholder='Ingrese su Peso'
      />

      <TextInput
        value={estatura} style={styles.cajaTexto}
        onChangeText={setEstatura}
        placeholder='Ingrese su Estatura en Centimetros'
      />

      <Button 
        title='Calcular'
        onPress={()=>{
          let calculo;
          calculo=parseFloat(peso)/((parseFloat(estatura) / 100) * (parseFloat(estatura) / 100));
          setResultado(calculo.toFixed(2).toString());

          if(calculo<18.5){
            Alert.alert("Su peso es inferior al normal")
          }else if(calculo>=18.5 && calculo<25.0){
            Alert.alert("Su peso es normal")
          }else if(calculo>=25.0 && calculo<30.0){
            Alert.alert("Su peso es superior al normal")
          }else if(calculo>=30){
            Alert.alert("Tiene Obesidad")
          }
        }}

      />
      <StatusBar style="auto" />

      <Text  style={styles.subtitulo}>Su peso es {resultado}</Text>


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
        
  },
  
  subtitulo:{
    fontSize:15,
    marginTop:20,
    fontStyle:'italic',
    justifyContent:'center'
  }
});