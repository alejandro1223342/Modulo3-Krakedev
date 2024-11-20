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
//En el parentesis va el estado inicial
const [contadorVidas,setContadorVidas]=useState(5);

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

 const quitarVida = () =>{
//La condición va antes en el código porque queremos validar el 
//estado actual del contador antes de realizar cualquier acción (como decrementar el valor)
  if(contadorVidas==0){
    Alert.alert("ADVERTENCIA","GAME OVER")
    return;// Detiene la ejecución para que no continúe restando.
  } 
  setContadorVidas(contadorVidas-1);

 }

 const premiar = () => {
setContadorVidas(contadorVidas+3)

 }

 

  return (
    <View style={styles.container}>
      <Text>Ejemplo Varialbes de Estado</Text>
      <Text>Contador Estado: {contadorEstado}</Text>
      <Text>VIDAS</Text>
      <Text>Contador Vidas: {contadorVidas} </Text>

      <StatusBar style="auto" />
 <Button
    title='INCREMENTAR'
    onPress={incrementar}
    
 />

 <Button
    title='DECREMENTAR'
    onPress={decrementar}
 />

 <Button
 title='PERDER VIDA'
 onPress={quitarVida}
 />

 <Button
 title='PREMIAR'
 onPress={premiar}
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
