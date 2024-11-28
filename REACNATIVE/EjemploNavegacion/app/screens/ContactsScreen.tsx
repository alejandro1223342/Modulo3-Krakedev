import { Button, View, Text, StyleSheet } from "react-native"


export const Contacts = ({ navigation }:any) => {

    return <View style={styles.container}>
        <Text>ESTOY EN CONTACTS</Text>
        <Button
            title="ir a Home"

            onPress={() => {
                navigation.navigate('HomeNav')

            }}
        />
        
    </View>

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center'

    },

});