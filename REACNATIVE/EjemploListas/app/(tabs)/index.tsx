import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, FlatList } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';

let personas = [
  { nombre: "Alejandro", apellido: "Muñoz", cedula: "1234567891" },
  { nombre: "Paula", apellido: "Muñoz", cedula: "1234567892" },
  { nombre: "Javier", apellido: "Muñoz", cedula: "1234567893" }
];


//Agrego la interfaz
interface ItemPersonaProps {
  indice: number;
  persona: {
    nombre: string;
    apellido: string;
    cedula: string;
  };
}


//Como crear un componente

//Me debe retornar jsx

//Funciona pero como trabajo en typescript me da error en js no devuelve error

/*let ItemPersona = (props) => {
  return (
    <View style={styles.itemPersona}>

      <View style={styles.itemIndice}>

        <Text>{props.indice}</Text>
      </View>

      <View style={styles.itemContenido}>
        <Text style={styles.textoPrincipal}> {props.persona.nombre} {props.persona.apellido}</Text>
        <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>;
      </View>
    </View>);
}*/


//Para arreglar el error debo definir una interfaz con las propiedades del componente
let ItemPersona: React.FC<ItemPersonaProps> = (props) => {
  return (
    <View style={styles.itemPersona}>

      <View style={styles.itemIndice}>

        <Text>{props.indice}</Text>
      </View>

      <View style={styles.itemContenido}>
        <Text style={styles.textoPrincipal}> {props.persona.nombre} {props.persona.apellido}</Text>
        <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>;
      </View>
    </View>);
}

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
              <ItemPersona indice={obj.index} persona={obj.item} />
            );
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
