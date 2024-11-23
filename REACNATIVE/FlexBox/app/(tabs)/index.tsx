import { StatusBar } from 'expo-status-bar';
import {  TextInput,StyleSheet, Text, View, Alert, Button } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Ejemplo Convertidor</Text>

    
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
});
