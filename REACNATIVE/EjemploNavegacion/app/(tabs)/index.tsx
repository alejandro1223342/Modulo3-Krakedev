import 'react-native-gesture-handler'; // Necesario para React Navigation

// Necesario
import { NavigationContainer } from '@react-navigation/native'; // Asegúrate de importar NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

// Pantallas de la aplicación
import { Home } from '../screens/HomeScreen';
import { Contacts } from '../screens/ContactsScreen';
import { Products } from '../screens/ProductsScreen';

// Importando los íconos
import Icon from 'react-native-vector-icons/AntDesign';

// Navegadores de React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Crear los navegadores
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegador Tab
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={Contacts}
        options={{
          headerShown: false,
          tabBarLabel: "Contactos",
          tabBarIcon: ({ size }) => <Icon name="contacts" size={30} color="blue" />
        }} />
      <Tab.Screen
        name="TabContenidoB"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" size={30} color="blue" />
        }} />
    </Tab.Navigator>
  );
}

// Navegador Stack
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeNav" component={Home} />
      <Stack.Screen name="ContactsNav" component={Contacts} />
      <Stack.Screen name="ProductsNav" component={Products} />
    </Stack.Navigator>
  );
};

// Navegador Drawer
const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerProductosNav"
        component={StackNav}  // Aquí se usará Products para la pantalla de productos
        options={{ title: "Productos" }}
      />
      <Drawer.Screen
        name="DrawerEjemploTabs"
        component={TabNav}  // Aquí se usará TabNav para mostrar las pantallas de tabs
        options={{ title: "EjemploTabs" }}
      />
      <Drawer.Screen
        name="DrawerFinSesion"
        component={Products}  // Puedes poner cualquier componente para finalizar sesión
        options={{ title: "Finalizar Sesión" }}
      />
    </Drawer.Navigator>
  );
};

// Componente principal de la aplicación
export default function App() {
  return (
      <DrawerNav /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
