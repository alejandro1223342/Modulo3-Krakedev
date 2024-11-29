import { View, StyleSheet, Text } from "react-native"
import { Button, Input } from '@rneui/base'
import { useState } from "react"
import {saveGrade} from "../services/GradeServices"

export const GradeForm = () => {

    const [subjet, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    
    
    //Funcion
    const save = () => { saveGrade({subjet:subjet,grade:grade}) }
    return (
        <View style={styles.container}>
            <Input
                value={subjet}
                onChangeText={setSubject}
                placeholder="Ejemplo: Matematicas"
                label="Materia"
            />

            <Input
                value={grade}
                onChangeText={setGrade}
                placeholder="0-10"
                label="Nota"
            />

            <Button
                title="Guardar"

                icon={{
                    name: 'save',
                    type: "entypo",
                    color: "white"

                }}
                buttonStyle={styles.saveButton}
                onPress={save}
            />

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

    saveButton: {
        backgroundColor: 'green'
    }

});
