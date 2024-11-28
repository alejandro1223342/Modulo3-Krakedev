import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';

//importante
import { Button, Icon } from '@rneui/base';



export default function App() {

  return (
    <View style={styles.container}>
      <Text>Ejemplo RNE</Text>
      <Button
        title="OK"
        icon={{
          //nombre del icono
          name: 'home',
          //familia de fuentes
          type: 'font-awesome',
          size: 20,
          color: 'white',
        }}

      />


      <Button
        title="Cancel"
        icon={<Icon

          name='plancast'
          type='zocial'
          color='white'
        />}




      />

      <Icon

        name='plancast'
        type='zocial'
        color='black'
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
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10
  }
});
