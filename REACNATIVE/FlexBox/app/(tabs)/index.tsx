import { StatusBar } from 'expo-status-bar';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';

export default function App() {

  return (
    <View style={styles.container}>

    
    <View style={styles.contenedor2}></View>
    <View style={styles.contenedor3}>

      <View style={styles.contenedor4}></View>
      <View style={styles.contenedor5}>
        <View style={styles.contenedor6}></View>
        <View style={styles.contenedor7}>
          <Button title='BOTON 1'/>
          <Button title='BOTON 2'/>
          <Button title='BOTON 3'/>

        </View>

      </View>
    </View>

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    //Valor por defecto
    flexDirection:'column'
  },

  contenedor2:{
    flex:1,
    backgroundColor:'blue',

  },

  contenedor3:{
    flex:3,
    backgroundColor:'green',

  },

  contenedor4:{
    flex:1,
    backgroundColor:"yellow"

  },

  contenedor5:{
    flex:1,
    backgroundColor:"white",
    flexDirection:"row"
  },

  contenedor6:{

    flex:1,
    backgroundColor:"pink"
  },

  contenedor7:{

  flex:2,
    backgroundColor:"purple",
    flexDirection:'column',//Eje principal VERTICAL
    justifyContent:'center',// CENTRADOS (principal)
    alignItems:'stretch'//ocupa todo el espacio horizontal (secundario)
  }
});
