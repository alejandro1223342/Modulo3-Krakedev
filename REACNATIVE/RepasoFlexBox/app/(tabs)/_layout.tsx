import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';
export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.contendedor}>
        <Button title='btn'/>
        <Button title='btn'/>
        <Button title='btn'/>
      </View>
      <View style={styles.contenedor2}>
        <View style={styles.contenedor4}>
          
          <View style={styles.contenedor6}>
            <Button title='BOTON 1'/>
            <Button title='BOTON 2'/>
          </View>
          <View style={styles.contenedor7}>
          <Button title='OPE 1'/>
          <Button title='OPE 2'/>
          <Button title='OPE 3'/>
          
          </View>

        </View>
        <View style={styles.contenedor5}>
        <Button title='ACC 1'/>
        <Button title='ACC 2'/>
        </View>
        
      </View>
      <View style={styles.contenedor3}>
      <Button title='BOT FINAL'/>

      </View>


    </View>
    

  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  contendedor: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row', // Eje principal HORIZONTAL
    justifyContent: 'flex-end', // Centra los botones horizontalmente
    alignItems: 'center', // Centra los botones verticalmente
  },
  

  contenedor2:{
    flex:6,
    backgroundColor:'green'

  },

  contenedor3:{
    flex:1,
    backgroundColor:'orange',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'

  },

  contenedor4:{
      flex:4,
      backgroundColor:'purple',
      flexDirection:'row'

  },

  contenedor5:{
    flex:1,
    backgroundColor:'blue',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end'
  },

 

  contenedor6:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column',//Eje principal VERTICAL
    justifyContent:'space-around',// CENTRADOS (principal)
    alignItems:'center'

  },
 
  contenedor7:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start'
    
  }
});
