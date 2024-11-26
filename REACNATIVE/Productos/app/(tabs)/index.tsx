import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Alert, Button,FlatList } from 'react-native';
//Repintar pantalla
import {  } from 'react-native-gesture-handler';

let productos = [
  { nombre: "Doritos", categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id: 100 },
  { nombre: "Manicho", categoria: "Golosinas", precioCompra: 0.20, precioVenta: 0.25, id: 101 },
  { nombre: "Coca-Cola", categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.65, id: 102 },
  { nombre: "Chitos", categoria: "Snacks", precioCompra: 0.30, precioVenta: 0.47, id: 103 },
  { nombre: "Oreo", categoria: "Galletas", precioCompra: 0.25, precioVenta: 0.35, id: 104 }
];

export default function App() {

  return (
    <View style={styles.container}>
      <View >
         <Text style={styles.titulo} >PRODUCTOS</Text>
      </View>
      
      <FlatList style={styles.lista}
        data={productos}
        renderItem={(obj)=>{
        
          return(
            <View style={styles.itemPersona}>
              <Text>{obj.item.nombre} ({obj.item.categoria})</Text>
              <Text style={styles.itemCosto} >USD {obj.item.precioVenta}</Text>;
            </View>) 
        }}

        keyExtractor={(item)=>{
          return item.id.toString()
        }}
    
      />

      <StatusBar style="auto" />

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop:10
  },
  titulo:{
    //backgroundColor:'gray',
    textAlign:'center',
    justifyContent:'center',
    marginTop:10,
    marginVertical:10,
    fontSize:20,
    fontWeight: '900', // Hace las letras gruesas

  },
  cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  },
  lista:{
    //backgroundColor:'lightpink',
    

  },

  itemPersona:{
    backgroundColor:'lemonchiffon',
    marginBottom:10,
    paddingLeft:10,
    margin:10,
    borderWidth: 1, // Ancho del borde
  borderColor: 'black', // Color del borde
  borderRadius: 10, // Radio del borde para redondearlo
  padding:10
    
  },

  itemCosto:{
    fontWeight: '900', // Hace las letras gruesas

  }
});