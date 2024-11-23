import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
export default function App() {

  return (
    <View style={styles.container}>
      <Button title='COMP 1'/>
      <Button title='COMP 2' color="green"/>
      <Button title='COMP 3'/>
      <Button title='COMP 4'/>

      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
    //Eje principal
    flexDirection: "column",
    //Trabaja sobre el eje principal
    justifyContent:"space-around",

    //Afecta al eje secundario
    alignItems:"stretch"
   
  },
  
});
