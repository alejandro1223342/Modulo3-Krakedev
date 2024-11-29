import { View, StyleSheet, Text } from "react-native"

export const ListGrades = () => {
    return (
        <View style={styles.container}>
            <Text>Lista de Notas</Text>


        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
