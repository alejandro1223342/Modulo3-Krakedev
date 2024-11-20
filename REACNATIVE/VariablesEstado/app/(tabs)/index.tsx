import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
//Repintar pantalla
import {useState} from 'react'

export default function App() {
  /*const arreglo = useState(0);
  const contadorEstado = arreglo[0];
  //Modificar variable de estado
  const setContadorEstado = arreglo[1];
*/

//destructuracion de arreglos
const [contadorEstado,setContadorEstado]=useState(0);

//let contador = 0;
 
const incrementar = () =>{
  
  //contador=contador+1;
  //console.log("Contador>>>"+contador);
  setContadorEstado(contadorEstado+1);
  console.log("ContadorEstado>>>"+contadorEstado);
 }

 const decrementar = () =>{
  setContadorEstado(contadorEstado-1);

 }


  return (
    <View style={styles.container}>
      <Text>Ejemplo Varialbes de Estado</Text>
      <Text>Contador Estado: {contadorEstado}</Text>
      <StatusBar style="auto" />
 <Button
    title='INCREMENTAR'
    onPress={incrementar}
    
 />

 <Button
    title='DECREMENTAR'
    onPress={decrementar}
 />

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
});
