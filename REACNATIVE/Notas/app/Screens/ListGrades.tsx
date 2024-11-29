import { View, StyleSheet, Text, FlatList } from "react-native"
import { getGrades } from "../services/GradeServices"
export const ListGrades = () => {
    const ItemGrade = ({nota}:any) =>{
        return(
            <View>
                <Text>
                    {nota.subject} {nota.grade}
                </Text>

            </View>
        )

    }

    return (
        <View style={styles.container}>
            <FlatList
                data={getGrades()}
                renderItem={({ item }) => {
                    return <ItemGrade nota={item}/>

                }}
                keyExtractor={(item)=>{return item.subject.toString()}}

            />


        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },

});
