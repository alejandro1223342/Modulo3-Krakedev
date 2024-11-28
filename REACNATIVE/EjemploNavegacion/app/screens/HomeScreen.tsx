import { Button, View, Text, StyleSheet } from "react-native"

//debe llevar export para usarlo en otros archivos
//PONER ANY SI ESTOY EN UN ARCHIVO TSX
export const Home = ({ navigation }: any) => {

    return <View style={styles.container}>

        <Text style={styles.titulo}>HOME</Text>


        <View style={styles.botones}>
            <Button

                title="Contactos"

                onPress={() => {
                    navigation.navigate('ContactsNav')
                }}
            />

            <Button

                title=" Productos"

                onPress={() => {
                    navigation.navigate('ProductsNav')
                }}
            />
        </View>



    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },

    botones: {
        marginBottom: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20, // Espacio entre el título y los botones
        textAlign:'center'
      },

});