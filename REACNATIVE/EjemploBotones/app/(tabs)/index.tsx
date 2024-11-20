import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {

  const finalizar = () =>{
    Alert.alert("Mensaje","Su sesion ha finalizado")
  }
  return (
    <View style={styles.container}>
      <Text>¡Hola Botones desde Expo!</Text>
      <StatusBar style="auto" />
      <Button
        title='FINALIZAR'

        onPress={finalizar}
      />
      <Button
          //Campo Obligatorio
          title="INICIAR"

          //Propiedad onPress con javaScript
          //No recibe parametros
          onPress={()=> {
            Alert.alert("Mensaje","Su sesion ha iniciado")
          }}
          
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
