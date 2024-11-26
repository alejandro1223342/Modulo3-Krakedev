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
      <View style={styles.areCabezera}>
        <Text>PERSONAS</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList style={styles.lista}

          data={personas}
          //Le paso un objeto
          renderItem={(obj) => {

            return (
              <View style={styles.itemPersona}>

                <View style={styles.itemIndice}>

                  <Text>{obj.index}</Text>
                </View>

                <View style={styles.itemContenido}>
                  <Text style={styles.textoPrincipal}> {obj.item.nombre} {obj.item.apellido}</Text>
                  <Text style={styles.textoSecundario}>{obj.item.cedula}</Text>;
                </View>
              </View>);
          }}

          //Le paso un elemmento que no se repita
          keyExtractor={(item) => {
            return item.cedula
          }}

        />
      </View>

      <View style={styles.areaPie}>

        <Text>Autor: Alejandro Muñoz</Text>
      </View>
      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    flexDirection: 'column',//eje principal vertical
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10

  },

  lista: {
    backgroundColor: 'lightpink',

  },

  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    paddingLeft: 10,
    flexDirection: 'row'

  },
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    padding: 10

  },

  textoPrincipal: {
    fontSize: 20

  },

  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },

  areCabezera: {
    flex: 4,
    backgroundColor: 'chartreuse'
  },
  areaContenido: {
    flex: 10,
    backgroundColor: 'coral'
  },

  areaPie: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  itemIndice: {
    //backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  itemContenido: {
    //backgroundColor: 'darkorange',
    flex: 20

  }
});
