import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'
import { getAllPostService } from '../services/TestServices'
import { createPostService } from '../services/TestServices'
import { updatePostService } from '../services/TestServices'
import { getByUserIdService } from '../services/TestServices'
import { getAllProductsService } from '../services/TestServices'
import { postProductsService } from '../services/TestServices'
import { updateProductsService } from '../services/TestServices'
import { getDocumentsTypes } from '../services/TestServices'

export const TestWebServices = () => {
  const getAllPosts = () => {
    getAllPostService();

  }

  const updatePost = () => {
    updatePostService();
  }

  const getByUserI = () => {

    getByUserIdService();
  }

  //Apis publicas

  const getAllProducts = () => {
    getAllProductsService();
  }

  const updateProduct = () => {
    updateProductsService();
  }

  //Test Apis

  const documentTypes = () => {
    getDocumentsTypes();
  }

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
      />
      <Button
        title="Crear Post"
        onPress={createPostService}
      />
      <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
      <Button
        title="Filtrar"
        onPress={getByUserI}

      />
      <Button
        title="EL PEPE"
        onPress={getAllProducts}
      />

      <Button
        title="YYY"
        onPress={postProductsService}
      />

      <Button
        title="ZZZ"
        onPress={updateProduct}
      />

      <Button
        title="TIPOS DE DOCUMENTOS"
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
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10

  }
});