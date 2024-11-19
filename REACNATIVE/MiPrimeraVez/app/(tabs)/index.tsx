import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {

  const despedirse = () =>{
    Alert.alert("Mensaje","Chao Pipol")
  }
  return (
    <View style={styles.container}>
      <Text>¡Hola Mundo desde Expo!</Text>
      <StatusBar style="auto" />
      <Button
          //Campo Obligatorio
          title="OK"

          //Propiedad onPress con javaScript
          //No recibe parametros
          onPress={()=> {
            Alert.alert("Mensaje","Hola Pipol")
          }}
          
      />

      <Button
        title='ADIOS'

        onPress={despedirse}
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
