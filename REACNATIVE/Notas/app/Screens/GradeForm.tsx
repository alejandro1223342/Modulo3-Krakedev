import { View, StyleSheet, Text } from "react-native"
import { Button, Input } from '@rneui/base'
import { useState } from "react"
import { saveGrade } from "../services/GradeServices"

export const GradeForm = () => {

    const [subjet, setSubject] = useState("");
    const [grade, setGrade] = useState("");

    //Errores
    const [errorSubjetc, setErrorSubject] = useState("");
    const [errorGrade, setErrorGrade] = useState("");
    let hasErrors=false;
    //Funcion
    const save = () => { 
        setErrorGrade("");
        setErrorSubject("");
        validate();
        if(!hasErrors){

            saveGrade({ subjet: subjet, grade: grade }) }

        }

    //Validaciones
    const validate = () => {
        if(subjet==("")){
            setErrorSubject("Debe ingresar una materia")
            hasErrors=true;
        }

        let gradeFloat = parseFloat(grade);

        
        if(gradeFloat==null || isNaN(gradeFloat) || gradeFloat<0 || gradeFloat>10){
            setErrorGrade("Debe ingresar una nota entre 0 y 10")
            hasErrors=true;

        }
    }

   
    return (
        <View style={styles.container}>
            <Input
                value={subjet}
                onChangeText={setSubject}
                placeholder="Ejemplo: Matematicas"
                label="Materia"
                errorMessage={errorSubjetc}

            />

            <Input
                value={grade}
                onChangeText={setGrade}
                placeholder="0-10"
                label="Nota"
                errorMessage={errorGrade}
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
