import { StatusBar } from 'expo-status-bar';
import { ScrollView, TextInput, StyleSheet, Text, View, Alert, Button, FlatList } from 'react-native';
//Repintar pantalla
import { } from 'react-native-gesture-handler';
import { useState } from 'react';


let productos = [
  { nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: "Coca-Cola", categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.65, id: 102 },
  { nombre: "Chitos", categoria: "Snacks", precioCompra: 0.30, precioVenta: 0.47, id: 103 },
  { nombre: "Oreo", categoria: "Galletas", precioCompra: 0.25, precioVenta: 0.35, id: 104 }
];

export default function App() {

  const [productoNombre, setProductoNombre] = useState("");
  const [productoCategoria, setProductoCategoria] = useState("");
  const [productoPrecioCompra, setProductoPrecioCompra] = useState("");
  const [productoPrecioVenta, setProductoPrecioVenta] = useState("");
  const [productoId, setProductoId] = useState("");

  const [numElementos, setNumElementos] = useState(productos.length);
  const [esNuevo, setEsNuevo] = useState(true);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(-1);

  const validar = () => {
    if (productoId === '') {
      Alert.alert("Info", "El código no puede estar vacío");
      return true; // Retornamos true para indicar que la validación falló
    } else if (productoNombre === '') {
      Alert.alert("Info", "El nombre del producto no puede estar vacío");
      return true;
    } else if (productoCategoria === '') {
      Alert.alert("Info", "La categoría no puede estar vacía");
      return true;
    } else if (productoPrecioCompra === '') {
      Alert.alert("Info", "El precio de compra no puede estar vacío");
      return true;
    } else if (productoPrecioVenta === '') {
      Alert.alert("Info", "El precio de venta no puede estar vacío");
      return true;
    }
    return false; // Retornamos false si todos los campos son válidos
  }

  //Para arreglar el error debo definir una interfaz con las propiedades del componente
  //Al momento de crear el componente por estar tsx me da un error que encontre la solucion de agregar
  //una interfaz

  interface ItemProductoProps {
    indice: number;
    producto: {
      nombre: string;
      categoria: string;
      precioCompra: number;
      precioVenta: number;
      id: number
    }

  }



  let ItemProducto: React.FC<ItemProductoProps> = (props) => {

    return (
      <View style={styles.itemPersona}>

        <View style={styles.itemIndice}>

          <Text>{props.producto.id}</Text>
        </View>

        <View>
          <Text>{props.producto.nombre} ({props.producto.categoria})</Text>
          <Text style={styles.itemCosto}>USD {props.producto.precioVenta}</Text>

        </View>
        <View style={styles.itemBotones}>
          <Button
            title='Editar'
            color='green'
            onPress={() => {
              setProductoId(props.producto.id.toString())
              setProductoNombre(props.producto.nombre)
              setProductoCategoria(props.producto.categoria)
              setProductoPrecioCompra(props.producto.precioCompra.toString())
              setProductoPrecioVenta(props.producto.precioVenta.toString())

              setEsNuevo(false); // Cambiar el estado a 'false' para editar
              //console.log(esNuevo)

              setIndiceSeleccionado(props.indice); // Actualizar el índice seleccionado
              console.log(indiceSeleccionado)
            }}
          />

          <Button
            title='Eliminar'
            color='red'

            onPress={() => {
              productos.splice(props.indice, 1);
              setNumElementos(productos.length)

            }}
          />
        </View>

      </View>




    )
  }


  let limpiar = () => {
    setProductoNombre("");
    setProductoCategoria("");
    setProductoPrecioCompra("");
    setProductoPrecioVenta("");
    setProductoId("");
    setEsNuevo(true);
  }

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id == parseInt(productoId)) {
        return true;
      }
    }

    return false;

  }


  let guardarProducto = () => {

    if (validar()) {
      return; // Si la validación falla, no continuamos con el guardado
    }
    if (esNuevo) {

      if (existeProducto()) {

        Alert.alert("Info", "Ya existe un producto con el ID " + productoId)
      } else {
        let producto = {
          nombre: productoNombre,
          categoria: productoCategoria,
          precioCompra: parseFloat(productoPrecioCompra),
          precioVenta: parseFloat(productoPrecioVenta),
          id: parseFloat(productoId)
        }

        productos.push(producto);
        console.log(productos)
      };

    } else {
      //console.log("modificar producto")
      productos[indiceSeleccionado].nombre = productoNombre;
      productos[indiceSeleccionado].categoria = productoCategoria;
      productos[indiceSeleccionado].precioCompra = parseFloat(productoPrecioCompra);
      productos[indiceSeleccionado].precioVenta = parseFloat(productoPrecioVenta);
      //productos[indiceSeleccionado].id = parseFloat(productoId);
    }
    limpiar();
    setNumElementos(productos.length)

  }
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.areCabezera}>
          <Text>PRODUCTOS</Text>

          <TextInput

            style={styles.txt}
            value={productoId.toString()}
            placeholder='Ingrese el codigo del Producto'
            keyboardType='numeric'
            onChangeText={setProductoId}
            editable={esNuevo}

          />
          <TextInput
            style={styles.txt}
            value={productoNombre}
            placeholder='Ingrese el nombre del producto'
            onChangeText={setProductoNombre}
          />


          <TextInput
            style={styles.txt}
            value={productoCategoria}
            placeholder='Ingrese la categoría del producto'
            onChangeText={setProductoCategoria}
          />

          <TextInput
            style={styles.txt}
            value={productoPrecioCompra.toString()}
            placeholder='Ingrese el precio de compra'
            keyboardType='numeric'
            onChangeText={(text) => {
              setProductoPrecioCompra(text); // Actualiza el precio de compra
              setProductoPrecioVenta((parseFloat(text) * 1.2).toString()); // Calcula el precio de venta como el doble
            }}
             />

          <TextInput
            style={styles.txt}
            value={productoPrecioVenta.toString()}
            placeholder='Ingrese el precio de venta'
            keyboardType='numeric'
            onChangeText={setProductoPrecioVenta}
            editable={false}

          />


          <View style={styles.areaBotones}>
            <Button
              title='Guarda'
              onPress={() => {
                guardarProducto()
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
      </ScrollView>

      <View style={styles.areaContenido}>
        <FlatList style={styles.lista}

          data={productos}
          //Le paso un objeto
          renderItem={(obj) => {

            return (
              <ItemProducto indice={obj.index} producto={obj.item} />
            );
          }}

          //Le paso un elemmento que no se repita
          keyExtractor={(item) => {
            return item.id.toString();
          }}

        />
      </View>

      <View style={styles.areaPie}>

        <Text>Autor: Alejandro Muñoz</Text>
      </View>
      <StatusBar style="auto" />

    </View>

  )
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
  titulo: {
    backgroundColor: 'gray',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '900', // Hace las letras gruesas
  },
  cajaTexto: {
    borderColor: "black",
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 10
  },
  lista: {
    //flex:1,
    //backgroundColor:'lightpink',


  },



  itemPersona: {
    flex: 1,
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    paddingLeft: 10,
    margin: 10,
    flexDirection: 'row',

    borderWidth: 1, // Ancho del borde
    borderColor: 'black', // Color del borde
    borderRadius: 10, // Radio del borde para redondearlo
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  itemCosto: {
    fontWeight: '900', // Hace las letras gruesas
  },

  itemBotones: {

    flexDirection: 'row',
    //backgroundColor: 'red',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 15
  },

  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areCabezera: {
    flex: 4,
    //backgroundColor: 'chartreuse',
    justifyContent: 'center'

  },
  areaContenido: {
    flex: 6,
    marginTop: 10,
    //backgroundColor: 'coral',
  },

  itemIndice: {
    //backgroundColor: 'darkgray',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 10
  },
});