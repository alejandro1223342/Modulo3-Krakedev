import { StatusBar } from 'expo-status-bar';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
import{useState} from 'react'
export default function App() {

  const[num1,setNum1] =useState("Ingrese un numero");
  const[num2,setNum2] = useState("Ingrese un Numero") 
  const[resultado,setResultado] = useState("");
  return (
    <View style={styles.container}>
      <Text>Ejemplo Calculadora</Text>
      <Text>RESULTADO: {resultado}</Text>
      <TextInput style={styles.cajaTexto}
        value={num1}
        onChangeText={(txt)=>{
          setNum1(txt);
        }}
      />

      <TextInput style={styles.cajaTexto}
      value={num2}
      onChangeText={(txt)=>{
        setNum2(txt);
      }}
      />

      <Button
      title='SUMAR'
      onPress={()=>{
        let resultado = parseFloat(num1) + parseFloat(num2)
        setResultado(resultado.toString());        
      }}  
      />
      <Button

      title ="RESTAR"

      onPress={()=>{
        let resultado = parseFloat(num1)-parseFloat(num2)
        setResultado(resultado.toString())

      }}  
      />

      <Button
      title='MULTIPLICAR'

      onPress={()=>{
        let resultado = parseFloat(num1)*parseFloat(num2)
        setResultado(resultado.toString())
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
