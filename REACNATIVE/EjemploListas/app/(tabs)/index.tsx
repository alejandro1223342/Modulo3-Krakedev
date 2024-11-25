import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, FlatList } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';

let personas = [
  { nombre: "Alejandro", apellido: "Muñoz", cedula: "1234567891" },
  { nombre: "Paula", apellido: "Muñoz", cedula: "1234567892" },
  { nombre: "Javier", apellido: "Muñoz", cedula: "1234567893" }
];

export default function App() {

  return (
    <View style={styles.container}>
      <Text>PERSONAS</Text>
      <FlatList style={styles.lista}

        data={personas}
        //Le paso un objeto
        renderItem={(obj) => {

          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoPrincipal}>{obj.index} {obj.item.nombre} {obj.item.apellido}</Text>
              <Text style={styles.textoSecundario}>{obj.item.cedula}</Text>;
            </View>);
        }}

        //Le paso un elemmento que no se repita
        keyExtractor={(item)=>{
          return item.cedula
        }}

      />
      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column',//eje principal vertical
    justifyContent:'flex-start',
    alignItems:'stretch',
    paddingTop: 50,
    paddingHorizontal: 10

  },

  lista:{
    backgroundColor:'lightpink',

  },

  itemPersona:{
    backgroundColor:'lemonchiffon',
    marginBottom:10,
    paddingLeft:10
  },
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    padding: 10

  },

  textoPrincipal:{
    fontSize:20

  },

  textoSecundario:{
    fontStyle:'italic',
    fontSize:16
  }
});
