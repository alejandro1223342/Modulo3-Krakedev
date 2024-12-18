import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View, Alert, Button, FlatList } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';
import { useState } from 'react';

let personas = [
  { nombre: "Alejandro", apellido: "Muñoz", cedula: "1234567891" },
  { nombre: "Paula", apellido: "Muñoz", cedula: "1234567892" },
  { nombre: "Javier", apellido: "Muñoz", cedula: "1234567893" }
];

//indica si se esta creando una nueva persona o si se esta modificando
let esNuevo = true

//Almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1

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



export default function App() {


  const [txtCedula, setTxtCedula] = useState("");
  const [txtNombre, setTxtNombre] = useState("");
  const [txtApellido, setTxtApellido] = useState("");

  const [numElementos, setNumElementos] = useState(personas.length);
  let ItemPersona: React.FC<ItemPersonaProps> = (props) => {
    return (
      <View style={styles.itemPersona}>

        <View style={styles.itemIndice}>

          <Text>{props.indice}</Text>
        </View>

        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}> {props.persona.nombre} {props.persona.apellido}</Text>
          <Text style={styles.textoSecundario}>{props.persona.cedula}</Text>
        </View>

        <View style={styles.itemBotones}>

          <Button
            title=' E '
            color='green'

            onPress={() => {
              setTxtCedula(props.persona.cedula)
              setTxtNombre(props.persona.nombre)
              setTxtApellido(props.persona.apellido)
              esNuevo = false

              indiceSeleccionado = props.indice
              console.log(indiceSeleccionado)
            }}
          />

          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = props.indice;
              personas.splice(indiceSeleccionado, 1);
              setNumElementos(personas.length)

            }}
          />

        </View>
      </View>);
  }


  let limpiar = () => {
    setTxtNombre("");

    setTxtCedula("");
    setTxtApellido("");
    esNuevo = true;

  }

  let existePersona = () =>{
    for(let i=0;i<personas.length;i++){
      if(personas[i].cedula == txtCedula){
        return true;
      }
    }

    return false;

  }


  let guardarPesona = () => {
    if (esNuevo) {

      if(existePersona()){

        Alert.alert("Info","Ya existe una persona con la cédula "+txtCedula)
      }else{
        let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
        personas.push(persona);  
      }
      
    } else {
      //console.log("modificar persona")

      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    //console.log("PERSONAS>>", personas);
    limpiar();
    setNumElementos(personas.length)

  }

  return (
    <View style={styles.container}>
      <View style={styles.areCabezera}>
        <Text>PERSONAS</Text>
        <TextInput style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cedula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su Nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su Apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title='Guarda'
            onPress={() => {
              guardarPesona()

            }}
          />
          <Button
            title='Nuevo'
            onPress={() => {
              limpiar();
            }}
          />
          <Text>Elementos: {numElementos}</Text>

        </View>

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
    //backgroundColor: 'lightblue',
    flexDirection: 'column',//eje principal vertical
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10

  },

  lista: {
    //backgroundColor: 'lightpink',

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
    //backgroundColor: 'chartreuse',
    justifyContent: 'center'

  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral',
  },

  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
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
    backgroundColor: 'darkorange',
    flex: 20

  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },

  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  itemBotones: {
    flexDirection: 'column',
    backgroundColor: 'darckorange',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
