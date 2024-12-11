import { View, StyleSheet, Alert} from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import {createPostService} from '../services/TestServices'
import {postDocumentTypes} from '../services/TestServices'


export const PostForm = () => {
    const [subject,setSubject]=useState();
    const [message,setMessage]=useState();

    const createPost=()=>{
        console.log("creando post "+subject+" "+message);
        createPostService({ 
            title:subject,
            body:message
        },
        () => {
            Alert.alert("CONFIRAMCION","Se ha ingresado un nuevo POST")
        }
    );
    }

    const documentTypes = () => {
        console.log("creando post "+subject+" "+message);
        postDocumentTypes({ 
            title:subject,
            body:message
        },
        () => {
            Alert.alert("CONFIRAMCION","Se ha ingresado un nuevo Tipo de Documento")
        }
    );

    }

    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">Insertar Tipo de Documento</Text>
        </View>
        <View style={styles.formContainer}>            
            <Input
                placeholder='TIPO DE DOCUMENTO'
                value={subject}
                onChangeText={(value)=>{
                    setSubject(value);
                }}
            />
            <Input
                placeholder='NOMBRE DEL DOCUMENTO'
                value={message}
                onChangeText={(value)=>{
                    setMessage(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={documentTypes}
            />
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection:'column',
        justifyContent:'center'

    }
});
